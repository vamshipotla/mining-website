import { auth } from "./firebase.js";
import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// SIGNUP
signupForm.addEventListener("submit", async (e) => {
e.preventDefault();

const email = signupForm.querySelector("input[type='email']").value;
const password = signupForm.querySelector("input[type='password']").value;

try {
await createUserWithEmailAndPassword(auth, email, password);
alert("Account created successfully! You can now log in.");
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
await signInWithEmailAndPassword(auth, email, password);
alert("Login successful!");
window.location.href = "index.html";
} catch (error) {
alert(error.message);
}
});
