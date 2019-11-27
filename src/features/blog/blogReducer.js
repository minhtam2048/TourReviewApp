import { createReducer } from "../../app/common/util/reducerUtils";
import { CREATE_BLOG, UPDATE_BLOG, DELETE_BLOG, FETCH_BLOGS } from "./blogConstants";


const initialState =  [];

const createBlog = (state, payload) => {
    return [...state, payload.blog]
}

const updateBlog = (state, payload) => {
    return [
        ...state.filter(blog => blog.id !== payload.blog.id), payload.blog
    ];
};

const deleteBlog = (state, payload) => {
    return [
        ...state.filter(blog => blog.id !== payload.blogId)
    ]
}

const fetchBlogs = (state, payload) => {
    return payload.blogs
}

export default createReducer(initialState, {
    [CREATE_BLOG]: createBlog,
    [UPDATE_BLOG]: updateBlog,
    [DELETE_BLOG]: deleteBlog,
    [FETCH_BLOGS]: fetchBlogs
});