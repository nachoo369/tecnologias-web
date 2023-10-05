//Calcular si al ingresar dos numeros cual es el mayor y cual es el menor o si son iguales
//USAR CONDICIONALES

var numero1 = parseInt(prompt("Ingrese numero 1: "));
var numero2 = parseInt(prompt("Ingrese numero 2: ")); 

if (numero1 > numero2){
    alert(`El numero ${numero1} es mayor que ${numero2}`);
}else if (numero1 < numero2){
    alert(`El numero ${numero2} es mayor que ${numero1}`);
}else {
    alert(`${numero1} y ${numero2} son iguales`)
}