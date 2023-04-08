// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVrTrip4dAJc8wD7Kc-NA5ABJ5-uTXqLg",
  authDomain: "linkedin-clone-1bb7a.firebaseapp.com",
  projectId: "linkedin-clone-1bb7a",
  storageBucket: "linkedin-clone-1bb7a.appspot.com",
  messagingSenderId: "90700559021",
  appId: "1:90700559021:web:3c9533d97c5369f2150c24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export { db, auth };
