import {
  auth,
  signInWithEmailAndPassword
} from "./firebase.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    try {

        await signInWithEmailAndPassword(auth, email, password);

        alert("✅ Login Successful");

        window.location.href = "admin.html";

    } catch (err) {

        alert("❌ " + err.message);

    }

});