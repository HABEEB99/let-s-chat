// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjRgKrG3nXlynX7NyJb2EFzHqQ57tQ3tg",
  authDomain: "let-s-chat-c952d.firebaseapp.com",
  projectId: "let-s-chat-c952d",
  storageBucket: "let-s-chat-c952d.appspot.com",
  messagingSenderId: "868007096185",
  appId: "1:868007096185:web:55a04232c6724d67f749a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()


export {db, auth, googleProvider}