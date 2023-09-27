// Variable que ingresa el usuario
var numero = parseInt(prompt("Ingrese un número entero positivo:"));

// Verificar si cumple las condiciones
// Recibe el numero ingresado y comprueba si se cumple que sea entero positivo
if (numero >= 0) {
  var sumaPares = 1;//Inicializa desde 1

  // Utilizar un ciclo para calcular la suma de los números pares desde 1 hasta el número ingresado
  // Recorre dependiendo el numero ingresado, de uno a numero ingresado.
  for (var i = 2; i <= numero; i += 1) {
    sumaPares += i;
  }

  // Mostrar el resultado en el navegador
  alert("La suma de todos los números pares antes del numero ingresado es: " + sumaPares);
} else {
  // Mensaje de error si ingresa un entero no positivo
  alert("El número ingresado no es un entero positivo válido.");
}
