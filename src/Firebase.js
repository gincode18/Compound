// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase"
// const firebaseConfig = {
//     apiKey: "AIzaSyDIN5LKZGvr-gpydGW1WEhIKjz4GetC1uk",
//     authDomain: "compound-d2a53.firebaseapp.com",
//     projectId: "compound-d2a53",
//     storageBucket: "compound-d2a53.appspot.com",
//     messagingSenderId: "990058942910",
//     appId: "1:990058942910:web:bf111c1b5527344d01a9ef",
//     measurementId: "G-7ZL4GLKXJY"
//   };
//   const firebaseApp = firebase.initializeApp(firebaseConfig);

//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();

//   export {db, auth};
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOK7x5N5UnjY4TDqndzH7l5tvdNIsWFRc",
  authDomain: "todo-app-e3cf0.firebaseapp.com",
  projectId: "todo-app-e3cf0",
  storageBucket: "todo-app-e3cf0.appspot.com",
  messagingSenderId: "940016886081",
  appId: "1:940016886081:web:91686613f16b1b1f8001c0",
  measurementId: "G-JHPC7TP12K"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db }