// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJlJW2KUVNeo_NBRznyYkpnrRJrlP4XVM",
  authDomain: "assignment-9-9cbfa.firebaseapp.com",
  projectId: "assignment-9-9cbfa",
  storageBucket: "assignment-9-9cbfa.firebasestorage.app",
  messagingSenderId: "739622846859",
  appId: "1:739622846859:web:77624391e9d6ed27f02f8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);