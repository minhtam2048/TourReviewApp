import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export const configureStore = () => {
    const middlewares = [thunk];

    const composedEnhacer = composeWithDevTools(
        applyMiddleware(...middlewares)
    );

    return createStore(rootReducer, composedEnhacer);
};