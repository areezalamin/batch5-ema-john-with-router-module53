// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWzLBfQ99mfGcZwCLM05S64YC2tvYp4Ts",
  authDomain: "ema-john-with-router-batch5.firebaseapp.com",
  projectId: "ema-john-with-router-batch5",
  storageBucket: "ema-john-with-router-batch5.appspot.com",
  messagingSenderId: "61085092145",
  appId: "1:61085092145:web:bee42738d164a10608c810",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
