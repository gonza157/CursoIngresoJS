/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var nombre;
	nombre=document.getElementById('elNombre').value;
	//para que muestre el valor del input tenes que poner .value( sino te muestra el tipo de elemento)
	alert(nombre);	
}


