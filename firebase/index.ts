// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqLIs-o1sfJvDmjpcmv_CyGP-AIzBleJo",
  authDomain: "kitapyurdu-vue.firebaseapp.com",
  projectId: "kitapyurdu-vue",
  storageBucket: "kitapyurdu-vue.appspot.com",
  messagingSenderId: "609710646836",
  appId: "1:609710646836:web:d97bd8439716432f954c61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export{
  db
}