// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBZ7baapUqwob6FdQHuCILWAWyFPJ3dErU",
  authDomain: "test5-7e29c.firebaseapp.com",
  projectId: "test5-7e29c",
  storageBucket: "test5-7e29c.appspot.com",
  messagingSenderId: "914025293565",
  appId: "1:914025293565:web:46561a475e41fe871f8094",
  measurementId: "G-MYXM1GQFDJ",
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();