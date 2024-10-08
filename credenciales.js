// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVNKeIFFc8XM2FwyKppJl2zCUZ7wF-SEI",
  authDomain: "sgru-47c8e.firebaseapp.com",
  projectId: "sgru-47c8e",
  storageBucket: "sgru-47c8e.appspot.com",
  messagingSenderId: "459967548948",
  appId: "1:459967548948:web:d020e5dfbf0b6455b92101",
  measurementId: "G-V734F8SQLE"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;