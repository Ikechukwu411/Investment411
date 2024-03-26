// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCfczoQ9xH6avAdurvpToMeAEglxJAkc1s",
  authDomain: "digitalfinance-59d76.firebaseapp.com",
  projectId: "digitalfinance-59d76",
  storageBucket: "digitalfinance-59d76.appspot.com",
  messagingSenderId: "692902500944",
  appId: "1:692902500944:web:5787059c30c6ca1c274f55",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
// export const functions = firebase.functions();
