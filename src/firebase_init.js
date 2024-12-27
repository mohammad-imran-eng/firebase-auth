// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp54QYzZm4yJATbb5b0yrD_AUIZgAM57M",
  authDomain: "fir-auth-171b9.firebaseapp.com",
  projectId: "fir-auth-171b9",
  storageBucket: "fir-auth-171b9.firebasestorage.app",
  messagingSenderId: "750603315255",
  appId: "1:750603315255:web:e53e83445d94619f1ff7b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);