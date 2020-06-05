import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyAR1YTuiqnr_R90ZTD0TlbDJLpgJnZmj4w",
    authDomain: "ps-c19.firebaseapp.com",
    databaseURL: "https://ps-c19.firebaseio.com",
    projectId: "ps-c19",
    storageBucket: "ps-c19.appspot.com",
    messagingSenderId: "782075224276",
    appId: "1:782075224276:web:deaec3be8ee1d8d6055b41",
    measurementId: "G-K1Z67NYCW4"
};

firebase.initializeApp(firebaseConfig);