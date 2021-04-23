import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCBgawZRSrZyLGlI8DULYdlj7-cwJuDLsI",
    authDomain: "photogallery-11623.firebaseapp.com",
    projectId: "photogallery-11623",
    storageBucket: "photogallery-11623.appspot.com",
    messagingSenderId: "535354062043",
    appId: "1:535354062043:web:d5b89c1e970d720ab748fe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const imgstorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {imgstorage, projectFirestore , timestamp};