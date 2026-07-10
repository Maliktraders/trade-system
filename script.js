import { db, doc, getDoc } from "./firebase.js";

// ==========================
// Load Live Signal
// ==========================
async function loadSignal() {

    try {

        const snap = await getDoc(doc(db, "signals", "live"));

        if (snap.exists()) {

            const d = snap.data();

            document.getElementById("signal").textContent = d.signal;
            document.getElementById("entry").textContent = d.entry;
            document.getElementById("sl").textContent = d.sl;
            document.getElementById("target1").textContent = d.target1;
            document.getElementById("status").textContent = d.status;

            const status = document.getElementById("status");

            if (d.status === "ACTIVE") {
                status.style.color = "#00e676";
            } else if (d.status === "TARGET HIT") {
                status.style.color = "#00e676";
            } else if (d.status === "STOPLOSS HIT") {
                status.style.color = "#ff3b30";
            } else {
                status.style.color = "#ffd600";
            }

        } else {

            document.getElementById("signal").textContent = "No Live Signal";

        }

    } catch (err) {

        console.error("Signal Error:", err);

        document.getElementById("signal").textContent = "Connection Error";

    }

}

// ==========================
// Load Website Notice
// ==========================
async function loadNotice() {

    try {

        const snap = await getDoc(doc(db, "settings", "notice"));

        if (snap.exists()) {

            document.getElementById("notice").textContent = snap.data().text;

        } else {

            document.getElementById("notice").textContent =
            "Welcome to Malik Traders";

        }

    } catch (err) {

        console.error("Notice Error:", err);

        document.getElementById("notice").textContent =
        "Welcome to Malik Traders";

    }

}

// First Load
loadSignal();
loadNotice();

// Auto Refresh Every 5 Seconds
setInterval(() => {

    loadSignal();
    loadNotice();

}, 5000);