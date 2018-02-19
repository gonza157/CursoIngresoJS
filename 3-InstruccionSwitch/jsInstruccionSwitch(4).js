function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":

	alert("Este mes tiene 31 dias");

	break;

	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":

	alert("este mes tiene 30 dias");

	break;

	default:

	alert("Este mes tiene 28 dias o 29 si es un año bisiesto");

}
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN