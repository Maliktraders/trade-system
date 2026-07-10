import { db, doc, getDoc } from "./firebase.js";

async function loadBroadcast() {

    try {

        const snap = await getDoc(doc(db, "settings", "broadcast"));

        if (snap.exists()) {

            const d = snap.data();

            document.getElementById("broadcast").innerHTML = d.message;

        } else {

            document.getElementById("broadcast").style.display = "none";

        }

    } catch (err) {

        console.log(err);

    }

}

loadBroadcast();

setInterval(loadBroadcast,5000);