// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-92ae1.firebaseapp.com",
  projectId: "mern-estate-92ae1",
  storageBucket: "mern-estate-92ae1.appspot.com",
  messagingSenderId: "1001011172766",
  appId: "1:1001011172766:web:9ef91f95ef3a51037c728f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);