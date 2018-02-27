function Mostrar()
{
  var importe;
  var importemasiva;
  var importeprimario
  var importecondescuento;

  importeprimario=prompt("Introducir precio");
  importecondescuento=prompt("Introducir precio");
  importe=parseInt(importeprimario);

  importemasiva=importe + importe * 0.21;

  document.getElementById('importeFinal').value=importemasiva


}
