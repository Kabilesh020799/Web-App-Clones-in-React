import firebase from 'firebase'

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyC4BtRp2uOrGKbBvxcvPu3hgRW_FwPJFsM",
    authDomain: "messenger-clone-b3c35.firebaseapp.com",
    databaseURL: "https://messenger-clone-b3c35.firebaseio.com",
    projectId: "messenger-clone-b3c35",
    storageBucket: "messenger-clone-b3c35.appspot.com",
    messagingSenderId: "295093179056",
    appId: "1:295093179056:web:6dbf8108f871b08607a175",
    measurementId: "G-VM89N1GHP1"
  });

  const db = firebaseApp.firestore();
  export default db;