

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, signInWithCustomToken } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbu2HwF6hyY4C5Vem31NfMo8h9_2_5Qhc",
  authDomain: "clone-3395a.firebaseapp.com",
  projectId: "clone-3395a",
  storageBucket: "clone-3395a.appspot.com",
  messagingSenderId: "1030250953233",
  appId: "1:1030250953233:web:d05351f96d5788f569cfb0",
  measurementId: "G-JDZ7QCVBCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export {auth};