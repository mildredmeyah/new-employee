// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCm-SplDSGHKRaOZNivb6EvOxSdDA9PXTE",
  authDomain: "new-employee-5cee0.firebaseapp.com",
  projectId: "new-employee-5cee0",
  storageBucket: "new-employee-5cee0.appspot.com",
  messagingSenderId: "567503375893",
  appId: "1:567503375893:web:616b5b7a2227a74b39481c",
  measurementId: "G-S5FTZBW3HC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);