function Mostrar()
{
var numerouno;
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
	alert("El numero menor es "+ Menor);
}
