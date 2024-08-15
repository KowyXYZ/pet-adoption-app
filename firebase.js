// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAB1s4GeWgZAZPlNQzI2KDQqOZvgyMzw14",
  authDomain: "adopt-app-7bdb5.firebaseapp.com",
  projectId: "adopt-app-7bdb5",
  storageBucket: "adopt-app-7bdb5.appspot.com",
  messagingSenderId: "222804744036",
  appId: "1:222804744036:web:46c84e4c4f24c98cab8c71",
  measurementId: "G-28TEGTP6XH"
};


// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { auth };