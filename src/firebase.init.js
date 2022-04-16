import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDF7k5S5pmc6e1Oi4UzzNjY86Gu9Gim964",
  authDomain: "dentario-dental-care.firebaseapp.com",
  projectId: "dentario-dental-care",
  storageBucket: "dentario-dental-care.appspot.com",
  messagingSenderId: "1020315631538",
  appId: "1:1020315631538:web:9b61bc5cd6d0d2a3c76eab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
