function Mostrar()
{
	var numero;
	var numero1;
	var letra;
	var acumulador=0;
	var acumulador2=0;
	var numerosimpares=0;
	var respuesta="si";
	var promedio;

	
	
	

	while(respuesta=="si")
	{
		letra=prompt("ingresar letra");
		numero1=prompt("ingresar numero");
		numero=parseInt(numero1);
		while(numero<-50 || numero>50 || isNaN(letra))
			
		{
			numero1=prompt("ingresar numero");
			numero=parseInt(numero1);
		}
		while(!isNaN(letra ))
		{
			letra=prompt("ingresar letra");
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
		
		}
		}
			



	promedio=acumulador/acumulador2;
	alert("el promedio de los positivos es "+promedio);
		
	
	}


/*ingresar dos datos un numero y una letra del -50 al 50 
informar el promedio de los numerod positivos
la cantidad de numero inpares
la suma de todos los numero culla letra alla sido una bocal
numero maximo y la letra con la cual fue ingresado*/ 

