//Mostrar dias de la semana por numero
//EJ: 1 --> Lunes || 2 --> Martes

var numero = parseInt(prompt("Ingrese el numero del dia: "));

switch (numero){
    case 1:
        alert("Lunes");
        break;
    case 2:
        alert("Martes");
        break;
    case 3:
        alert("Miercoles");
        break;
    case 4:
        alert("Jueves");
        break;
    case 5:
        alert("Viernes");
        break;
    case 6:
        alert("Sabado");
        break;
    case 7:
        alert("Domingo");
        break;
}