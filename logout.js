import {
  auth,
  signOut
} from "./firebase.js";

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

  logoutBtn.addEventListener("click", async () => {

    try {

      await signOut(auth);

      alert("✅ Logout Successful");

      window.location.href = "login.html";

    } catch (err) {

      alert(err.message);

    }

  });

}