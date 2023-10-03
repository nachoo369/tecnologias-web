import numpy as np

# Pedir al usuario el número de filas y columnas de la matriz
filas = int(input("Ingrese el número de filas: "))
columnas = int(input("Ingrese el número de columnas: "))

# Inicializar una matriz vacía
matriz1 = []

# Pedir al usuario que ingrese los elementos de la matriz fila por fila
for i in range(filas):
    fila = []
    for j in range(columnas):
        elemento = float(input(f"Ingrese el elemento en la fila {i + 1}, columna {j + 1}: "))
        fila.append(elemento)
    matriz.append(fila)

# Convertir la lista de listas en una matriz NumPy
matriz = np.array(matriz)

print("La matriz ingresada es:")
print(matriz)