//cuando hagamos click en algún color de la paleta se le asignará la clase seleccionado
//Al hacer click en una celda activaremos el pintar
//pintaremos hasta que hagamos click una vez más
//para borrar pintaremos con blanco
//siempre saldrá un mensaje indicando que estado tiene el pincel
//crearemos las celdas con métodos de manipular DOM(será de 30X30 el tablero y cada celda será de 10px X 10px)
// Función para crear el tablero de dibujo
//Adaptación cross-browser
var xmlhttp;
if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
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
//asigancion de clase asignado a los elementos
var color1 = document.getElementsByClassName("color1")[0];
var color2=document.getElementsByClassName("color2")[0];
var color3=document.getElementsByClassName("color3")[0];
var color4=document.getElementsByClassName("color4")[0];
var color5=document.getElementsByClassName("color5")[0];
var color6=document.getElementsByClassName("color6")[0];
color1.addEventListener('click', asignarC1);
function asignarC1() {
    color1.classList.add('seleccionado');
    color2.classList.remove('seleccionado');
    color3.classList.remove('seleccionado');
    color4.classList.remove('seleccionado');
    color5.classList.remove('seleccionado');
    color6.classList.remove('seleccionado');
}
color2.addEventListener('click', asignarC2);
function asignarC2() {
    color2.classList.add('seleccionado');
    color1.classList.remove('seleccionado');
    color3.classList.remove('seleccionado');
    color4.classList.remove('seleccionado');
    color5.classList.remove('seleccionado');
    color6.classList.remove('seleccionado');
}
color3.addEventListener('click', asignarC3);
function asignarC3() {
    color3.classList.add('seleccionado');
    color2.classList.remove('seleccionado');
    color1.classList.remove('seleccionado');
    color4.classList.remove('seleccionado');
    color5.classList.remove('seleccionado');
    color6.classList.remove('seleccionado');
}
color4.addEventListener('click', asignarC4);
function asignarC4() {
    color4.classList.add('seleccionado');
    color2.classList.remove('seleccionado');
    color3.classList.remove('seleccionado');
    color1.classList.remove('seleccionado');
    color5.classList.remove('seleccionado');
    color6.classList.remove('seleccionado');
}
color5.addEventListener('click', asignarC5);
function asignarC5() {
    color5.classList.add('seleccionado');
    color2.classList.remove('seleccionado');
    color3.classList.remove('seleccionado');
    color4.classList.remove('seleccionado');
    color1.classList.remove('seleccionado');
    color6.classList.remove('seleccionado');
}
color6.addEventListener('click', asignarC6);
function asignarC6() {
    color6.classList.add('seleccionado');
    color2.classList.remove('seleccionado');
    color3.classList.remove('seleccionado');
    color4.classList.remove('seleccionado');
    color5.classList.remove('seleccionado');
    color1.classList.remove('seleccionado');
}
// Crear el tablero una vez que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    crearTablero();

// Seleccionamos todas las celdas de la tabla después de crear el tablero
let celdas = document.querySelectorAll('#zonadibujo .celda');

// Seleccionamos el estado del pincel para editar el mensaje
let estadoPincel = document.querySelector('#pincel');

// Variable para indicar si el pincel está activo
let pincelActivo = false;
estadoPincel.textContent = "PINCEL DESACTIVADO";

// Función para activar/desactivar el pincel
function activarPincel() {
    if (pincelActivo === false) {
        pincelActivo = true; 
        // Cambiamos el texto para indicar que el pincel está activado.
        estadoPincel.textContent = "PINCEL ACTIVADO";
    } else {
        pincelActivo = false;
        estadoPincel.textContent = "PINCEL DESACTIVADO";
    }
}

// Función para manejar el evento mouseover
function pintar(event) {
    if (pincelActivo) {
        pintarCelda(event.target);
    }
}

// Añadimos el evento 'mousedown' a cada celda para activar el pincel
celdas.forEach(function(celda) {
    celda.addEventListener('click', function(event) {
        activarPincel();
    }); 
    celda.addEventListener('mouseover', pintar);
});

// Función para pintar una celda
function pintarCelda(celda) {
    // Si hay un color seleccionado
    let colorSeleccionado = document.querySelector('.seleccionado');
    if (colorSeleccionado) {
        // Obtenemos el color seleccionado
        let color = window.getComputedStyle(colorSeleccionado).backgroundColor;
        // Pintamos la celda con el color seleccionado
        celda.style.backgroundColor = color;
    }
}

});
