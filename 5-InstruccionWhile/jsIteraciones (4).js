function Mostrar()
{
	var numero1;
	var numero=prompt("ingresar un muero entre 0 y 10");
	numero1= parseInt(numero);

	while(numero1<0 || numero1 >10)
	{
		numero=prompt("ingresar un muero entre 0 y 10");
		numero1= parseInt(numero);
	}

	document.getElementById('Numero').value= numero1;
}
	


/*var numero1;
	var numero = prompt("ingrese un número entre 0 y 10.");
	numero1= parseInt(numero);

	while (numero1<0 || numero1>10)
	{
		numero = prompt("ingrese un número entre 0 y 10.");	

	}

	document.getElementById('Numero').Value = numero1;
	*/


