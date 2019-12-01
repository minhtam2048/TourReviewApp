import { UPDATE_BLOG, DELETE_BLOG, FETCH_BLOGS, MORE_BLOGS } from "./blogConstants"
import { asyncActionStart, asyncActionFinish, asyncActionError } from "../async/asyncActions"
import { fetchSampleData } from "../../app/data/mockAPI"
import { toastr } from "react-redux-toastr"
import { createNewBlog, objectToArray } from "../../app/common/util/helpers"

export const createBlog = ({firebase, firestore}, blog) => {
    return async (dispatch, getState) => {
        const user = firebase.auth().currentUser;
        const photoURL = getState().firebase.profile.photoURL;
        const newBlog = createNewBlog(user, photoURL, blog, firestore);
        try {
            let createdBlog = await firestore.add('blogs', newBlog);
            await firestore.set(`blog_liker/${createdBlog.id}_${user.uid}`, {
                blogId: createdBlog.id,
                userUid: user.uid,
                blogDate: blog.date,
                poster: true
            });
            toastr.success('Success', 'Blog has been created');
            return createdBlog;

        } catch ( error) {
            console.log(error);
            toastr.error('Error', 'something bad has happened');
        }
    };
};

export const updateBlog = (blog) => {
    return async dispatch => {
        try {
            dispatch({
                type: UPDATE_BLOG,
                payload: { blog }
            })
            toastr.success('Success!', 'Updated');
        } catch (error) {
            toastr.error('Update error', 'something went wrong')
        }
    }
}

export const deleteBlog = (blogId) => {
    return {
        type: DELETE_BLOG,
        payload: {
            blogId
        }
    }
}

// export const loadBlogs = () => {
//     return async dispatch => {
//         try {
//             dispatch(asyncActionStart());
//             const blogs = await fetchSampleData();
//             dispatch({type: FETCH_BLOGS, payload: {blogs}});
//             dispatch(asyncActionFinish());
//         } catch (error) {
//             console.log(error);
//             dispatch(asyncActionError());
//         }
//     }
// }

export const getPagedBlogs = ({firestore}) => 
    async(dispatch, getState) => {
        dispatch(asyncActionStart());
        const LIMIT = 5;
        let nextBlogSnapshot = null;
        const {firestore: {data: {blogs: items}}} = getState();
        if (items && Object.keys(items).length >= LIMIT) {
            let itemsArray = objectToArray(items);
            nextBlogSnapshot = await firestore.collection('blogs').doc(itemsArray[itemsArray.length - 1].id).get();
        }

        let querySnap = await firestore.get({
            collection: 'blogs',
            limit: LIMIT,
            where: ['date', '<=', new Date()],
            orderBy: ['date'],
            startAfter: nextBlogSnapshot,
            storeAs: 'blogs'
        });

        if(querySnap.docs.length < LIMIT) {
            dispatch({type: MORE_BLOGS});
        }
        dispatch(asyncActionFinish());
    }