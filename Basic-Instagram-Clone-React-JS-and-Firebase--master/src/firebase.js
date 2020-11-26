import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDJo2aRXWOilcOB6AiQRvUaFmTPAzeukUM",
        authDomain: "instagram-clone-a1e50.firebaseapp.com",
        databaseURL: "https://instagram-clone-a1e50.firebaseio.com",
        projectId: "instagram-clone-a1e50",
        storageBucket: "instagram-clone-a1e50.appspot.com",
        messagingSenderId: "458664670083",
        appId: "1:458664670083:web:dc08a19ec0e1046b46fcb6",
        measurementId: "G-WZ7WR22PK6"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };