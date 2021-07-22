import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKYGLeRRjJIJDCVd6o-kpJqn5HGfedVzY",
  authDomain: "clone-c36a5.firebaseapp.com",
  projectId: "clone-c36a5",
  storageBucket: "clone-c36a5.appspot.com",
  messagingSenderId: "929778555038",
  appId: "1:929778555038:web:79b6e94226231aedfb438f",
  measurementId: "G-ZLFJMQDPWS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
