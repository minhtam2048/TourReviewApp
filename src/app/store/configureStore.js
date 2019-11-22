import { createStore, applyMiddleWare } from 'redux';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import firebase from '../config/firebase';

const rrfConfig = {
    userProfiles: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true
}

export const configureStore = () => {
    const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

    const composedEnhancer = composeWithDevTools(
        applyMiddleWare(...middlewares), 
        reactReduxFirebase(firebase, rrfConfig),
        reduxFirestore(firebase)
    );

    const store = createStore(rootReducer, composedEnhancer);

    return store;
};