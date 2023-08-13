// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB16dXzD90ayrQXJGq_Z84k1y9S6Od_QJc",
  authDomain: "smanettony-9685d.firebaseapp.com",
  projectId: "smanettony-9685d",
  storageBucket: "smanettony-9685d.appspot.com",
  messagingSenderId: "846309071975",
  appId: "1:846309071975:web:f45284bde65c4157e008c2",
  measurementId: "G-6LHFZT22CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//const auth = firebase.auth();

//const db = firebase.firestore();


export const auth = getAuth(app)
