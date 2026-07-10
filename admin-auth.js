import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGN33xN5mWNi_JQvkx94cSlRRw7n-QZkQ",
  authDomain: "maliktraders-b8cd7.firebaseapp.com",
  projectId: "maliktraders-b8cd7",
  storageBucket: "maliktraders-b8cd7.firebasestorage.app",
  messagingSenderId: "392057399155",
  appId: "1:392057399155:web:d1330a01c25ea6c9a28706"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {

    if (!user) {
        window.location.href = "login.html";
    }

});