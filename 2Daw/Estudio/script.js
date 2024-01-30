var usuario = {
    nombreUsuario: "alumno",
    contraseña: "bueno",
    hora: "",
    cambiarContraseña: function (nuevaContrtaseña) {
        this.contraseña = nuevaContrtaseña;
        this.asignarHora();
    },
    asignarHora: function () {
        let fechaActual = new Date();
        this.hora = fechaActual.toLocaleString(); // Guardar la hora en formato legible
    }
}

var ventana1;
var ventana2;
var ventana3;
var ventana4;
var vectorGlobal; // Variable global para almacenar el vector

function crearLimite() {
    let maximo = parseInt(document.getElementById("longitud").value);
    return maximo;
}

function generarLongitud() {
    let random = parseInt(document.getElementById("valores").value);
    return random;
}

// Cerrar ventanas
function cerrarventana1() {
    ventana1.close();
}

function cerrarventana2() {
    ventana2.close();
}

function cerrarventana3() {
    ventana3.close();
}

function cerrarventana4() {
    ventana4.close();
}

// Escuchadores de eventos para cerrar ventanas
cerrav1.addEventListener('click', cerrarventana1);
cerrarv2.addEventListener('click', cerrarventana2);
cerrarv3.addEventListener('click', cerrarventana3);
cerrarv4.addEventListener('click', cerrarventana4);

// Funcionalidades de ventanas
function abrirVentana1() {
    ventana1 = window.open('_ventanaForm.html', 'ventana1', 'height=300px,width=300px');
    ventana1 = window.moveTo(0, 0);
    ventana1.document.body.style.backgroundColor = "lightgreen";
}

function validarUsuario() {
    let usuarioIntroducido = document.getElementById("nombre").value;
    let contrasenaIntroducida = document.getElementById("contraseña").value;
    let nuevaContraseña = document.getElementById("NuevaContraseña").value;
    if (usuarioIntroducido == usuario.nombreUsuario && contrasenaIntroducida == usuario.contraseña) {
        alert("contraseña cambiada")
        usuario.cambiarContraseña(nuevaContraseña);
    } else {
        alert("Datos incorrectos ¿Quieres intentarlos de nuevo?");
    }
}

// Cosas ventana2
function abrirVentana2() {
    vectorGlobal = crearVector(); // Almacena el vector en la variable global
    ventana2 = window.open('', 'ventana2', 'height=300px,width=300px');
    ventana2.moveTo(1900, 0);
    ventana2.document.write("listado de numeros" + vectorGlobal);
}

function generarNumeroAleatorio() {
    return parseInt(Math.random() * crearLimite());
}

function crearVector() {
    let vector=[];
    for (let i = 0; i < generarLongitud(); i++) {
        vector.push(generarNumeroAleatorio());
    }
    return vector;
}

// Cosas ventana3
function abrirVentana3() {
    ventana3 = window.open('', 'ventana3', 'height=300px,width=300px');
    ventana3.moveTo(1900, 1900);
    ventana3.document.write("valores impares " + impares());
}

function impares() {
    let imparesArray = vectorGlobal.filter(numero => numero % 2 !== 0);

    imparesArray.sort((a, b) => a - b);

    return imparesArray;
}
//cosas ventana4

function abrirVentana4() {
    ventana4 = window.open('', 'ventana4', 'height=300px,width=300px');
    ventana4.moveTo(0, 1900);
    ventana4.document.write("Contraseña vigente: " + usuario.contraseña + "<br>");
    ventana4.document.write("Última vez introducida: " + usuario.hora);
}





