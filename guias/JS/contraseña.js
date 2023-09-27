// Creamos variable que almacena la contraseña ingresada
var contraseña = prompt("Ingrese una contraseña: ");
//Contaremos la cantidad de caracteres de la contraseña
cantidad_caracteres = contraseña.length;
//Creamos una variable para almacenar caracteres
var caracteres_c = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/;
//La primera condicion debe ser que la contraseña sea mayor a 8 caracteres
if (cantidad_caracteres >= 8){
    if  (!!/[A-Z]/.test(contraseña)){//condicion de que la contraseña tenga una MAYUSCULA
        if (!!/[1-9]/.test(contraseña)){//Condicion de que la contraseña tenga un numero
            if (caracteres_c.test(contraseña)){//Condicion de que la contraseña cumpla con caracteres
                alert("Contraseña valida")
            }else{
                alert("La contraseña debe tener al menos un caracter especial (!@#$%^&*()_+{}[]:;<>,.?~\-)")
            }
        }else{
            alert("La contraseña debe tener minimo un numero")
        }
    }else{
        alert("Debe ingresar al menos una letra MAYUSCULA");
    }

} else{
    alert("La contraseña debe tener minimo 8 caracteres");
}

