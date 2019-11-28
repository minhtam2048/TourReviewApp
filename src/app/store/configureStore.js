import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';




// export const configureStore = () => {
//     const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

//     const composedEnhacer = composeWithDevTools(
//         applyMiddleware(...middlewares),
//         reactReduxFirebase(firebase, rrfConfig), 
//         reduxFirestore(firebase)
//     );

//     const store = createStore(rootReducer, composedEnhacer);

//     return store;
// }


export const configureStore = () => {
    const middlewares = [thunk];

    const composedEnhacer = composeWithDevTools(
        applyMiddleware(...middlewares)
    );

    return createStore(rootReducer, composedEnhacer);
}