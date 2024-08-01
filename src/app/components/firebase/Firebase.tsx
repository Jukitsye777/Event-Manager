// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASkvZVGF5OeM_EFV4igBF5nJTZ_Bt0nG0",
  authDomain: "event-management-5f659.firebaseapp.com",
  projectId: "event-management-5f659",
  storageBucket: "event-management-5f659.appspot.com",
  messagingSenderId: "106377074550",
  appId: "1:106377074550:web:de7bca995a3639d0ed8c57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth  = getAuth(app)
export const db = getFirestore(app)
export default app