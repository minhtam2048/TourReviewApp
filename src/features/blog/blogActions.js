import { CREATE_BLOG, UPDATE_BLOG, DELETE_BLOG, FETCH_BLOGS } from "./blogConstants"
import { asyncActionStart, asyncActionFinish, asyncActionError } from "../async/asyncActions"
import { fetchSampleData } from "../../app/data/mockAPI"
import { toastr } from "react-redux-toastr"

export const createBlog = (blog) => {
    return async dispatch => {
        try {
            dispatch({
                type: CREATE_BLOG,
                payload: { blog }
            })
            toastr.success('Success!', 'Created');
        } catch (error) {
            toastr.error('Create error', 'something went wrong');
        }
    }
}

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