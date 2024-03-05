//variables globales
var opcionSeleccionada;
var profesor;
var criteriosSeleccionados=[];
function validarDatos() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    if (contrasena == "admin" && usuario == "admin") {
        alert("Usuario registrado correctamente");
        cargarTablaCriterios();
    } else {
        alert("Algún dato de inicio de sesión ha sido incorrecto");
    }
}

function cargarTablaCriterios() {
    //cargo la tabla con los criterios que se encuentran en el archivo JSON
    document.getElementById("criterios").style.display = "block";
    document.getElementById("btnPDF").style.display = "block";
    document.getElementById("logueo").style.display = "none";
}

//acceder JSON
function mostrarDatosRA() {
    // Obtener referencias a elementos del DOM
    var resultado = document.getElementById("info");
    var selectRA = document.getElementById("raSelect").value;
    var criterioSelect = document.getElementById("criterioSelect");
    var opcionSeleccionadaDiv = document.getElementById("opcionSeleccionada");

    // Limpiar el contenido previo de los elementos
    resultado.innerHTML = "";
    opcionSeleccionadaDiv.innerHTML = "";

    // Verificar si se ha seleccionado un valor en el elemento raSelect
    if (selectRA !== "") {
        // Crear una instancia de XMLHttpRequest
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        // Definir la función que se ejecutará cuando cambie el estado de la solicitud
        xmlhttp.onreadystatechange = function() {
            // Verificar si la solicitud se ha completado y la respuesta está lista
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                // Parsear la respuesta JSON
                var datos = JSON.parse(xmlhttp.responseText);
                // Iterar sobre los datos obtenidos
                for (var i in datos) {
                    for (var j = 0; j < datos[i].length; j++) {
                        // Verificar si el id coincide con la opción seleccionada
                        if (datos[i][j].id === selectRA) {
                            // Mostrar información relevante en el elemento resultado
                            resultado.innerHTML += "<h1>" + datos[i][j].id + "</h1>" + "<br/>";
                            resultado.innerHTML += "Título RA: " + datos[i][j].textoRA + "<br/>";
                            resultado.innerHTML += "Criterios: " + "<br/>";
                            // Limpiar opciones previas y agregar nuevas opciones al elemento criterioSelect
                            criterioSelect.innerHTML = "";
                            for (var k in datos[i][j].criterios) {
                                var option = document.createElement('option');
                                option.text = datos[i][j].criterios[k];
                                criterioSelect.add(option);
                            }
                        }
                    }
                }
            }
        }
        // Iniciar la solicitud XMLHttpRequest
        xmlhttp.open("GET", "ArchivoFOL.json", true);
        xmlhttp.send();
    }
}

// Función para mostrar la opción seleccionada en pantalla
function mostrarOpcionSeleccionada() {
    opcionSeleccionada = document.getElementById("criterioSelect").value;
    var opcionSeleccionadaDiv = document.getElementById("opcionSeleccionada");
    opcionSeleccionadaDiv.innerHTML = "<h1>Criterios seleccionados: </h1>";
}

// Asignar la función mostrarOpcionSeleccionada al evento onchange del select de criterios
document.getElementById("criterioSelect").onchange = mostrarOpcionSeleccionada;

function volver() {
    document.getElementById("criterios").style.display = "none";
    document.getElementById("logueo").style.display = "block";
    document.getElementById("btnPDF").style.display = "none";
    location.reload();
}

//nombre del profesor
function guardarNombre() {
    profesor = document.getElementById("profesor").value;
    document.getElementById("nombreProfesor").innerHTML = profesor;
    document.getElementById("btnProfesor").style.display = "none";
    setTimeout(function() {
        document.getElementById("nombreProfesor").innerHTML = "";
        document.getElementById("btnProfesor").style.display = "block";
    }, 60000);
}

//añadir criterios
function añadirCriterio() {
    document.getElementById("criteriosSeleccionados").innerHTML += opcionSeleccionada + "<br>";
    criteriosSeleccionados.push(opcionSeleccionada);
}

function eliminarCriterio() {
    document.getElementById("criteriosSeleccionados").innerHTML = "";
}
//añadir nombre tarea
function asignarNombre(){
    let nombreTarea=document.getElementById("tarea").value;
    document.getElementById("nombreTarea").innerHTML=nombreTarea;
}
function borrarNombre(){
    document.getElementById("nombreTarea").innerHTML="";
}
//seleccionar tipo de tarea
function seleccionarTipo(){
    let selectTipo=document.getElementById("tipoTarea").value;
    document.getElementById("tipoTareaMostrar").innerHTML=selectTipo;
}
//variables para imágenes
var imgJunta = new Image;
var imgMurgi = new Image;
imgJunta.src = "img/junta.jpg";
imgMurgi.src = "img/murgi.png";
//generarPDF
function generarPDF() {
    var doc = new jspdf.jsPDF();
    var ejeY=100;
    var nombreProfe="El nombre del profesor es "+document.getElementById("nombreProfesor").innerHTML;
    var tipoTarea=document.getElementById("tipoTareaMostrar").innerHTML;
    var nombreTarea="El nombre de la tarea es "+document.getElementById("nombreTarea").innerHTML+" "+tipoTarea;
    var maxTextWidth = 180; // Ancho máximo permitido en la página, en unidades de medida de jsPDF
    var margin = 10; // Márgen superior para comenzar a escribir el texto

    // Divide el texto en partes que se ajusten al ancho de la página
    var lines;
    var spaceLeft;
    var margin = 10;
    //añadimos las imagenes al documento
    doc.addImage(imgJunta, "JPEG", 5, 5, 50, 32);
    doc.addImage(imgMurgi, "PNG", 162, 8, 40, 38); 
    doc.text(nombreProfe,60,70);
    doc.text(nombreTarea,50,80);
    doc.setFontSize(10);
    for (var key in criteriosSeleccionados) {
        lines= doc.splitTextToSize((criteriosSeleccionados[key]), maxTextWidth);
        // Calcula el espacio restante en la página
        spaceLeft = doc.internal.pageSize.height - margin - (lines.length * 10 * 1.2);
        if (spaceLeft < 0) {
            doc.addPage();
            spaceLeft = doc.internal.pageSize.height - margin;
        }
        doc.text(lines,"10",ejeY);
        ejeY=ejeY+10;//incrementamos las cordenadas de Y
    }
    doc.save("Criterios.pdf");
}
