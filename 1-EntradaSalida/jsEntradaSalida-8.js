/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

	var numerodividendo;
	var numerodivisor;
	var resultado;
	var numerouno;
	var numerodos;

	numerouno=document.getElementById('numeroDividendo').value;
	numerodos=document.getElementById('numeroDivisor').value;

	numerodividendo=parseInt(numerouno);
	numerodivisor=parseInt(numerodos);

	resultado= numerodividendo % numerodivisor;
	//solo para los restos y saber si es primo o no. 


	alert(" el resultado es "+ +resultado);
	
}
