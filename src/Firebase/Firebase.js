import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAs0lL_I-nI8hqGf9Q2BkTxNJhurjwdhLw",
  authDomain: "react-firebase-auth-f3385.firebaseapp.com",
  projectId: "react-firebase-auth-f3385",
  storageBucket: "react-firebase-auth-f3385.appspot.com",
  messagingSenderId: "872795401572",
  appId: "1:872795401572:web:97d9ba4d9529fe43c09e71",
  measurementId: "G-3B4JN4Q3QM"
};


firebase.initializeApp(config);
firebase.firestore();

export default firebase;
