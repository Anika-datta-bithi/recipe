// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyKvXljad8dyyw2ng6rIhJhqXmnqffwII",
  authDomain: "vigilant-art-340115.firebaseapp.com",
  projectId: "vigilant-art-340115",
  storageBucket: "vigilant-art-340115.appspot.com",
  messagingSenderId: "496437797889",
  appId: "1:496437797889:web:33c59fa8cfe19a6c724c00",
  measurementId: "G-F4R77BETEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

export default auth;
