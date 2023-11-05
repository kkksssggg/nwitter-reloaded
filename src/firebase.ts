// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsq7M0-r-aUdLrseSld1YWI3jfreZ7xhk",
  authDomain: "nwitter-reloaded-6ac71.firebaseapp.com",
  projectId: "nwitter-reloaded-6ac71",
  storageBucket: "nwitter-reloaded-6ac71.appspot.com",
  messagingSenderId: "908223922855",
  appId: "1:908223922855:web:65f400ad195a76b7f85182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);