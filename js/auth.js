import { auth } from "./firebase.js";
import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
sendEmailVerification,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// SIGNUP
signupForm.addEventListener("submit", async (e) => {
e.preventDefault();

const email = signupForm.querySelector("input[type='email']").value;
const password = signupForm.querySelector("input[type='password']").value;

try {
const userCredential = await createUserWithEmailAndPassword(auth, email, password);
await sendEmailVerification(userCredential.user);
alert("Verification email sent. Please verify before login.");
} catch (error) {
alert(error.message);
}
});

// LOGIN
loginForm.addEventListener("submit", async (e) => {
e.preventDefault();

const email = loginForm.querySelector("input[type='email']").value;
const password = loginForm.querySelector("input[type='password']").value;

try {
const userCredential = await signInWithEmailAndPassword(auth, email, password);

if (!userCredential.user.emailVerified) {
alert("Please verify your email before logging in.");
await signOut(auth);
return;
}

alert("Login successful!");
window.location.href = "index.html";

} catch (error) {
alert(error.message);
}
});
