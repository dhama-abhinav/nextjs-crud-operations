
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEUFpRIWA0aXFWf599mEsB_nzIoT42TAg",
    authDomain: "my-nextjs-crud-demo.firebaseapp.com",
    projectId: "my-nextjs-crud-demo",
    storageBucket: "my-nextjs-crud-demo.appspot.com",
    messagingSenderId: "64180135730",
    appId: "1:64180135730:web:5071fd5c25b96641e6192b",
    measurementId: "G-K8EMG7CHMZ"
  })

const db=firebaseApp.firestore()

export default db