var nota1 = prompt(`Ìngrese la nota 1: `, 0);
var nota2 = prompt(`Ingrese nla nota 2: `, 0);
var nota3 = prompt(`Ingrese la nota 3: `, 0);

var notafinal = ((nota1*0.4)+(nota2*0.3)+(nota3*0.3));

//alert(notafinal);

if (notafinal <= 30.95){
    alert("Reprobaste la asignatura")
}else if (notafinal <= 40.94){
    alert("Debes rendir examen")
}else {
    alert("Aprobaste, Felicidades!")
};

