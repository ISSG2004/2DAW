// Función para convertir a mayúsculas al perder el foco
function convertirAMayusculas(element) {
    element.value = element.value.toUpperCase();
}

// Función para validar campos de texto
function validarTexto(element, mensajeError) {
    if (element.value.trim() === "") {
        mostrarError(mensajeError);
        element.focus();
        return false;
    }
    return true;
}

// Función para validar la EDAD
function validarEdad() {
    var edad = document.getElementById("edad");
    if (isNaN(edad.value) || edad.value < 0 || edad.value > 105) {
        mostrarError("La EDAD debe contener valores numéricos en el rango de 0 a 105.");
        edad.focus();
        return false;
    }
    return true;
}

// Función para validar el NIF con expresión regular
function validarNIF() {
    var nif = document.getElementById("nif");
    var nifRegex = /^\d{8}[a-zA-Z]$/; // Explicación: 8 dígitos y una letra al final
    if (!nifRegex.test(nif.value)) {
        mostrarError("El formato del NIF no es válido.");
        nif.focus();
        return false;
    }
    return true;
}

// Función para validar el E-MAIL con expresión regular
function validarEmail() {
    var email = document.getElementById("email");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Explicación: Formato básico de email
    if (!emailRegex.test(email.value)) {
        mostrarError("El formato del E-MAIL no es válido.");
        email.focus();
        return false;
    }
    return true;
}

// Función para validar la PROVINCIA
function validarProvincia() {
    var provincia = document.getElementById("provincia").toLowerCase();
    if (provincia.value === "0") {
        mostrarError("Seleccione una PROVINCIA.");
        provincia.focus();
        return false;
    }
}

// Función para validar la FECHA con expresión regular
function validarFecha() {
    var fecha = document.getElementById("fecha");
    var fechaRegex = /^(0[1-9]|[12][0-9]|3[01])[-\/](0[1-9]|1[0-2])[-\/]\d{4}$/;
    // Explicación: dd/mm/aaaa o dd-mm-aaaa
    if (!fechaRegex.test(fecha.value)) {
        mostrarError("El formato de FECHA no es válido.");
        fecha.focus();
        return false;
    }
    return true;
}

// Función para validar el TELEFONO con expresión regular
function validarTelefono() {
    var telefono = document.getElementById("telefono");
    var telefonoRegex = /^[679]\d{8}$/; // Explicación: 9 dígitos
    if (!telefonoRegex.test(telefono.value)) {
        mostrarError("El formato de TELEFONO no es válido.");
        telefono.focus();
        return false;
    }
    return true;
}

// Función para validar la HORA con expresión regular
function validarHora() {
    var hora = document.getElementById("hora");
    var horaRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/; // Explicación: hh:mm
    if (!horaRegex.test(hora.value)) {
        mostrarError("El formato de HORA no es válido.");
        hora.focus();
        return false;
    }
    return true;
}

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    var erroresDiv = document.getElementById("errores");
    erroresDiv.innerHTML = mensaje;
}

// Función para validar el formulario antes de enviar
function validarFormulario() {
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");

    // Convertir a mayúsculas al perder el foco
    nombre.addEventListener("blur", function () {
        convertirAMayusculas(nombre);
    });

    apellidos.addEventListener("blur", function () {
        convertirAMayusculas(apellidos);
    });

    // Validar campos de texto al enviar el formulario
    var form = document.getElementById("formulario");
    form.addEventListener("submit", function (event) {
        var erroresDiv = document.getElementById("errores");
        erroresDiv.innerHTML = ""; // Limpiar mensajes de error

        if (!validarTexto(nombre, "El campo NOMBRE es obligatorio.")) {
            event.preventDefault(); // Detener el envío del formulario si no se confirma
            return;
        }

        if (!validarTexto(apellidos, "El campo APELLIDOS es obligatorio.")) {
            event.preventDefault(); // Detener el envío del formulario si no se confirma
            return;
        }

        if (!validarEdad()) {
            event.preventDefault(); // Detener el envío del formulario si no se confirma
            return;
        }

        if (!validarNIF()) {
            event.preventDefault(); // Detener el envío del formulario si no se confirma
            return;
        }

        if (!validarEmail()) {
            event.preventDefault(); // Detener el envío del formulario si no se confirma
            return;
        }

        if (!validarProvincia()) {
            event.preventDefault(); // Detener el envío del formulario si no se confirma
            return;
        }

        if (!validarFecha()) {
            event.preventDefault(); // Detener el envío del formulario si no se confirma
            return;
        }

        if (!validarTelefono()) {
            event.preventDefault(); // Detener el envío del formulario si no se confirma
            return;
        }

        if (!validarHora()) {
            event.preventDefault(); // Detener el envío del formulario si no se confirma
            return;
        }

        // Confirmar envío del formulario
        if (!confirm("¿Desea enviar el formulario?")) {
            event.preventDefault(); // Detener el envío del formulario si no se confirma
        }
    });
}
// Llamar a la función de validar el formulario al cargar la página
window.onload = validarFormulario;
