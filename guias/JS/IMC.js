//Almacenamos estatura del usuario
var estatura = parseFloat(prompt("Ingrese su estatura en decimales(EJEMPLO: 1.80m): "));
//Almacenamos peso del usuario
var peso = parseFloat(prompt("Ingrese su peso en KG: "));
//Calulamos el IMC y lo almacenamos en variable IMC
var imc = peso / (estatura*estatura);
//Condiciones solicitadas
if (imc < 18.5){
    alert("Su IMC es: "+ imc.toFixed(2) + " y esta bajo peso");
}
if (imc >= 18.5 && imc <= 24.9){
    alert("Su IMC es: "+imc.toFixed(2)+ " y su peso es normal");
}
if (imc > 24.9){
    alert("Su IMC es: "+imc.toFixed(2)+ " y esta sobre peso");
}