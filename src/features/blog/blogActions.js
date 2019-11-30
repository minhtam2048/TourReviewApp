import { CREATE_BLOG, UPDATE_BLOG, DELETE_BLOG, FETCH_BLOGS } from "./blogConstants"
import { asyncActionStart, asyncActionFinish, asyncActionError } from "../async/asyncActions"
import { fetchSampleData } from "../../app/data/mockAPI"
import { toastr } from "react-redux-toastr"
import { createNewBlog } from "../../app/common/util/helpers"

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

export const loadBlogs = () => {
    return async dispatch => {
        try {
            dispatch(asyncActionStart());
            const blogs = await fetchSampleData();
            dispatch({type: FETCH_BLOGS, payload: {blogs}});
            dispatch(asyncActionFinish());
        } catch (error) {
            console.log(error);
            dispatch(asyncActionError());
        }
    }
}