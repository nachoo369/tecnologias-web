// Variable para almacenar lo que ingresa el usuario
var serie_numeros = prompt("Por favor, ingresa una serie de números separados por comas:");

// Con split separamos los caracteres por coma "," y luego con parseFloat transformamos todos a numeros flotantes
var numeros = serie_numeros.split(",").map(function(numero) {
  return parseFloat(numero.trim());
});

//Comprobar si se ingresan bien los datos que no sean nulos
if (numeros.some(isNaN)) {
  document.write("No ingreso correctamente");
} else {
  // Suponemos que el numero mayor estara en la posicion 0
  var numero_mayor = numeros[0];
  
  //Recorremos para encontrar el mayor de todos los ingresados 
  var i = 1;//i partira de 1 para buscar en la posicion 1, ya que numero_mayor parte de la pos 0
  while (i < numeros.length) {
    if (numeros[i] > numero_mayor) {
      numeroMasGrande = numeros[i];
    }
    i++;
  }

  //alert para mostrar numero
  alert("El numero mas grande de la serie es: " + numero_mayor);
}
