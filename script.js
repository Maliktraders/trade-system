import { db, doc, getDoc } from "./firebase.js";

// ==========================
// Load Live Signal
// ==========================
async function loadSignal() {

    // Home Page पर Signal नहीं दिखाना
    if (!document.getElementById("entry")) {
        return;
    }

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

        }

    } catch (err) {

        console.error("Signal Error:", err);

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
loadNotice();

if (document.getElementById("entry")) {
    loadSignal();
}

// Auto Refresh Every 5 Seconds
setInterval(() => {

    loadNotice();

    if (document.getElementById("entry")) {
        loadSignal();
    }

}, 5000);