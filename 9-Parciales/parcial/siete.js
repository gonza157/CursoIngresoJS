function Mostrar()
{
	var nota;
	var notamin=0;
	var promedionota;
	var sexo;
	var totalvaronesaprobados=0;
	var contador=0;
	var acumulador=0;

	while(contador <3)
	{
		nota=prompt("Ingreso nota del alumno");
		sexo=prompt("Ingrese sexo del alumno");
		nota=parseInt(nota);

		while(nota<0 || nota>10 || isNaN(nota) )
		{
			nota=prompt("Ingreso nota del alumno");
			nota=parseInt(nota);
		}

		while( sexo !="m" && sexo != "f")
		{
			sexo=prompt("Ingrese sexo del alumno");
		}

		if(contador==0)
		{
			notamin=nota;
		}

		if(nota< notamin)
		{
			notamin=nota;
		}

		if(nota>5 && sexo =="m" )
		{
			totalvaronesaprobados++
		}
		contador++		
		acumulador=acumulador+nota;

	}

	promedionota=acumulador/contador;
	alert("El promedio de las notas es "+promedionota);
	alert("La cantidad de alumnos varones que sacaron mas de 6 es "+totalvaronesaprobados);
	alert("La nota mas baja es "+notamin);









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

	while(respuesta=="si")
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
		promedio=acumulador/acumulador2;
		alert("el promedio de los positivos es "+promedio);
		alert("La cantidad de bocales ingresadas es "+acumuladorbocales);
		alert("El numero mayor es "+numeromax);
		alert("el numero menor es "+numeromin);
	}*/
}