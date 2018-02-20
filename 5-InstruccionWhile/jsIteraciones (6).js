function Mostrar()
{

	var contador=0;
	var acumulador=0;
	
	prompt("ingrese un numero");
	
	
	while(contador<4)
	{
		contador= contador +1;
		acumulador=prompt("ingresar siguiente numero");		

	}

acumulador= acumulador + acumulador;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN