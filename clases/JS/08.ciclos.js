// While 

let i = 0;

while (i <= 5) {
    console.log(i);
    i++;
}

//Ciclo do while, se rompe el ciclo cuando cumpla una cndicon
console.log("###DO WHILE####")
let aux = 0;

do{
    console.log(aux);
    aux++;
}
while(aux <= 3);


// Ciclo for

console.log("For ###")

for (let x = 1; x<=3;x++){//Puedo omitir parametros solo dejando el ;
    console.log(x);
};

console.log("break");//si queda nulo se rompe el ciclo

let suma = 0;

while(true){
    let valor = +prompt("Ingrese un numero porfavor", '');
    if (!valor) break; //quiebre de ciclo
    suma += valor;
}
alert(`la suma es: ${suma}`);


//Continue
for (let i = 0; i < 10; i++){
    if (i%2==0) continue
    alert(i)
}

