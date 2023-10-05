//Ejercicio 3: Bucle do-while para pedir al usuario un número positivo.
//Escribe un programa que utilice un bucle do-while para pedir al usuario que ingrese 
//un número positivo (mayor que 0) y continúe pidiendo hasta que el usuario ingrese un número válido.

do {
    var numero = parseInt(prompt("Ingrese numero: "));

} while (isNaN(numero) || numero <= 0);


alert(`Ha ingresado un numero correcto ${numero}`);