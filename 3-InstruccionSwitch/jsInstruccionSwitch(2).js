function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	switch (mesDelAño)
	{
		case"Enero":
		case"Febrero":
		case"Marzo":
		case"Abril":
		case"Junio":

		alert("Falta para el invierno");
		break;

		case"Julio":
		case"Agosto":

		alert("abrigate que hace frio");
		break;

		case"Septiembre":
		case "Octubre":
		case"Noviembre":
		case"Diciembre":

		alert("ya pasamos el invierno ahora calor");
		break;
	}


	




}//FIN DE LA FUNCIÓN