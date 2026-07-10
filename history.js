import { db, collection } from "./firebase.js";
import {
getDocs,
query,
orderBy,
limit
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const historyList=document.getElementById("historyList");

async function loadHistory(){

historyList.innerHTML="<p>Loading...</p>";

try{

const q=query(
collection(db,"history"),
orderBy("updatedAt","desc"),
limit(20)
);

const snap=await getDocs(q);

historyList.innerHTML="";

snap.forEach((doc)=>{

const d=doc.data();

historyList.innerHTML+=`

<div class="card">

<h2>${d.signal}</h2>

<p><b>Entry:</b> ${d.entry}</p>

<p><b>SL:</b> ${d.sl}</p>

<p><b>Target:</b> ${d.target1}</p>

<p><b>Status:</b> ${d.status}</p>

</div>

<br>

`;

});

}catch(e){

historyList.innerHTML="<p>❌ Error Loading History</p>";
console.error(e);

}

}

loadHistory();
