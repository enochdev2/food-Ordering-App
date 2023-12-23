// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain: "mern-estate-44796.firebaseapp.com",
  projectId: "mern-estate-44796",
  storageBucket: "mern-estate-44796.appspot.com",
  messagingSenderId: "268771582463",
  appId: "1:268771582463:web:e3090ccf25a9622ea487ca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);