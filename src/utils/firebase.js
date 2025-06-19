// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAbjpfHL1zL_flrzmSWCC-cQHIph7z9Cvw",
  authDomain: "netflixgpt-39f53.firebaseapp.com",
  projectId: "netflixgpt-39f53",
  storageBucket: "netflixgpt-39f53.firebasestorage.app",
  messagingSenderId: "849618447729",
  appId: "1:849618447729:web:c44c0001fcc830e6f25ad0",
  measurementId: "G-TBDME8BM94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  
export const auth = getAuth();