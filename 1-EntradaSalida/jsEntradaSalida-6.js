/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
		var resultado;
		var numerouno;
		numerouno= document.getElementById('numeroUno').value;
		numerodos= document.getElementById('numeroDos').value;
		
		numerouno= parseInt(numerouno);
		numerodos= parseInt(numerodos);
		
		resultado= numerouno+numerodos;
//parseInt sirve para trasformar las palabras en numeros enteros. sirve cuendo tenemos que tomar numeros desde un prompt o un get... que solo toma palabras.

alert(resultado);
}

