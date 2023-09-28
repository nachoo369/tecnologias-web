//Creamos un array vacío donde se almacenarán los productos que ingrese el usuario
var productos = [];

//Crearemos una funcion que nos ingrese los productos en el array anterior
function ingreso_productos(nombre, precio, stock){
    var producto = {nombre:nombre, precio:precio, stock:stock};
    productos.push(producto); //Con push agregamos los productos que se vayan ingresando
}

//Crearemos una variable de ingreso en la cual se almacenará TRUE si se sigue ingresando 
//Esta partirá en true
var ingreso = true;

//Ahora el ciclo while ingresará productos hasta que el usuario lo termine (ingreso = true)
while (ingreso){
    var nombre = prompt("Nombre producto:");
    var precio = parseInt(prompt("Precio:"));
    var stock = parseInt(prompt("Stock:"));

    //Llamaremos a la función ingresar_producto que creamos anteriormente con el fin de mandarle los producto del usuario
    ingreso_productos(nombre, precio, stock);

    var decide = prompt("Quiere ingresar mas productos (si/no): " );
    //en caso de que ponga si, el while volverá a ejecutarse, de lo contrario se termina
    ingreso = decide.toLowerCase() == "si";
}

//Crearemos una función que almacene los productos críticos
function critico(productos){
    //array vacío que irá almacenando los productos críticos
    var prod_criticos = [];

    //con un ciclo for recorreremos el inventario de productos
    for (var i = 0; i < productos.length; i++){
        var producto = productos[i];

        //Ahora si el stock del producto es < 1000 será agregado al array
        if (producto.stock < 1000){
            prod_criticos.push(producto);
        }
    }

    //Ahora los mensajes: si hay productos dentro del array prod_criticos, entonces que muestre el nombre y el stock del producto
    //de lo contrario, que muestre el mensaje que todo está en correcto estado
    if (prod_criticos.length > 0){
        prod_criticos.forEach(function(producto){
            alert("Productos Criticos\nNombre: " + producto.nombre + ", Stock: " + producto.stock);
        });
    } else {
        alert("El inventario está en buen estado.");
    }
}

//Utilizamos la función
critico(productos);
