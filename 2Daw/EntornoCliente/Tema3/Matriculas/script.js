// Inicializamos todas las cookies a 0 al iniciar la web
reiniciarCookies();

// Variables para controlar cuántas combinaciones se han introducido
var parejaDoble = 0, trio = 0, escaleraSimple = 0, escaleraCompleta = 0, poker = 0, jugadasRealizadas = 0, figura = "";

// Método para identificar cada figura
function calcularFigura() {
    // Obtenemos el valor del input con id 'numeroInput'
    const numeroInput = document.getElementById('numeroInput').value;
    
    // Verificamos si el input tiene 4 dígitos
    if (/^\d{4}$/.test(numeroInput)) {
        const numero = parseInt(numeroInput);
        jugadasRealizadas++; // Incrementamos el contador de jugadas realizadas

        // Verificamos la figura y actualizamos las variables correspondientes
        if (esDoblePareja(numero)) {
            figura += ' Doble Pareja ';
            parejaDoble++;
            alert(`Figura: doble pareja`);
            setCookie("parejaDoble", parejaDoble.toString(), 365);//actualizamos el valor de la cookie
            setCookie("figura",figura,365);//actualizamos valor a la cookie
            ventana(); // Abre una ventana con estadísticas
        } else if (esTrio(numero)) {
            figura += ' Trio ';
            trio++;
            alert(`Figura: trio`);
            setCookie("trio", trio.toString(), 365);//actualizamos el valor de la cookie
            setCookie("figura",figura,365);//actualizamos valor a la cookie
            ventana();
        } else if (esEscaleraSimple(numero)) {
            figura += ' Escalera Simple ';
            alert(`Figura: escalera simple`);
            escaleraSimple++;
            setCookie("escaleraSimple", escaleraSimple.toString(), 365);//actualizamos el valor de la cookie
            setCookie("figura",figura,365);//actualizamos valor a la cookie
            ventana();// Abre una ventana con estadísticas
        } else if (esEscaleraCompleta(numero)) {
            figura += ' Escalera Completa ';
            escaleraCompleta++;
            alert(`Figura: escalera completa`);
            setCookie("escaleraCompleta", escaleraCompleta.toString(), 365);//actualizamos el valor de la cookie
            setCookie("figura",figura,365);//actualizamos valor a la cookie
            ventana();// Abre una ventana con estadísticas
        } else if (esPocker(numero)) {
            figura += ' Poker ';
            poker++;
            alert(`Figura: Poker`);
            setCookie("poker", poker.toString(), 365);//actualizamos el valor de la cookie
            setCookie("figura",figura,365);//actualizamos valor a la cookie
            ventana();// Abre una ventana con estadísticas
        } else {
            alert(`No se reconoce como ninguna de las figuras`);
        }
    } else {
        alert('Por favor, ingrese un número de 4 cifras.');
    }
}

// Verificación de combinación de números para Doble Pareja
function esDoblePareja(numero) {
    const cifras = String(numero).split('');
    const contador = {};

    // Contamos la cantidad de ocurrencias de cada cifra
    for (const cifra of cifras) {
        contador[cifra] = (contador[cifra] || 0) + 1;
    }

    // Contamos las parejas
    let parejas = 0;
    for (const key in contador) {
        if (contador[key] === 2) {
            parejas++;
        }
    }

    return parejas === 2; // Devuelve true si hay dos parejas
}

// Verificación de combinación de números para Trío
function esTrio(numero) {
    const cifras = String(numero).split('');
    const contador = {};

    // Contamos la cantidad de ocurrencias de cada cifra
    for (const cifra of cifras) {
        contador[cifra] = (contador[cifra] || 0) + 1;
    }

    return Object.values(contador).includes(3); // Devuelve true si hay un trío
}

// Verificación de combinación de números para Escalera Simple
function esEscaleraSimple(numero) {
    const cifras = String(numero).split('').map(Number);
    return cifras[0] === cifras[1] - 1 && cifras[1] === cifras[2] - 1;
}

// Verificación de combinación de números para Escalera Completa
function esEscaleraCompleta(numero) {
    const cifras = String(numero).split('').map(Number);
    return cifras[0] === cifras[1] - 1 && cifras[1] === cifras[2] - 1 && cifras[2] === cifras[3] - 1;
}

// Verificación de combinación de números para Póker
function esPocker(numero) {
    const cifras = String(numero).split('');
    const contador = {};

    // Contamos la cantidad de ocurrencias de cada cifra
    for (const cifra of cifras) {
        contador[cifra] = (contador[cifra] || 0) + 1;
    }

    return Object.values(contador).includes(4); // Devuelve true si hay un póker
}

// Cookies

// Función para establecer el valor de una cookie
function setCookie(nombre, valor, dias) {
    const fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + dias);
    const cookieValue = escape(valor) + ((dias === null) ? '' : '; expires=' + fechaExpiracion.toUTCString());
    document.cookie = nombre + '=' + cookieValue + '; path=/';
}

// Reiniciar cookies al valor inicial (0)
function reiniciarCookies() {
    setCookie(parejaDoble, '0', 365);
    setCookie(trio, '0', 365);
    setCookie(escaleraSimple, '0', 365);
    setCookie(escaleraCompleta, '0', 365);
    setCookie(poker, '0', 365);
    setCookie(figura, '0', 365);
}

// Ventana de estadísticas
function ventana() {
    var ventana = window.open("", "estadisticas,", "width=400px,height=400px");
    
    // Cálculos de porcentajes y redondeamos a 2 los decimales de los porecntajes
    let porcentajeDoblePareja = ((parejaDoble / jugadasRealizadas) * 100).toFixed(2);
    let porcentajeEscaleraSimple = ((escaleraSimple / jugadasRealizadas) * 100).toFixed(2);
    let porcentajeEscaleraCompleta = ((escaleraCompleta / jugadasRealizadas) * 100).toFixed(2);
    let porcentajeTrio = ((trio / jugadasRealizadas) * 100).toFixed(2);
    let porcentajePoker = ((poker / jugadasRealizadas) * 100).toFixed(2);
    
    // Mostrar estadísticas en la ventana
    ventana.document.write("<h1>Estadisticas de las jugadas</h1><br><p>Jugadas realizadas:"+figura +"</p><br><p>Porcentaje doble pareja :"+porcentajeDoblePareja+" %</p><br><p>Porcentaje trio :"+porcentajeTrio+" %</p><br><p>Porcentaje escalera simple :"+porcentajeEscaleraSimple+" %</p><br><p>Porcentaje escalera completa :"+porcentajeEscaleraCompleta+" %</p><br><p>Porcentaje de poker :"+porcentajePoker+" %</p>");
    setTimeout(function() {
        ventana.close();
    }, 10000);
}