import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAcTKUwQ9tOThL4beO7gpzDDS-Bk5_9Wzs",
  authDomain: "rezenha-280c1.firebaseapp.com",
  projectId: "rezenha-280c1",
  storageBucket: process.env.STORAGE_BUCKETD,
  messagingSenderId: process.env.MESSAGIN_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db}