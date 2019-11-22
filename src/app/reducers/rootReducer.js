import { combineReducer } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { reducer as ToastrReducer } from 'react-redux-toastr';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducer({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: FormReducer,
    toastr: ToastrReducer    
});

export default rootReducer;
