import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnM4MkSEkisY_USAcWtTT9MOd4FhyhR4I",
  authDomain: "signal-clone-7134a.firebaseapp.com",
  projectId: "signal-clone-7134a",
  storageBucket: "signal-clone-7134a.appspot.com",
  messagingSenderId: "355520850738",
  appId: "1:355520850738:web:7e468d846d9980c686052b"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();


export { db, auth }











/*const firebaseConfig = {
    apiKey: "AIzaSyC5cD3sS4OvfV2k_M3mRw-xKAun5bc8bHA",
    authDomain: "signal-clone-73b11.firebaseapp.com",
    projectId: "signal-clone-73b11",
    storageBucket: "signal-clone-73b11.appspot.com",
    messagingSenderId: "938385284550",
    appId: "1:938385284550:web:1b19c59a914975ea7fa6c7"
  };*/