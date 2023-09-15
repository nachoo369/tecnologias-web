var nota1 = prompt(`Ìngrese la nota 1: `, 0);

//restricciones al ingresar nota 1
do{
 
    if(nota1<1.0 || nota1>7.0){
      alert("[Error]El número no está entre 1.0 y 7.0");
        nota1 = prompt(`Ingrese la nota 1: `, 0)
    }
}while(nota1<1.0 || nota1>7.0);
var nota2 = prompt(`Ingrese nla nota 2: `, 0);
//restricciones al ingresar nota 2
do{
 
    if(nota2<1.0 || nota2>7.0){
      alert("[Error]El número no está entre 1.0 y 7.0");
        nota2 = prompt(`Ingrese la nota 1: `, 0)
    }
}while(nota2<1.0 || nota2>7.0);
var nota3 = prompt(`Ingrese la nota 3: `, 0);
//restricciones al ingresar nota 3
do{
 
    if(nota3<1.0 || nota3>7.0){
      alert("[Error]El número no está entre 1.0 y 7.0");
        nota3 = prompt(`Ingrese la nota 1: `, 0)
    }
}while(nota3<1.0 || nota3>7.0);


var notafinal = ((nota1*0.4)+(nota2*0.3)+(nota3*0.3));

//alert(notafinal);

//restricciones al ingresar nota


//Mensaje de aprobacion segun nota final
if (notafinal <= 3.95){
    alert("Reprobaste la asignatura")
}else if (notafinal <= 4.94){
    alert("Debes rendir examen")
}else {
    alert("Aprobaste")
};

