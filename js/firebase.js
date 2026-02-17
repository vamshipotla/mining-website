// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Paste YOUR config here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVztU4PzBMVfLK7aqreJPjuQ_a4hzEtys",
  authDomain: "miniing-website-2807.firebaseapp.com",
  projectId: "miniing-website-2807",
  storageBucket: "miniing-website-2807.firebasestorage.app",
  messagingSenderId: "999934720353",
  appId: "1:999934720353:web:a6d131032f2cca1707ed20",
  measurementId: "G-5SRRVPJCS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
