/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	nombre=prompt("por favor ingresa tu nombre");
	document.getElementById('elNombre').value=nombre;
	//con este comando mostras el contenido de la variable pero directamente en el id de la pagina no como un cuadro pop up
	//si pongo el igual al final de document.get....sirva para mostrar.
}

