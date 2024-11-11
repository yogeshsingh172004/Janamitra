// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCsLMhRwutN6P5IJ1gBSE2zixX3njehVk",
  authDomain: "project-janamitra.firebaseapp.com",
  projectId: "project-janamitra",
  storageBucket: "project-janamitra.firebasestorage.app",
  messagingSenderId: "566850248407",
  appId: "1:566850248407:web:bd6188a5d3ee70f6c79a92",
  measurementId: "G-SEJMQKRZPC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export default app;
export { db, storage }; 