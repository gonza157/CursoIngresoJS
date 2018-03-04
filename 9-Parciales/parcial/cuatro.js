function Mostrar()
{
	var numero1;
	var numero2;
	var resta;
	var multiplicacion;
	var suma;

	numero1=prompt("ingresar primer valor");
	numero2=prompt("ingresar primer valor");
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	if(numero1>numero2)
	{
		resta=numero1-numero2;
		alert("la resta es "+resta);
	}else
		{
			if (numero1==numero2) 
			{
				multiplicacion=numero1*numero2;
				alert("La multiplicacion da "+multiplicacion);
			}else
				{
					suma=numero1+numero2;
					alert("La suma da "+suma);
				}
		}








	/*var numerouno;
	var numerodos;
	var numerotres;
	var numerouno1;
	var numerodos2;
	var numerotres3;
	var Mayor;
	var Menor;
	
	numerouno1= prompt("Ingrese primer numero");
	numerodos2= prompt("Ingrese segundo numero");
	numerotres3= prompt("Ingrese tercer numero");

	numerouno=parseInt(numerouno1);
	numerodos=parseInt(numerodos2);
	numerotres=parseInt(numerotres3);

		if(numerouno>numerodos && numerouno>numerotres)
		{
			Mayor=numerouno;
		}else
			{

				if (numerodos>numerotres)
					{
		 				Mayor=numerodos;
					}else	
					{	
						Mayor=numerotres;
					}

			}
	

	if(numerouno<numerodos && numerouno<numerotres)
	{
		Menor=numerouno;
	}else
	{

		if (numerodos<numerotres )
		{
		 Menor=numerodos;
		}else	
		
			{	
				Menor=numerotres;
			}

	}

	alert("El numero mayor es "+ Mayor);
	alert("El numero menor es "+ Menor);*/
}
