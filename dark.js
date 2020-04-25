/*LIGHT/DARK MODE */

var mode = document.getElementById("color");
var color = document.getElementById("dark");

var clickSound = new Audio('click.mp3');
var winSound = new Audio('victory.mp3');

clickSound.preload = "auto";
winSound.preload = "auto";


mode.onclick = function(){

	clickSound.play();

	var hh = setTimeout(function(){
	if(color.classname == "off"){
		color.setAttribute("href","light.css");
		color.classname = "on";
		mode.getElementsByTagName("a")[0].innerHTML = "Display : LIGHT";
	}

	else{
		color.setAttribute("href","");
		color.classname = "off";
		mode.getElementsByTagName("a")[0].innerHTML = "Display : DARK";
	}
	},400);
};


if(sessionStorage.getItem("display") == null)
	sessionStorage.setItem("display","dark");

 mode.onclick = function(){

 	clickSound.play();

	var hh = setTimeout(function(){
 	if(sessionStorage.getItem("display") == "dark"){
		color.setAttribute("href","light.css");
		sessionStorage.setItem("display","light");
		mode.getElementsByTagName("a")[0].innerHTML = "Display : LIGHT";
	}

	else{
		color.setAttribute("href","");
		sessionStorage.setItem("display","dark");
		mode.getElementsByTagName("a")[0].innerHTML = "Display : DARK";
	}
	},400);
};

if(sessionStorage.getItem("display") == "light"){
		color.setAttribute("href","light.css");
		mode.getElementsByTagName("a")[0].innerHTML = "Display : LIGHT";
}

else{
		color.setAttribute("href","");
		mode.getElementsByTagName("a")[0].innerHTML = "Display : DARK";
}