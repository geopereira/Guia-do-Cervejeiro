var empty = true;
function fillCup(typecolor) {
	if (!empty){
		document.getElementById("beercolor").style.height = "20px";
		document.getElementById("beercolor").style.transition = "height 2.8s";				
		setTimeout(function(){
		document.getElementById("beercolor").style.height = "130px";
		document.getElementById("beercolor").style.backgroundColor = typecolor;
		}, 2000);
	}
	if (empty){
		document.getElementById("beercolor").style.height = "130px";
		document.getElementById("beercolor").style.backgroundColor = typecolor;
		empty = false;
	}
}