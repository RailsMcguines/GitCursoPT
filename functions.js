var res;

function calc(){
var op1= document.getElementById("op1").value;
var op2= document.getElementById("op2").value;	

	if((isNaN(op1) || isNaN(op2)) || op1=="" || op2=="" ){
		 document.getElementById("res").innerHTML= "please insert numbers";
	}
	else{
		res=parseInt(op1) + parseInt(op2);
		document.getElementById("res").innerHTML= "El resultado es: " + res;
	}

}


