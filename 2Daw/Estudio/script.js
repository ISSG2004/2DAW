var votoPP = 0, votoVOX = 0, votoPSOE = 0, votoSumar = 0, votoPacma = 0, votoNulo = 0;
miBoton.addEventListener('click', contarClics);
function validarVoto() {
    var partidoVotado = document.getElementById("partidoPolitico").value;
    partidoVotado = partidoVotado.trim().toLowerCase();

    switch (partidoVotado) {
        case "pp":
            votoPP++;
            setCookie('votoPP', votoPP.toString(), 365);
            mostrarRecuento();
            abrirVentana();
            return;
        case "vox":
            votoVOX++;
            setCookie('votoVOX', votoVOX.toString(), 365);
            mostrarRecuento();
            abrirVentana();
            return;
        case "psoe":
            votoPSOE++;
            setCookie('votoPSOE', votoPSOE.toString(), 365);
            mostrarRecuento();
            abrirVentana();
            return;
        case "sumar":
            votoSumar++;
            setCookie('votoSumar', votoSumar.toString(), 365);
            mostrarRecuento();
            abrirVentana();
            return;
        case "pacma":
            votoPacma++;
            setCookie('votoPacma', votoPacma.toString(), 365);
            mostrarRecuento();
            abrirVentana();
            return;
        default:
            votoNulo++;
            setCookie('votoNulo', votoNulo.toString(), 365);
            mostrarRecuento();
            abrirVentana();
            return;
    }
    
}

function mostrarRecuento(){
    document.getElementById("recuentos").innerHTML="<h1>Votos PP </h1>"+votoPP+"<br>"+"<h1>Votos VOX </h1>"+votoVOX+"<br>"+"<h1>Votos PSOE </h1>"+votoPSOE+"<br>"+"<h1>Votos Sumar </h1>"+votoSumar+"<br>"+"<h1>Votos Pacma </h1>"+votoPacma+"<br>"+"<h1>Votos Nulos </h1>"+votoNulo+"<br>";
}
function abrirVentana() {
    var ventana = window.open(" ", " ","width=400px,height=400px");
    ventana.document.write("<h1>Muchas gracias por su voto</h1>");//escribir aqui la info que queremos que se escriba en la ventana
    setTimeout(function() {//asignar un cierre cuando pase x tiempo
    ventana.close();
    }, 10000);//aqui modificamos el tiempo en el que queremos que se cierre(esta puesto a 10 segs)
    
}


function setCookie(nombre, valor, dias) {
    const fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + dias);
    const cookieValue = escape(valor) + ((dias === null) ? '' : '; expires=' + fechaExpiracion.toUTCString());
    document.cookie = nombre + '=' + cookieValue + '; path=/';
}

function reiniciarCookies() {
    setCookie('votoPP', '0', 365);
    setCookie('votoPSOE', '0', 365);
    setCookie('votoVOX', '0', 365);
    setCookie('votoSumar', '0', 365);
    setCookie('votoPacma', '0', 365);
    setCookie('votoNulo', '0', 365);
}

function getCookie(nombre) {
    const nombreEQ = nombre + '=';
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nombreEQ) === 0) {
            return cookie.substring(nombreEQ.length, cookie.length);
        }
    }
    return '';
}


function contarClics() {
    // Verificar si la cookie 'contador' existe
    let contador = getCookie('contador');

    // Si no existe, inicializarlo a 0
    if (contador === '') {
        contador = 0;
    } else {
        // Si existe, convertirlo de cadena a número
        contador = parseInt(contador);
    }
    // Incrementar el contador
    contador++;
    // Almacenar el contador en la cookie
    setCookie('contador', contador.toString(), 365);
}
