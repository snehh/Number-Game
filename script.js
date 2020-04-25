
/* --------------------------------------------------------------------------------------------------------------------- */

/* jumbling numbers */

function shuffle(arra1) {
    var ctr = arra1.length;
    var temp, index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

var arra1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var arra2 = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ];
var row, adder;

if(sessionStorage.getItem("difficulty") == null)
	sessionStorage.setItem("difficulty" , "n");

document.getElementById("diff").onclick = function(){

	clickSound.play();

	var hh = setTimeout(function(){
	if(sessionStorage.getItem("difficulty") == "n"){
		sessionStorage.setItem("difficulty" , "h");
		document.getElementById("diff").innerHTML = "Difficulty : HARD";

		document.getElementById("row5").innerHTML = "<button id=\"51\" disabled=\"true\"></button><button id=\"52\" disabled=\"true\"></button><button id=\"53\" disabled=\"true\"></button><button id=\"54\" disabled=\"true\"></button><button id=\"55\" disabled=\"true\"></button>";
		var myArray = shuffle(arra2);
		row = 5;
		adder = 26;

	}

	else if(sessionStorage.getItem("difficulty") == "h"){
		sessionStorage.setItem("difficulty" , "n");
		document.getElementById("diff").innerHTML = "Difficulty : NORMAL";

		document.getElementById("row5").innerHTML = "";
		var myArray = shuffle(arra1);
		row = 4;
		adder = 21;
	}

	window.location.reload();
	},400);

};

if(sessionStorage.getItem("difficulty") == "n"){
	document.getElementById("diff").innerHTML = "Difficulty : NORMAL";
	document.getElementById("row5").innerHTML = "";
	var myArray = shuffle(arra1);
	row = 4;
	adder = 21;
}


if(sessionStorage.getItem("difficulty") == "h"){
	document.getElementById("diff").innerHTML = "Difficulty : HARD";
	document.getElementById("row5").innerHTML = "<button id=\"51\" disabled=\"true\"></button><button id=\"52\" disabled=\"true\"></button><button id=\"53\" disabled=\"true\"></button><button id=\"54\" disabled=\"true\"></button><button id=\"55\" disabled=\"true\"></button>";
	var myArray = shuffle(arra2);
	row = 5;
	adder = 26;
}


/* assigning values to grid */

var k=0;
var i,j;
for(i=1;i<=row;i++)
	for(j=1;j<=5;j++){
		document.getElementById(10*i+j).innerHTML = myArray[k];
		document.getElementById(10*i+j).className = "a" + myArray[k].toString();
		if( myArray[k] == 1)
			document.getElementById(10*i+j).disabled = false;
		k++;
	}


/* --------------------------------------------------------------------------------------------------------------------- */

/* On Click Events */

var clickSound = new Audio('click.mp3');
var winSound = new Audio('victory.mp3');

clickSound.preload = "auto";
winSound.preload = "auto";

document.getElementById("newGame").onclick = function(){

	clickSound.play();
	sessionStorage.clear();
	var hh = setTimeout(function(){window.location.reload();},400);
}


var startTime = 0, nowTime = 0;
var finalTime;
var p = 0;
var flag = 0;


function Recurse(){

	nowTime = new Date();
	document.getElementById("Time").innerHTML = (nowTime - startTime)/1000;
	document.getElementsByClassName("a" + (p+1).toString())[0].onclick = function(){

		clickSound.pause();
		clickSound.currentTime = 0;
		clickSound.play();
		if(p<(adder-1)){
			document.getElementsByClassName("a" + (p+1).toString())[0].innerHTML = p+adder;
			document.getElementsByClassName("a" + (p+1).toString())[0].classList.add("a" + (p+adder).toString());
		}
		else{
			document.getElementsByClassName("a" + (p+1).toString())[0].classList.add("Erase");
		}
		document.getElementsByClassName("a" + (p+1).toString())[0].disabled = true;
		document.getElementsByClassName("a" + (p+2).toString())[0].disabled = false;
		document.getElementsByClassName("a" + (p+1).toString())[0].classList.remove("a" + (p+1).toString());
		p++;
	};
	if(p==((adder-1)*2-1))
		document.getElementsByClassName("a" + ((adder-1)*2).toString())[0].onclick = function(){
			document.getElementsByClassName("a" + (p+1).toString())[0].classList.add("Erase");
			document.getElementById("Game").classList.add("Erase");
			finalTime = nowTime - startTime;
			clearInterval(myTimer);
			document.getElementById("Lower").innerHTML = "<h2>Congrats you completed the game!</h2><br>";
			winSound.play();

		var hh = setTimeout(function(){
			if (adder == 21){

				if((localStorage.getItem("n5") == null)|| localStorage.getItem("n5") > finalTime){
				sessionStorage.setItem("name", window.prompt("You have beat a highscore! Enter your name"));	
				}
				partTwo();
			}
			else {

				if((localStorage.getItem("h5") == null)|| localStorage.getItem("h5") > finalTime){
				sessionStorage.setItem("name1", window.prompt("You have beat a highscore! Enter your name"));
				}
				partThree();
			}
		}, 400);
		};
}

