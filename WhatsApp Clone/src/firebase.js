import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAbNvlo0J_8INra1PgOw-PJxlnNmuzAbOY",
  authDomain: "watsapp-clone-ba6e9.firebaseapp.com",
  databaseURL: "https://watsapp-clone-ba6e9.firebaseio.com",
  projectId: "watsapp-clone-ba6e9",
  storageBucket: "watsapp-clone-ba6e9.appspot.com",
  messagingSenderId: "52635518040",
  appId: "1:52635518040:web:39dae471a39db5fa85f62d",
  measurementId: "G-L8JJFPE7GS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;