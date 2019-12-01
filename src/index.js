import React from 'react';
import ReactDOM from 'react-dom';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './index.css';
import App from '../src/app/layout/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { configureStore } from './app/store/configureStore';
import ScrollToTop from './app/common/util/ScrollToTop';
// import { loadBlogs } from './features/blog/blogActions';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore';
import firebase from './app/config/firebase';

const store = configureStore();

// store.dispatch(loadBlogs());

const rrfConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true,
    updateProfileOnLogin: false
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};

console.log(store.getState())

let render= () => {
    ReactDOM.render(
        <Provider store={store}>
             <ReactReduxFirebaseProvider {...rrfProps}>
                 <BrowserRouter>
                 <ScrollToTop>
                     <ReduxToastr timeOut={2000} preventDuplicates position="bottom-right" 
                                 transitionIn="fadeIn" transitionOut="fadeOut" />
                     <App />
                 </ScrollToTop>
                 </BrowserRouter>
             </ReactReduxFirebaseProvider>
         </Provider>, 
         document.getElementById('root')
     );
}

if(module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render);
    });
}

render();




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
