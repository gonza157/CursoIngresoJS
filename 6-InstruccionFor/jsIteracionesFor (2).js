function Mostrar()
{
	var numerorandom;
	var contador0=0;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var porcen0=0;
	var iteraciones=100000;
	for(contador=0;contador<100;contador++)
	{
		numerorandom=Math.floor((Math.random() * 10) + 1);
		//document.write(numerorandom);
		switch(numerorandom)
		{
			case 0:
			contador0++;
			break;

			case 1:
			contador1++;
			break;

			case 2:
			contador2++;
			
			break;

			case 3:
			contador3++;
			break;

			case 4:
			contador4++;
			break;
			
			case 5:
			contador5++;
			break;
			
			case 6:
			porcen6=(contador6/iteraciones)*100;
			if(porcen6>7)
			{
				
			}else
			{
				contador6++;
			}

			break;
			
			case 7:
			contador7++;
			break;
			
			case 8:
			contador8++;
			break;
			
			case 9:
			contador9++;
			break;

		}
	}

	porcen0=(contador0/(contador+1))*100;
	porcen0=Math.round(porcen0);
	document.writ("<br>cantidad 0: "+contador0 +"--"+porcen0+"%");

	porcen1=(contador1/(contador+1))*100;
	porcen1=Math.round(porcen1);
	document.writ("<br>cantidad 1: "+contador1 +"--"+porcen1+"%");

	porcen2=(contador2/(contador+1))*100;
	porcen2=Math.round(porcen2);
	document.writ("<br>cantidad 2: "+contador2 +"--"+porcen2+"%");

	
}




/*{
	var contadordepositivos=0;
	var contadordenegativos=0;
	var contadordeceros=0;
	var contadordepar=0;
	var contadordeimpar=0;
	var contador50=0;
 for(contador=-100;contador<100;contador++)
 {
 	if(contador>0)
 	{
 		contadordepositivos++;

 	}
 	else
 	{
 		if(contador<0)
 			{
 				contadordenegativos++;
 			}else
 			{
 				contadordeceros++;
 			}
 	}
 	if(contador %2==0 && contador !=0)
 		{
 			contadordepar++;
 		}else
 			{
 			if(contador !=0)
 				{
 				contadordeimpar++;

 				}
 			}
 		}
 		switch(contador)
 		{
 			case 50: contador50++;
 			break;

 		}



 	document.write(" <br>positivos "+contadordepositivos);
 	document.write(" <br>negativos "+contadordenegativos);
 	document.write(" <br>ceros "+contadordeceros);
 	document.write(" <br>par "+contadordepar);
 	document.write(" <br>impar "+contadordeimpar);
 	document.write(" <br> de 50 "+contador50);
}*/