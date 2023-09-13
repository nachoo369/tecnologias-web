//Numbers
let edad = 29;
let sueldo = 1200000;
const PI = 3.14;

//Con notacion cientifca
const x = 1000000;
const n_grande = 10e-6;
const n_chica = 3e+6;

//BigInt

const bigInt = 1231283912831242123123343n;
console.log(bigInt);

//Inifito
console.log(edad / 0);
console.log(Infinity);

//texto numerico
console.log(2/"2");
console.log("Hola"*5);
console.log("Hola"/5);

//STRING
console.log("########## STRINGS #########");
let nombre = "Ignacio";
let apellido = "Riffo";
let ciudad = "Osorno";
let capital = "Puerto Montt";
let string1 = "Hola ¿Como estas?";
let string2 = "Buenas Tardes";
frase = "Este es un saludo ${string1}`";

//Impresion usando Backlist
console.log(frase);

//Ejemplo de un ciclo


v = true;
if (v) {
    console.log("Esto es verdadero");//se ejecuta si es verdadero
} else {//se ejecuta si es falso
    console.log("Esto es falso");
}

// indefinido
let institucion;
console.log(institucion);

//OBJETOS Y SIMBOLOS
//Almacen coleccion de datos

//Hay dos formas de crear un objeto

console.log("########### OBJETOS ##########");
let user = new Object();//constructor
let user1 = {};//objeto

let usuario ={
    name: "Felipe",
    age: 5,
    city: "Osorno",
    "correo electronico": "felipe@gmail.com"
};
//agregar atributo a mi objeto

usuario.provincia = "Provincia de Osorno";

//Accediendo a propiedad con dos palabras o mas, ademas tambien se puede acceder a uno
console.log(usuario["correo electronico"]);
console.log(usuario.name);


//impresion completa
console.log(usuario);

//borrar atributo

delete usuario.provincia;
//saber tipo de dato
console.log(typeof nombre);

//Transformacion de string a number

let stock = "1000";

console.log("############## TRANSFORMACION ###########");
console.log(stock);
console.log(Number.stock);



