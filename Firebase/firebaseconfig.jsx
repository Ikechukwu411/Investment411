import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBP7-10xzPJxSGAaHeVGhTwZhx5KdlfpCM",
  authDomain: "exchangegecko.firebaseapp.com",
  projectId: "exchangegecko",
  storageBucket: "exchangegecko.appspot.com",
  messagingSenderId: "573623265142",
  appId: "1:573623265142:web:41bfd5d3931235b1883c57",
  measurementId: "G-RDXD8GYY2T",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
// export const functions = firebase.functions();
