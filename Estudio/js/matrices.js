function crearMatrices() {
    const inputMatrix1 = document.getElementById('mat1').value;
    const inputMatrix2 = document.getElementById('mat2').value;

    // Parsear las cadenas de entrada en matrices
    const matriz1 = parsearMatriz(inputMatrix1);
    const matriz2 = parsearMatriz(inputMatrix2);

    if (matriz1 && matriz2) {
        console.log('Matriz 1:');
        document.write(matriz1);

        console.log('Matriz 2:');
        console.log(matriz2);
    } else {
        alert('Las matrices deben tener el formato correcto.');
    }
}

function parsearMatriz(input) {
    try {
        // Remover espacios en blanco y convertir a minúsculas para lidiar con diferentes formatos
        input = input.replace(/\s/g, '').toLowerCase();
        // Eliminar caracteres no permitidos
        input = input.replace(/[^\d,\[\]]/g, '');

        return JSON.parse('[' + input + ']');
    } catch (error) {
        return null;
    }
}