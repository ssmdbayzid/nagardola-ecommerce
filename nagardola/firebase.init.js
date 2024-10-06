// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBodLcntU_FySy7e8VSr-AZCVXJ1R5n75Y",
  authDomain: "nagardola-5a150.firebaseapp.com",
  projectId: "nagardola-5a150",
  storageBucket: "nagardola-5a150.appspot.com",
  messagingSenderId: "787590819396",
  appId: "1:787590819396:web:8ac695bb76dd23fe2c9611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);