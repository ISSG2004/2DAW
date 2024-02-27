var profesor=document.getElementById("profesor").value;
function validarDatos(){
    var usuario=document.getElementById("usuario").value;
    var contrasena=document.getElementById("contrasena").value;
    if(contrasena=="admin" && usuario=="admin"){
        alert("Usuario registrado correctamente")
        cargarTablaCriterios();
    }else{
        alert("Algún dato de inicio de sesion ha sido incorrecto")
    }
}  

function cargarTablaCriterios() {
    //cargo la tabla con los criterios que se encuentran en el archivo JSON
    document.getElementById("criterios").style.display="block";
    document.getElementById("logueo").style.display="none";
}
//acceder JSON
function mostrarDatosRA() {
    var resultado = document.getElementById("info");
    var selectRA = document.getElementById("raSelect").value;
    var criterioSelect = document.getElementById("criterioSelect");
    var opcionSeleccionadaDiv = document.getElementById("opcionSeleccionada"); // Nuevo div
    resultado.innerHTML = ""; // Limpiar el contenido previo
    opcionSeleccionadaDiv.innerHTML = ""; // Limpiar contenido previo
    if (selectRA !== "") {
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                var datos = JSON.parse(xmlhttp.responseText);
                for (var i in datos) {
                    for (var j = 0; j < datos[i].length; j++) {
                        if (datos[i][j].id === selectRA) {
                            resultado.innerHTML += "<h1>"+datos[i][j].id+"</h1>" + "<br/>";
                            resultado.innerHTML += "Título RA: " + datos[i][j].textoRA + "<br/>";
                            resultado.innerHTML += "Criterios: " + "<br/>";
                            var criterios = datos[i][j].criterios;
                            criterioSelect.innerHTML = ""; // Limpiar opciones previas
                            for (var k in criterios) {
                                var option = document.createElement('option');
                                option.text = criterios[k];
                                criterioSelect.add(option);
                            }
                        }
                    }
                }
            }
        }
        xmlhttp.open("GET", "ArchivoFOL.json", true);
        xmlhttp.send();
    }
}

// Función para mostrar la opción seleccionada en pantalla
function mostrarOpcionSeleccionada() {
    var opcionSeleccionada = document.getElementById("criterioSelect").value;
    var opcionSeleccionadaDiv = document.getElementById("opcionSeleccionada");
    opcionSeleccionadaDiv.innerHTML ="<h1>Criterio seleccionado: </h1>"+ opcionSeleccionada;
}

// Asignar la función mostrarOpcionSeleccionada al evento onchange del select de criterios
document.getElementById("criterioSelect").onchange = mostrarOpcionSeleccionada;

function volver(){
    document.getElementById("criterios").style.display="none";
    document.getElementById("logueo").style.display="block";
}
function borrarCampoDespuesDe10Segundos(profesor) {
    setTimeout(function() {
        var campo = document.getElementById(profesor);
        campo.value = ""; // Borrar el contenido del campo
    }, 10000); // 10000 milisegundos = 10 segundos
}
profesor.addEventListener('mouseout', borrarCampoDespuesDe10Segundos);


