
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
	celldata.innerHTML = totalcalc(str);

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
	
	celldata.innerHTML = totalcalc(str);
}

function resetval(){

	document.getElementById("name").value="";
	document.getElementById("quant").value="";
	document.getElementById("price").value="";

	
}

function totalcalc(str){
	let tot = document.getElementById("totals");
	let total=0;
	let j;
	console.log("quant: "+quants+", prices: "+prices);
	for(j=0; j<names.length; j++){

		if(quants[j]==""){
			total += parseInt(prices[j]) ;
		}
			
		else if(prices[j]=="")
			total += parseInt(quants[j]);
		else if(prices[j]=="" && quants[j]=="");
		else
		total += quants[j]*prices[j];
	}
	str += `<tr><td>#</td><td></td><td colspan ="2"><b>Total: ${total}</b></td><td>~</td></tr>`;
	

	return str;

}

function storageo(){
	window.location.href="./Storagecontrol.html";
}

function inputData(){
	let fullstr="";
	let inpu = document.getElementById("namedata").value;
	let outp = document.getElementById("indat");
	console.log(inpu);
	if(localStorage.getItem("111")!=null){
		fullstr = localStorage.getItem("111");
	}
	else{
		localStorage.setItem("111","");
		fullstr = localStorage.getItem("111");
	}

	
	fullstr = fullstr.concat("\n"+inpu);
	localStorage.setItem("111",fullstr);
	console.log(fullstr);
	outp.innerText=fullstr;

}

function deleteData(){
	localStorage.removeItem("111");
}
