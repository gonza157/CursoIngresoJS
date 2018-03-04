function Mostrar()
{
	var largo;
	var ancho;
	var suma;
	var perimetroalambre;

	largo=document.getElementById('alrgo').value;
	ancho=document.getElementById('ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);

	suma=largo*2 + ancho*2;
	perimetroalambre= suma*3;
	alert("Se necesitan "+perimetroalambre+ " de alambre");

}
