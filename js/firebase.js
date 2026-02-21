// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Paste YOUR config here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpOAscZrpFMhich8xDFQw0pv_27Y_qkZ8",
  authDomain: "vamshi-one.firebaseapp.com",
  projectId: "vamshi-one",
  storageBucket: "vamshi-one.firebasestorage.app",
  messagingSenderId: "219596891116",
  appId: "1:219596891116:web:e92f700c47be8dddbd96c9",
  measurementId: "G-R7X7TGV15C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
