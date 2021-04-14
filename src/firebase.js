import firebase from "firebase";

const firebaseApp =  firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
    projectId:  process.env.REACT_APP_PROJECT_ID,
    storageBucket:  process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId:  process.env.REACT_APP_MEASUREMENT_ID
    // apiKey: "AIzaSyB-yduBzyaEuj2fcaYHJtnJ7NwCbZS91HY",
    // authDomain: "todo-list-4810f.firebaseapp.com",
    // projectId: "todo-list-4810f",
    // storageBucket: "todo-list-4810f.appspot.com",
    // messagingSenderId: "823754707038",
    // appId: "1:823754707038:web:c772db0d036c9335ba24cf",
    // measurementId: "G-D8C87B1L30"
})

const db = firebaseApp.firestore();

export default db;