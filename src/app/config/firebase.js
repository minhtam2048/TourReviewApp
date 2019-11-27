import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBhSd6jAXSKQ7IqRB-eFg5_hz7HLHSvpYM",
  authDomain: "tourreviewapp.firebaseapp.com",
  databaseURL: "https://tourreviewapp.firebaseio.com",
  projectId: "tourreviewapp",
  storageBucket: "tourreviewapp.appspot.com",
  messagingSenderId: "750127825670",
  appId: "1:750127825670:web:14e0f18ebf967d18495487",
  measurementId: "G-XDS69HVHMF"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
