function calcular(){
    const peso = parseInt(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    var nombre = document.getElementById("nombre").value;
    var imc = peso / ((altura/100)*(altura/100));
    var gasto = document.getElementById("act").value;
    if (imc < 18.5){
        var clasif = "Bajo Peso";
        var estado = "Necesita Atencion"
    }
    if (imc >= 18.5 && imc <= 24.9){
        var clasif = "Normal Peso";
        var estado = "Estado nutricional Adecuado"
    }
    if (imc > 24.9){
        var clasif = "Sobre Peso";
        var estado = "Necesita atencion especial"
    }
    if (gasto=="Sedentario"){
        var gasto = peso * 1.2
    }
    if (gasto=="Moderado"){
        var gasto = peso * 1.55
    }
    if (gasto=="Activo"){
        var gasto = peso * 1.9
    }
    const imc1 = document.getElementById("mostrar");
    imc1.innerHTML = `
    <h1> Resultado para ${nombre} </h1>
    <p>Su IMC es: ${imc.toFixed(2)}</p>
    <p>Clasificacion: ${clasif}</p>
    <p>Gasto Energetico: ${gasto} Kcal</p>
    <p>Estado Nutriconal: ${estado}`;

}
