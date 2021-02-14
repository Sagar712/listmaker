
let names = [];
let quants = [];
let prices = [];
let i=0;
let celldata = document.getElementById("allcell");

function addval(){
	console.log("clicked");
	let str=`<tr>
	<th>Sr.</th>
	<th>Item Name</th>
	<th>Quatity</th>
	<th>Price</th>
	<th>Remove</th>
</tr>`;
	let name = document.getElementById("name").value;
	let quant = document.getElementById("quant").value;
	let price = document.getElementById("price").value;
	
	names[i] = name;
	quants[i] = quant;
	prices[i++] = price;

	let lop=0;
	for(let j=0; j<names.length; j++){
		str += `<tr><td>${j+1}</td><td>${names[j]}</td><td>${quants[j]}</td><td>${prices[j]}</td><td><button class="clos">X</button></td></tr>`;
	}
	celldata.innerHTML = str;

}

/*

const closebtn = document.querySelector(".clos");
closebtn.addEventListener('click', function handler(){
	console.log("X clicked");
});

*/