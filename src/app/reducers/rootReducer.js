import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import test from '../../features/testarea/test';
import blogReducer from '../../features/blog/blogReducer';
import modalReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../../features/async/asyncReducer';

const rootReducer = combineReducers({
    form: FormReducer,
    test: test,
    blogs: blogReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer
});

export default rootReducer;