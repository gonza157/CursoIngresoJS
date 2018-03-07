//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var letra;
	var numeromax=0;
	var letramax;
	var contador=0;

	while(contador<3)
	{
		numero=prompt("ingrese numero");
		letra=prompt("ingrese letra");
		numero=parseInt(numero);

		while(numero<0 || isNaN(numero) )
		{
			numero=prompt("ingrese numero");
			numero=parseInt(numero);

		}

		while( !isNaN(letra))
			{
				letra=prompt("ingrese letra");
			}

			if(numero> numeromax)
				{
					numeromax=numero;
					letramax=letra;
				}
		
		contador++;
	}
	alert("El numero maximo es "+numeromax+ "La letra es"+ letramax);

	
}

