function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
	{
		case"Febrero":		

		alert("Este mes no tine mas de 29 dias");
		break;

		default:

		alert("Este mes tiene 30 dias o mas");
		break;

	}
	


}//FIN DE LA FUNCIÓN