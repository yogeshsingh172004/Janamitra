// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD4sg9viBPOq4ct9UiuhxraC2dMAHKHU4",
  authDomain: "janaforum-3d36a.firebaseapp.com",
  projectId: "janaforum-3d36a",
  storageBucket: "janaforum-3d36a.firebasestorage.app",
  messagingSenderId: "1095509733924",
  appId: "1:1095509733924:web:2e3d6bf7c952c84e2f5eb1",
  measurementId: "G-JEL4D4M5JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);