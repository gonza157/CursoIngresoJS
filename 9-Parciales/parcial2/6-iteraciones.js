//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var mayor=0;
	var menor=0;
	var contador=0;

		
	while(numero>0 && contador<7)
	{
		numero=prompt("Ingresar numero");
		numero= parseInt(numero);
		contador++
		while()
		{	
			numero=prompt("Ingresar numero");
			numero= parseInt(numero);
		
		}
			if(numero>mayor)
				{
					mayor=numero;
				}
			if(numero<menor)
				{
					menor=numero;
				}
		}	
	
	}
		alert("El numero mayor es "+mayor);
		alert("El numero menor es "+menor);
}

