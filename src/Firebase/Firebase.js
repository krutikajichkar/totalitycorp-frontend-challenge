// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbvLN5hV1i4meUxaMv8b76DWxzGA32n60",
  authDomain: "flipkart-clone-fd2eb.firebaseapp.com",
  projectId: "flipkart-clone-fd2eb",
  storageBucket: "flipkart-clone-fd2eb.appspot.com",
  messagingSenderId: "938358565991",
  appId: "1:938358565991:web:d7cd695c874bf01326f8c2",
  measurementId: "G-Q8CW7M0KC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);