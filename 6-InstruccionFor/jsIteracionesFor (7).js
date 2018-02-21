function Mostrar()
{

var contadordiv=0;
var numero=prompt("ingrese numer");
numero= parseInt(numero);


for(anterior=2;anterior<numero;anterior++)
{
	if(numero%anterior==0)
	{
		document.write("<br> "+anterior);
	}
	if(anterior>(numero/2))
	{
		break;
	}
}

if(contadordiv==0)
{
	document.write( "  es primo ");
}
}//FIN DE LA FUNCIÓN