// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHKH6L3z-dNAnpP1TU50OV7QEnAomU87E",
  authDomain: "ema-john-simple-4d86e.firebaseapp.com",
  projectId: "ema-john-simple-4d86e",
  storageBucket: "ema-john-simple-4d86e.appspot.com",
  messagingSenderId: "593769782250",
  appId: "1:593769782250:web:95ba87a3beafaa0cfd3093"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;