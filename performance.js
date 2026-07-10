import { db, collection } from "./firebase.js";
import {
getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

async function loadPerformance() {

const snap = await getDocs(collection(db,"history"));

let total=0;
let win=0;
let loss=0;
let active=0;

snap.forEach((doc)=>{

const d=doc.data();

total++;

if(d.status==="TARGET HIT") win++;

if(d.status==="STOPLOSS HIT") loss++;

if(d.status==="ACTIVE") active++;

});

let accuracy=0;

if(total>0){
accuracy=((win/total)*100).toFixed(1);
}

document.getElementById("totalTrades").innerHTML=total;
document.getElementById("winningTrades").innerHTML=win;
document.getElementById("losingTrades").innerHTML=loss;
document.getElementById("accuracy").innerHTML=accuracy+"%";
document.getElementById("totalPoints").innerHTML=active;

}

loadPerformance();