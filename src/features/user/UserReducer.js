import {createReducer} from '../../app/common/util/reducerUtils';
import {GET_USER_BLOGS} from './UserConstants';

const initialState = {
    blogs: []
};

const getUserBlogs = (state, payload) => {
    return {
        ...state,
        blogs: payload.blogs
    }
};

export default createReducer(initialState, {
    [GET_USER_BLOGS]: getUserBlogs
})