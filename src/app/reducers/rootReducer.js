import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import test from '../../features/testarea/test';
import blogReducer from '../../features/blog/blogReducer';
import modalReducer from '../../features/modals/modalReducer';

const rootReducer = combineReducers({
    form: FormReducer,
    test: test,
    blogs: blogReducer,
    modals: modalReducer
});

export default rootReducer;