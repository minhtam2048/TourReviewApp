import { combineReducers } from 'redux';
import test from '../../features/testarea/test';
import blogReducer from '../../features/blog/blogReducer';

const rootReducer = combineReducers({
    test: test,
    blogs: blogReducer
});

export default rootReducer;