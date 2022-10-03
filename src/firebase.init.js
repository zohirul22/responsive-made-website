// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFV5Uo3k8GZAFKkx337twrwwDSDeWHpSQ",
  authDomain: "responsive-website-b64f2.firebaseapp.com",
  projectId: "responsive-website-b64f2",
  storageBucket: "responsive-website-b64f2.appspot.com",
  messagingSenderId: "367669837320",
  appId: "1:367669837320:web:fc8042eed25e8637a3dbbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;