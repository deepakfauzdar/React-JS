// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW2d4WREc4C38dWn-QtWh9pSkjmFbuphg",
  authDomain: "react-firebase-project-16404.firebaseapp.com",
  projectId: "react-firebase-project-16404",
  storageBucket: "react-firebase-project-16404.appspot.com",
  messagingSenderId: "1091488997963",
  appId: "1:1091488997963:web:8a91e9a9b6ec7b5230a3ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
//initialize Storage
export const storage=getStorage();
//initialize fireStore
export const db = getFirestore(app);
