function Mostrar()
{
	var numero;
	var cantidadpar=0;
	var promedio;
	var suma=0;
	var numeromax=0;
	var numeromin=0;
	var contador=0;
	var respuesta="si";

	while(respuesta != "no")
	{
		numero=prompt("ingrese numero positivo");
		numero=parseInt(numero);

		while(numero <=0)
		{
			numero=prompt("ingrese numero positivo");
			numero=parseInt(numero);
		}

		if( numero %2 ==0)
		{
			cantidadpar++
		}

		if(contador==0)
		{
			numeromax=numero;
			numeromin=numero;
		}

		if(numero>numeromax)
		{
			numeromax=numero;
		}else
		{
			if(numero<numeromin)
			{
				numeromin=numero;
			}
		}

		 suma=suma+numero;
		 contador++;

		 respuesta=prompt("¿Desea continuar ingresando numeros?");


	}
	
	promedio= suma/contador;
	document.write("<br>"+ "La cantidad de numero pares es "+ cantidadpar);
	document.write("<br>"+ "El promedio es "+promedio);
	document.write("<br>"+"El numero mayor es "+numeromax);
	document.write("<br>"+"El numero menor es "+ numeromin);
}
