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
    // Obtener referencias a elementos del DOM
    var resultado = document.getElementById("info"); // Se obtiene una referencia al elemento con el id "info"
    var selectRA = document.getElementById("raSelect").value; // Se obtiene el valor seleccionado del elemento con el id "raSelect"
    var criterioSelect = document.getElementById("criterioSelect"); // Se obtiene una referencia al elemento con el id "criterioSelect"
    var opcionSeleccionadaDiv = document.getElementById("opcionSeleccionada"); // Se obtiene una referencia al elemento con el id "opcionSeleccionada"

    // Limpiar el contenido previo de los elementos
    resultado.innerHTML = ""; // Se limpia el contenido del elemento "resultado"
    opcionSeleccionadaDiv.innerHTML = ""; // Se limpia el contenido del elemento "opcionSeleccionadaDiv"

    // Verificar si se ha seleccionado un valor en el elemento raSelect
    if (selectRA !== "") {
        // Crear una instancia de XMLHttpRequest
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest(); // Se crea una instancia de XMLHttpRequest para navegadores modernos
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); // Se crea una instancia de XMLHttpRequest para versiones antiguas de Internet Explorer
        }
        // Definir la función que se ejecutará cuando cambie el estado de la solicitud
        xmlhttp.onreadystatechange = function () {
            // Verificar si la solicitud se ha completado y la respuesta está lista
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                // Parsear la respuesta JSON
                var datos = JSON.parse(xmlhttp.responseText); // Se convierte la respuesta JSON en un objeto JavaScript
                // Iterar sobre los datos obtenidos
                for (var i in datos) {
                    for (var j = 0; j < datos[i].length; j++) {
                        // Verificar si el id coincide con la opción seleccionada
                        if (datos[i][j].id === selectRA) {
                            // Mostrar información relevante en el elemento resultado
                            resultado.innerHTML += "<h1>"+datos[i][j].id+"</h1>" + "<br/>"; // Se agrega el id como título
                            resultado.innerHTML += "Título RA: " + datos[i][j].textoRA + "<br/>"; // Se agrega el textoRA como título RA
                            resultado.innerHTML += "Criterios: " + "<br/>"; // Se agrega un título para los criterios
                            // Limpiar opciones previas y agregar nuevas opciones al elemento criterioSelect
                            criterioSelect.innerHTML = ""; // Se limpian las opciones anteriores del criterioSelect
                            for (var k in datos[i][j].criterios) {
                                var option = document.createElement('option'); // Se crea un elemento de opción
                                option.text = datos[i][j].criterios[k]; // Se establece el texto de la opción
                                criterioSelect.add(option); // Se agrega la opción al elemento criterioSelect
                            }
                        }
                    }
                }
            }
        }
        // Iniciar la solicitud XMLHttpRequest
        xmlhttp.open("GET", "ArchivoFOL.json", true); // Se configura la solicitud para obtener el archivo JSON
        xmlhttp.send(); // Se envía la solicitud
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
    location.reload();

}
function borrarCampoDespuesDe10Segundos(profesor) {
    setTimeout(function() {
        var campo = document.getElementById(profesor);
        campo.value = ""; // Borrar el contenido del campo
    }, 10000); // 10000 milisegundos = 10 segundos
}
profesor.addEventListener('mouseout', borrarCampoDespuesDe10Segundos);


