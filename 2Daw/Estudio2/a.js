
//FUNCIONES VENTANA1
        function abrirVentana1() {
            // Tamaño y posición de la ventana emergente
            var ancho = 300;
            var alto = 300;
            var izquierda = 0; // Posición en la parte superior izquierda
            var arriba = 0;

            // Opciones de la ventana emergente
            var opciones = "width=" + ancho + ",height=" + alto + ",left=" + izquierda + ",top=" + arriba +
                           ",menubar=no,toolbar=no,location=no,resizable=no,scrollbars=no,status=no";

            // Abrir la ventana emergente
            var ventanaPopUp = window.open("", "Ventana1", opciones);

            // HTML dentro de la ventana emergente
            ventanaPopUp.document.write("<html><head><title>Ventana 1 Pop-up</title></head><body style='background-color: #c2ffd2;'>");
            ventanaPopUp.document.write("<h2>Contenido de la Ventana 1</h2>");

            // Formulario de Usuario y Contraseña
            ventanaPopUp.document.write("<form id='formulario'>");
            ventanaPopUp.document.write("Usuario: <input type='text' id='usuario' maxlength='5' pattern='[A-Z]+' required><br>");
            ventanaPopUp.document.write("Contraseña: <input type='password' id='contrasena' pattern='\\d{3}' required><br>");
            ventanaPopUp.document.write("Repita Contraseña: <input type='password' id='repContrasena' pattern='\\d{3}' required><br>");
            ventanaPopUp.document.write("<button type='button' onclick='validarFormulario(ventanaPopUp)'>Aceptar</button>");
            ventanaPopUp.document.write("</form>");

            ventanaPopUp.document.write("</body></html>");

            // Enfocar la ventana emergente
            ventanaPopUp.focus();
        }

        function validarFormulario(ventanaPopUp) {
            var usuarioInput = ventanaPopUp.document.getElementById('usuario');
            var contrasenaInput = ventanaPopUp.document.getElementById('contrasena');
            var repContrasenaInput = ventanaPopUp.document.getElementById('repContrasena');

            var usuario = usuarioInput.value.toUpperCase();
            var contrasena = contrasenaInput.value;
            var repContrasena = repContrasenaInput.value;

            if (usuario.length === 5 && /^[A-Z]+$/.test(usuario) && /^\d{3}$/.test(contrasena) && /^\d{3}$/.test(repContrasena)) {
                if (contrasena === repContrasena) {
                    // Contraseñas coinciden, crear objeto Usuario y mostrar mensaje
                    var nuevoUsuario = new Usuario(usuario, contrasena, ventanaPopUp);
                    ventanaPopUp.document.write("<p>Usuario y contraseña creados correctamente.</p>");
                } else {
                    // Contraseñas no coinciden, mostrar mensaje de error
                    ventanaPopUp.document.write("<p>Contraseña incorrecta. Las dos contraseñas deben ser iguales. (Te queda un intento)</p>");
                }
            } else {
                // Datos incorrectos, mostrar mensaje de error
                ventanaPopUp.document.write("<p>Por favor, introduce un usuario válido y una contraseña de 3 cifras.</p>");
            }
        }

        // Objeto Usuario
        function Usuario(nombre, contrasena, ventanaPopUp) {
            this.nombre = nombre;
            this.contrasena = contrasena;
            this.intentos = 2;

            this.autenticar = function (contrasenaIngresada) {
                if (contrasenaIngresada === this.contrasena) {
                    ventanaPopUp.document.write("<p>Autenticación exitosa.</p>");
                } else {
                    this.intentos--;
                    if (this.intentos > 0) {
                        ventanaPopUp.document.write("<p>Contraseña incorrecta. Las dos contraseñas deben ser iguales. (Te queda " + this.intentos + " intento(s))</p>");
                    } else {
                        this.contrasena = "000";
                        ventanaPopUp.document.write("<p>Agotaste los intentos. La contraseña se ha restablecido a 000.</p>");
                    }
                }
            };
        }









//FUNCIONES VENTANA2
function abrirVentana2() {
    // Tamaño y posición de la ventana emergente
    var ancho = 300;
    var alto = 300;
    var izquierda = (window.innerWidth - ancho) / 2;
    var arriba = (window.innerHeight - alto) / 2;

    // Opciones de la ventana emergente
    var opciones = "width=" + ancho + ",height=" + alto + ",left=" + izquierda + ",top=" + arriba +
                   ",menubar=no,toolbar=no,location=no,resizable=no,scrollbars=no,status=no";

    // Abrir la ventana emergente
    var ventanaPopUp = window.open("", "Ventana2", opciones);

    // HTML dentro de la ventana emergente
    ventanaPopUp.document.write("<html><head><title>Ventana 2 Pop-up</title></head><body style='background-color: #c2ffd2;'>");
    ventanaPopUp.document.write("<h2>Contenido de la Ventana 2</h2>");
    ventanaPopUp.document.write("</body></html>");

    // Enfocar la ventana emergente
    ventanaPopUp.focus();
}