import { createReducer } from "../../app/common/util/reducerUtils";
import { CREATE_BLOG, UPDATE_BLOG, DELETE_BLOG, FETCH_BLOGS, MORE_BLOGS } from "./blogConstants";


const initialState =  {
    blogs: [],
    moreBlogs: true,
};

export const createBlog = (state, payload) => {
    return [...state.blogs, Object.assign({} ,payload.blog)];
}

export const updateBlog = (state, payload) => {
    return [...state.blogs.filter(blog => blog.id !== payload.blog.id), Object.assign({}, payload.blog)];
};

export const deleteBlog = (state, payload) => {
    return [...state.blogs.filter(blog => blog.id !== payload.blogId)];
}

const fetchBlogs = (state, payload) => {
    return payload.blogs
}

export const moreBlogs = (state) => {
    return {
        ...state.blogs,
        moreBlogs: true
    }
}



export default createReducer(initialState, {
    [CREATE_BLOG]: createBlog,
    [UPDATE_BLOG]: updateBlog,
    [DELETE_BLOG]: deleteBlog,
    [FETCH_BLOGS]: fetchBlogs,
    [MORE_BLOGS]: moreBlogs
});