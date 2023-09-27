// Creamos variable que corresponde a la oracion ingresada 
var oracion = prompt("Ingrese una oracion: ");

// Dividir la oración en palabras utilizando el espacio como separador
var cantidad_palabras = oracion.split(" ");

//Ahora contaremos la cantidad de palabras que hay por separacion
var numero_palabras = cantidad_palabras.length;

// Ahora imprimiremos la cantidad nunmerica de palabras que tiene la oracion
alert("La oracion tiene: " + numero_palabras + " palabras");
