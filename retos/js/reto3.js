var total = 0;
var porcentaje_sel = 0;
function montototal(){
    const monto = parseInt(document.getElementById("monto").value);//Almacenamos lo ingresado en input por el usuario pero en tipo INT
    const porcentaje_sel = parseInt(document.getElementById("porcentaje").value);//Alcamenamos el porcentaje del usuario pero en tipo INT
    //Primero ponemos una condicion donde se deban ingresar solo valores enteros distintos de NaN 
    if (isNaN(monto) || isNaN(porcentaje_sel)) {
        alert("-ERROR- ingrese un monto valido");
        return;
    }
    //Condiciones para calcular el monto final 
    const total_propina = (monto * porcentaje_sel)/100;
    const total = monto + total_propina;
    const resultElement = document.getElementById("mostrar");
    resultElement.innerHTML = `
                <p>Monto de la propina: ${total_propina.toFixed(2)}  CLP </p>
                <p>Total a pagar (incluyendo propina): ${total.toFixed(2)} CLP </p>
            `;
};