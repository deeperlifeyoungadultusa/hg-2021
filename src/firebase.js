import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA9XNc30h-czoeu9UfnXZHGD4i8PCsfjfc",
    authDomain: "dlbc-ya-conference-app.firebaseapp.com",
    databaseURL: "https://dlbc-ya-conference-app.firebaseio.com",
    projectId: "dlbc-ya-conference-app",
    storageBucket: "dlbc-ya-conference-app.appspot.com",
    messagingSenderId: "341667552255",
    appId: "1:341667552255:web:16c8c22701a5c1cb50a5ca"
  };
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;