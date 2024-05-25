
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Q7Wz4dGUBPX_457XW9XXLaCxZz2z-s4",
  authDomain: "myblogpage-b9f5f.firebaseapp.com",
  projectId: "myblogpage-b9f5f",
  storageBucket: "myblogpage-b9f5f.appspot.com",
  messagingSenderId: "1014072392579",
  appId: "1:1014072392579:web:8842b4c20a6bbbd18194b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;