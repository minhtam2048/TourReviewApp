import { CREATE_BLOG, UPDATE_BLOG, DELETE_BLOG, FETCH_BLOGS } from "./blogConstants"
import { asyncActionStart, asyncActionFinish, asyncActionError } from "../async/asyncActions"
import { fetchSampleData } from "../../app/data/mockAPI"

export const createBlog = (blog) => {
    return {
        type: CREATE_BLOG,
        payload: {
            blog  
        }
    }
}

export const updateBlog = (blog) => {
    return {
        type: UPDATE_BLOG,
        payload: {
            blog
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