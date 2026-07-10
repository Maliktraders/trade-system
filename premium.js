import { db, doc, getDoc } from "./firebase.js";

async function loadPremiumSignal() {

    try {

        const snap = await getDoc(doc(db, "signals", "live"));

        if (snap.exists()) {

            const d = snap.data();

            document.getElementById("signal").textContent = d.signal;
            document.getElementById("entry").textContent = d.entry;
            document.getElementById("sl").textContent = d.sl;
            document.getElementById("target1").textContent = d.target1;
            document.getElementById("target2").textContent = d.target2;

            const status = document.getElementById("status");

            status.textContent = d.status;

            if (d.status === "ACTIVE") {

                status.style.color = "#00e676";

            } else if (d.status === "TARGET HIT") {

                status.style.color = "#00e676";

            } else if (d.status === "STOPLOSS HIT") {

                status.style.color = "#ff5252";

            } else {

                status.style.color = "#ffd54f";

            }

        }

    } catch (err) {

        console.error(err);

        document.getElementById("signal").textContent = "Unable to Load";

    }

}

loadPremiumSignal();

setInterval(loadPremiumSignal,5000);