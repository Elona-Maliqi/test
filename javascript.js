
function kontrollo(){

	var pyetje1 = document.kuiz.pyetje1.value;
	var pyetje2 = document.kuiz.pyetje2.value;

	var piket = 0;

	if (pyetje1 == "sakte") {
		piket++;
}
	if (pyetje2 == "sakte") {
		piket++;
}	
		
	var figura = ["win.gif", "meh.jpeg", "lose.gif"];
	var mesazhet = ["Shume Mire!", "Jo mire", "Keq"];
	var pike;

	if (piket == 0) {
		pike = 2;
	}

	if (piket==1) {
		pike = 1;
	}

	if (piket == 2) {
		pike = 0;
	}
	document.getElementById("pas_mbarimit").style.visibility 
	= "visible";

	document.getElementById("mesazhi").innerHTML = mesazhet[pike];
	document.getElementById("number_piket").innerHTML = "Ju moret " 
	+ piket + " piket.";
	document.getElementById("figure").src = figura[pike];
	}
	
