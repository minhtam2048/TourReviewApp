import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr';
import test from '../../features/testarea/test';
import blogReducer from '../../features/blog/blogReducer';
import modalReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import userReducer from '../../features/user/UserReducer';
import asyncReducer from '../../features/async/asyncReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,
    test: test,
    blogs: blogReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: toastrReducer,
    user: userReducer
});

export default rootReducer;