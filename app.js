
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
		str += `<tr><td>${j+1}</td><td>${names[j]}</td><td>${quants[j]}</td><td>${prices[j]}</td><td><button onclick = "handler(this.id)"class="clos" id="${j+1}">X</button></td></tr>`;
	}
	celldata.innerHTML = str;

}



function handler(id){
	console.log("X clicked:"+id);
	let str=`<tr>
	<th>Sr.</th>
	<th>Item Name</th>
	<th>Quatity</th>
	<th>Price</th>
	<th>Remove</th>
</tr>`;
	let tempname =[];
	let tempquant =[];
	let tempprice =[];
	let x=0;
	for(let j=0; j<names.length; j++){
		if(j==(id-1)){
			i--;
		}
		else{
			tempname[x] = names[j];
			tempquant[x] = quants[j];
			tempprice[x++] =prices[j];
			if(x>=names.length)
				break;
		}	
		
	}
	names=tempname;
	quants=tempquant;
	prices=tempprice;
	console.log(names)
	for(let j=0; j<names.length; j++){
		str += `<tr><td>${j+1}</td><td>${names[j]}</td><td>${quants[j]}</td><td>${prices[j]}</td><td><button onclick = "handler(this.id)"class="clos" id="${j+1}">X</button></td></tr>`;
	}
	celldata.innerHTML = str;
}

function resetval(){

	document.getElementById("name").value="";
	document.getElementById("quant").value="";
	document.getElementById("price").value="";

	
}

