import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAcTKUwQ9tOThL4beO7gpzDDS-Bk5_9Wzs",
  authDomain: "rezenha-280c1.firebaseapp.com",
  projectId: "rezenha-280c1",
  storageBucket: "rezenha-280c1.firebasestorage.app",
  messagingSenderId: "275680845444",
  appId: "1:275680845444:web:baea4f40d544f280ebecd1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}