document.getElementsByClassName("a" + (p+1).toString())[0].onclick = function(){
	
	clickSound.play();
	document.getElementsByTagName("h6")[0].classList.add("Erase");6
	startTime = new Date();
			document.getElementsByClassName("a" + (p+1).toString())[0].innerHTML = p+adder;
			document.getElementsByClassName("a" + (p+1).toString())[0].classList.add("a" + (p+adder).toString());
			document.getElementsByClassName("a" + (p+1).toString())[0].disabled = true;
			document.getElementsByClassName("a" + (p+2).toString())[0].disabled = false;
			document.getElementsByClassName("a" + (p+1).toString())[0].classList.remove("a" + (p+1).toString());
			p++;
			flag = 0;
	myTimer = setInterval(Recurse , 10);
};


/* --------------------------------------------------------------------------------------------------------------------- */

function partTwo(){

	var temp;
	if(localStorage.getItem("n1") !== null){

		if(parseInt(localStorage.getItem("n1")) > finalTime){

			localStorage.setItem("n5", localStorage.getItem("n4") );
			localStorage.setItem("n4", localStorage.getItem("n3") );
			localStorage.setItem("n3", localStorage.getItem("n2") );
			localStorage.setItem("n2", localStorage.getItem("n1") );
			localStorage.setItem("n1", finalTime );

			localStorage.setItem("n5-name", localStorage.getItem("n4-name") );
			localStorage.setItem("n4-name", localStorage.getItem("n3-name") );
			localStorage.setItem("n3-name", localStorage.getItem("n2-name") );
			localStorage.setItem("n2-name", localStorage.getItem("n1-name") );
			localStorage.setItem("n1-name", sessionStorage.getItem("name") );
		}

		else{
			if(localStorage.getItem("n2") !== null){

				if(parseInt(localStorage.getItem("n2")) > finalTime){

					localStorage.setItem("n5", localStorage.getItem("n4") );
					localStorage.setItem("n4", localStorage.getItem("n3") );
					localStorage.setItem("n3", localStorage.getItem("n2") );
					localStorage.setItem("n2", finalTime );

					localStorage.setItem("n5-name", localStorage.getItem("n4-name") );
					localStorage.setItem("n4-name", localStorage.getItem("n3-name") );
					localStorage.setItem("n3-name", localStorage.getItem("n2-name") );
					localStorage.setItem("n2-name", sessionStorage.getItem("name") );
				}

				else{
					if(localStorage.getItem("n3") !== null){

						if(parseInt(localStorage.getItem("n3")) > finalTime){

							localStorage.setItem("n5", localStorage.getItem("n4") );
							localStorage.setItem("n4", localStorage.getItem("n3") );
							localStorage.setItem("n3", finalTime );

							localStorage.setItem("n5-name", localStorage.getItem("n4-name") );
							localStorage.setItem("n4-name", localStorage.getItem("n3-name") );
							localStorage.setItem("n3-name", sessionStorage.getItem("name") );
						}

						else{
							if(localStorage.getItem("n4") !== null){

								if(parseInt(localStorage.getItem("n4")) > finalTime){

									localStorage.setItem("n5", localStorage.getItem("n4") );
									localStorage.setItem("n4", finalTime );

									localStorage.setItem("n5-name", localStorage.getItem("n4-name") );
									localStorage.setItem("n4-name", sessionStorage.getItem("name") );
								}

								else{
									if(localStorage.getItem("n5") !== null){

										if(parseInt(localStorage.getItem("n5")) > finalTime){

											localStorage.setItem("n5", finalTime );

											localStorage.setItem("n5-name", sessionStorage.getItem("name") );
										}
									}

									else{
										localStorage.setItem("n5",finalTime);
										localStorage.setItem("n5-name",sessionStorage.getItem("name"));
									}
								}
							}

							else{
								localStorage.setItem("n4",finalTime);
								localStorage.setItem("n4-name",sessionStorage.getItem("name"));
							}
						}
					}

					else{
						localStorage.setItem("n3",finalTime);
						localStorage.setItem("n3-name",sessionStorage.getItem("name"));
					}
				}
			}

			else{
				localStorage.setItem("n2",finalTime);
				localStorage.setItem("n2-name",sessionStorage.getItem("name"));
			}
		}
	}

	else{
		localStorage.setItem("n1",finalTime);
		localStorage.setItem("n1-name",sessionStorage.getItem("name"));
	}

	sessionStorage.clear();
}


