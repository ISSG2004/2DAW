//cuando hagamos click en algún color de la paleta se le asignará la clase seleccionado
//Al hacer click en una celda activaremos el pintar
//pintaremos hasta que hagamos click una vez más
//para borrar pintaremos con blanco
//siempre saldrá un mensaje indicando que estado tiene el pincel
//crearemos las celdas con métodos de manipular DOM(será de 30X30 el tablero y cada celda será de 10px X 10px)
// Función para crear el tablero de dibujo
function crearTablero() {
    // Obtener el contenedor donde se agregará el tablero
    var contenedor = document.getElementById("zonadibujo");
    
    // Crear el tablero como un elemento div
    var tablero = document.createElement("div");
    tablero.classList.add("tablero"); // Agregar una clase para estilizar el tablero si es necesario

    // Iterar para crear las filas del tablero
    for (let i = 0; i < 30; i++) {
        // Crear una fila como un elemento div
        var fila = document.createElement("div");
        fila.classList.add("fila"); // Agregar una clase para estilizar la fila si es necesario

        // Iterar para crear las celdas de la fila
        for (let j = 0; j < 30; j++) {
            // Crear una celda como un elemento div
            var celda = document.createElement("div");
            celda.classList.add("celda"); // Agregar una clase para estilizar la celda si es necesario
            celda.style.width = "10px";
            celda.style.height = "10px";
            celda.style.border = "1px solid black";
            celda.style.display = "inline-block";

            // Agregar la celda a la fila
            fila.appendChild(celda);
        }

        // Agregar la fila al tablero
        tablero.appendChild(fila);
    }

    // Agregar el tablero al contenedor
    contenedor.appendChild(tablero);
}

// Llamar a la función para crear el tablero una vez que el DOM esté completamente cargado
    crearTablero();

