/*
Crear un vector con 10 valores aleatorios comprendidos entre 1 y 500. Luego crea
otros dos vectores y copia los elementos menores a 250 en el segundo vector y los
mayores o iguales a 250 en el tercer vector. Imprimir los tamaños del segundo y tercer
vector. Imprimir los tres vectores
*/
function ej45() {
    // Crear un vector con 10 valores aleatorios entre 1 y 500
    const vectorOriginal = Array.from({ length: 10 }, () => Math.floor(Math.random() * 500) + 1);

    // Crear otros dos vectores
    const vectorMenor250 = [];
    const vectorMayorIgual250 = [];

    // Copiar elementos en los vectores correspondientes
    vectorOriginal.forEach(elemento => {
        if (elemento < 250) {
        vectorMenor250.push(elemento);
        } else {
        vectorMayorIgual250.push(elemento);
        }
    });

// Función para mostrar un vector en el DOM
function mostrarVector(id, vector, mensaje) {
    const contenedor = document.getElementById(id);
    const nuevoElemento = document.createElement('p');
    nuevoElemento.textContent = `${mensaje}: [${vector.join(', ')}]`;
    contenedor.appendChild(nuevoElemento);
}

// Mostrar los resultados en el DOM
mostrarVector('vectorCompleto', vectorOriginal, 'Vector Original');
mostrarVector('menores', vectorMenor250, 'Segundo Vector (menor a 250)');
mostrarVector('mayores', vectorMayorIgual250, 'Tercer Vector (mayor o igual a 250)');
document.getElementById('menores').textContent = `Tamaño del segundo vector (menor a 250): ${vectorMenor250.length}`;
document.getElementById('mayores').textContent = `Tamaño del tercer vector (mayor o igual a 250): ${vectorMayorIgual250.length}`;
}