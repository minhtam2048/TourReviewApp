import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCvW-uRpQdhRNRtgRQwd4RhdbOVWQe81ZA",
    authDomain: "doratourist.firebaseapp.com",
    databaseURL: "https://doratourist.firebaseio.com",
    projectId: "doratourist",
    storageBucket: "doratourist.appspot.com",
    messagingSenderId: "846642340487",
    appId: "1:846642340487:web:5b04f62c6b44ef61754e22",
    measurementId: "G-3XMS8L7LML"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

