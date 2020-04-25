document.getElementById("reset").onclick = function(){
	localStorage.clear();
	document.getElementById("n01").innerHTML = "-";
	document.getElementById("n02").innerHTML = "-";
	document.getElementById("n03").innerHTML = "-";
	document.getElementById("n04").innerHTML = "-";
	document.getElementById("n05").innerHTML = "-";
	
	document.getElementById("h01").innerHTML = "-";
	document.getElementById("h02").innerHTML = "-";
	document.getElementById("h03").innerHTML = "-";
	document.getElementById("h04").innerHTML = "-";
	document.getElementById("h05").innerHTML = "-";
}





if (localStorage.getItem("n1") !== null)
	document.getElementById("n01").innerHTML = (localStorage.getItem("n1-name")) + ": " + parseInt(localStorage.getItem("n1"))/1000 + " seconds";

if (localStorage.getItem("n2") !== null)
	document.getElementById("n02").innerHTML = (localStorage.getItem("n2-name")) + ": " + parseInt(localStorage.getItem("n2"))/1000 + " seconds";

if (localStorage.getItem("n3") !== null)
	document.getElementById("n03").innerHTML = (localStorage.getItem("n3-name")) + ": " + parseInt(localStorage.getItem("n3"))/1000 + " seconds";

if (localStorage.getItem("n4") !== null)
	document.getElementById("n04").innerHTML = (localStorage.getItem("n4-name")) + ": " + parseInt(localStorage.getItem("n4"))/1000 + " seconds";

if (localStorage.getItem("n5") !== null)
	document.getElementById("n05").innerHTML = (localStorage.getItem("n5-name")) + ": " + parseInt(localStorage.getItem("n5"))/1000 + " seconds";


if (localStorage.getItem("h1") == null)
	document.getElementById("h01").innerHTML = "-";
else
	document.getElementById("h01").innerHTML = (localStorage.getItem("h1-name")) + ": " + parseInt(localStorage.getItem("h1"))/1000 + " seconds";

if (localStorage.getItem("h2") == null)
	document.getElementById("h02").innerHTML = "-";
else
	document.getElementById("h02").innerHTML = (localStorage.getItem("h2-name")) + ": " + parseInt(localStorage.getItem("h2"))/1000 + " seconds";

if (localStorage.getItem("h3") == null)
	document.getElementById("h03").innerHTML = "-";
else
	document.getElementById("h03").innerHTML = (localStorage.getItem("h3-name")) + ": " + parseInt(localStorage.getItem("h3"))/1000 + " seconds";

if (localStorage.getItem("h4") == null)
	document.getElementById("h04").innerHTML = "-";
else
	document.getElementById("h04").innerHTML = (localStorage.getItem("h4-name")) + ": " + parseInt(localStorage.getItem("h4"))/1000 + " seconds";

if (localStorage.getItem("h5") == null)
	document.getElementById("h05").innerHTML = "-";
else
	document.getElementById("h05").innerHTML = (localStorage.getItem("h5-name")) + ": " + parseInt(localStorage.getItem("h5"))/1000 + " seconds";