function partThree(){

	var temp;
	if(localStorage.getItem("h1") !== null){

		if(parseInt(localStorage.getItem("h1")) > finalTime){

			localStorage.setItem("h5", localStorage.getItem("h4") );
			localStorage.setItem("h4", localStorage.getItem("h3") );
			localStorage.setItem("h3", localStorage.getItem("h2") );
			localStorage.setItem("h2", localStorage.getItem("h1") );
			localStorage.setItem("h1", finalTime );

			localStorage.setItem("h5-name", localStorage.getItem("h4-name") );
			localStorage.setItem("h4-name", localStorage.getItem("h3-name") );
			localStorage.setItem("h3-name", localStorage.getItem("h2-name") );
			localStorage.setItem("h2-name", localStorage.getItem("h1-name") );
			localStorage.setItem("h1-name", sessionStorage.getItem("name1") );
		}

		else{
			if(localStorage.getItem("h2") !== null){

				if(parseInt(localStorage.getItem("h2")) > finalTime){

					localStorage.setItem("h5", localStorage.getItem("h4") );
					localStorage.setItem("h4", localStorage.getItem("h3") );
					localStorage.setItem("h3", localStorage.getItem("h2") );
					localStorage.setItem("h2", finalTime );

					localStorage.setItem("h5-name", localStorage.getItem("h4-name") );
					localStorage.setItem("h4-name", localStorage.getItem("h3-name") );
					localStorage.setItem("h3-name", localStorage.getItem("h2-name") );
					localStorage.setItem("h2-name", sessionStorage.getItem("name1") );
				}

				else{
					if(localStorage.getItem("h3") !== null){

						if(parseInt(localStorage.getItem("h3")) > finalTime){

							localStorage.setItem("h5", localStorage.getItem("h4") );
							localStorage.setItem("h4", localStorage.getItem("h3") );
							localStorage.setItem("h3", finalTime );

							localStorage.setItem("h5-name", localStorage.getItem("h4-name") );
							localStorage.setItem("h4-name", localStorage.getItem("h3-name") );
							localStorage.setItem("h3-name", sessionStorage.getItem("name1") );
						}

						else{
							if(localStorage.getItem("h4") !== null){

								if(parseInt(localStorage.getItem("h4")) > finalTime){

									localStorage.setItem("h5", localStorage.getItem("h4") );
									localStorage.setItem("h4", finalTime );

									localStorage.setItem("h5-name", localStorage.getItem("h4-name") );
									localStorage.setItem("h4-name", sessionStorage.getItem("name1") );
								}

								else{
									if(localStorage.getItem("h5") !== null){

										if(parseInt(localStorage.getItem("h5")) > finalTime){

											localStorage.setItem("h5", finalTime );

											localStorage.setItem("h5-name", sessionStorage.getItem("name1") );
										}
									}

									else{
										localStorage.setItem("h5",finalTime);
										localStorage.setItem("h5-name", sessionStorage.getItem("name1") );
									}
								}
							}

							else{
								localStorage.setItem("h4",finalTime);
								localStorage.setItem("h4-name", sessionStorage.getItem("name1") );
							}
						}
					}

					else{
						localStorage.setItem("h3",finalTime);
						localStorage.setItem("h3-name", sessionStorage.getItem("name1") );
					}
				}
			}

			else{
				localStorage.setItem("h2",finalTime);
				localStorage.setItem("h2-name", sessionStorage.getItem("name1") );
			}
		}
	}

	else{
		localStorage.setItem("h1",finalTime);
		localStorage.setItem("h1-name", sessionStorage.getItem("name1") );
	}
	sessionStorage.clear();
}


