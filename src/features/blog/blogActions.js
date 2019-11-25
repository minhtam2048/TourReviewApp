import { CREATE_BLOG, UPDATE_BLOG, DELETE_BLOG } from "./blogConstants"

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