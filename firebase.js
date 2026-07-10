// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";


// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAGN33xN5mWNi_JQvkx94cSlRRw7n-QZkQ",
  authDomain: "maliktraders-b8cd7.firebaseapp.com",
  projectId: "maliktraders-b8cd7",
  storageBucket: "maliktraders-b8cd7.firebasestorage.app",
  messagingSenderId: "392057399155",
  appId: "1:392057399155:web:d1330a01c25ea6c9a28706"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);


// Export Everything
export {
  db,
  auth,
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};