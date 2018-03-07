function Mostrar()
{
	var importe;
	var mayorimporte=0;
	var menorimporte=0;
	var contador=0;
	
	
	while(contador<23)
	{
		importe=prompt("ingrese valor");
		importe=parseInt(importe);

		while(isNaN(importe))
		{
			importe=prompt("ingrese valor");
			importe=parseInt(importe);
		}
		if (contador == 0) 
		{
			mayorimporte = importe;
			menorimporte = importe;
		}

		if(importe>mayorimporte)
			{
				mayorimporte=importe;
			}else
			{
				if(importe<menorimporte)
				{
					menorimporte=importe;
				}
			}
			contador++;
	}
	alert("El mayor importe es "+mayorimporte);
	alert("El menor importe es "+menorimporte);

	









	/*var numero;
	var numero1;
	var letra;
	var acumulador=0;
	var acumulador2=0;
	var numerosimpares=0;
	var respuesta="si";
	var promedio;
	var acumuladorbocales=0;
	var numeromax=0;
	var numeromin=0;

	while(respuesta !="no")
	{
		letra=prompt("ingresar letra");
		numero1=prompt("ingresar numero");
		numero=parseInt(numero1);
		
		while(!isNaN(letra ))
		{
			letra=prompt("ingresar letra");
		}

		while(numero<-50 || numero>50 || isNaN(numero))
			
		{
			numero1=prompt("ingresar numero");
			numero=parseInt(numero1);
		}
		
		if(numero>0)
			{
				acumulador= acumulador+ numero;
				acumulador2= acumulador2 + 1;
			}
			
		if(numero %2 !==0)
			{
				numerosimpares++
			}
			
		if(letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u")
				{
					acumuladorbocales++;
				}

	
		if(numeromax<numero)
		{
			numeromax=numero;
		}
		if(numero<numeromin)
		{
			numeromin=numero;
		}
		
		respuesta=prompt("¿Desea ingresar mas valores?");
	}
		promedio=acumulador/acumulador2;
		alert("el promedio de los positivos es "+promedio);
		alert("La cantidad de bocales ingresadas es "+acumuladorbocales);
		alert("El numero mayor es "+numeromax);
		alert("el numero menor es "+numeromin);*/
	
}