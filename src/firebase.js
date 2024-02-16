// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8qzKEizOWOpDCbIfbZ9KJ4wvY_xtKkvo",
  authDomain: "the-growth-exchange.firebaseapp.com",
  projectId: "the-growth-exchange",
  storageBucket: "the-growth-exchange.appspot.com",
  messagingSenderId: "1095375899114",
  appId: "1:1095375899114:web:38cf5c557719d195b74a93",
  measurementId: "G-W78JDNXSEG"
};

const firebase = initializeApp(firebaseConfig);
export default firebase;
