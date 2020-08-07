import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA9sGYatY1sQ74g_7kLB18jmEflrWRphdM",
  authDomain: "tik-tok-clone-570b5.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-570b5.firebaseio.com",
  projectId: "tik-tok-clone-570b5",
  storageBucket: "tik-tok-clone-570b5.appspot.com",
  messagingSenderId: "392556615298",
  appId: "1:392556615298:web:4bf1164d92456e41e0069b",
  measurementId: "G-N5Y63F6HNB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;