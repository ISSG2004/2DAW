// Definir funciones para calcular las figuras
function esDoblePareja(numero) {
    const cifras = String(numero).split('');
    const contador = {};

    for (const cifra of cifras) {
        contador[cifra] = (contador[cifra] || 0) + 1;
    }

    let parejas = 0;
    for (const key in contador) {
        if (contador[key] === 2) {
            parejas++;
        }
    }

    return parejas === 2;
}

function esTrio(numero) {
    const cifras = String(numero).split('');
    const contador = {};

    for (const cifra of cifras) {
        contador[cifra] = (contador[cifra] || 0) + 1;
    }

    return Object.values(contador).includes(3);
}

function esEscaleraSimple(numero) {
    const cifras = String(numero).split('').map(Number);
    return cifras[0] === cifras[1] - 1 && cifras[1] === cifras[2] - 1;
}

function esEscaleraCompleta(numero) {
    const cifras = String(numero).split('').map(Number);
    return cifras[0] === cifras[1] - 1 && cifras[1] === cifras[2] - 1 && cifras[2] === cifras[3] - 1;
}

function esPocker(numero) {
    const cifras = String(numero).split('');
    const contador = {};

    for (const cifra of cifras) {
        contador[cifra] = (contador[cifra] || 0) + 1;
    }

    return Object.values(contador).includes(4);
}

function calcularFigura() {
    const numeroInput = document.getElementById('numeroInput').value;

    if (/^\d{4}$/.test(numeroInput)) {
        const numero = parseInt(numeroInput);

        let figura = 'Ninguna';
        if (esDoblePareja(numero)) {
            figura = 'Doble Pareja';
        } else if (esTrio(numero)) {
            figura = 'Trio';
        } else if (esEscaleraSimple(numero)) {
            figura = 'Escalera Simple';
        } else if (esEscaleraCompleta(numero)) {
            figura = 'Escalera Completa';
        } else if (esPocker(numero)) {
            figura = 'Pocker';
        }

        alert(`Figura: ${figura}`);
        mostrarVentanaEstadisticas();
    } else {
        alert('Por favor, ingrese un número de 4 cifras.');
    }
}

function mostrarVentanaEstadisticas() {
    const estadisticasVentana = window.open('', 'Estadisticas', 'width=400,height=300');
    estadisticasVentana.document.write('<h2>Estadísticas</h2>');

    // Ejemplo: Calcular y mostrar porcentajes
    const totalIntentos = obtenerTotalIntentos(); // Función hipotética para obtener el total de intentos
    const porcentajeDoblePareja = calcularPorcentajeDoblePareja(totalIntentos);
    const porcentajeTrio = calcularPorcentajeTrio(totalIntentos);
    const porcentajeEscaleraSimple = calcularPorcentajeEscaleraSimple();
    const porcentajeEscaleraCompleta = calcularPorcentajeEscaleraCompleta();
    const porcentajePocker = calcularPorcentajePocker();
    // Agrega más funciones para calcular porcentajes de otras figuras según sea necesario

    // Mostrar porcentajes en la ventana
    estadisticasVentana.document.write(`<p>Doble Pareja: ${porcentajeDoblePareja.toFixed(2)}%</p>`);
    estadisticasVentana.document.write(`<p>Trio: ${porcentajeTrio.toFixed(2)}%</p>`);
    estadisticasVentana.document.write(`<p>Escalera Simple: ${porcentajeEscaleraSimple.toFixed(2)}%</p>`);
    estadisticasVentana.document.write(`<p>Escalera Completa: ${porcentajeEscaleraCompleta.toFixed(2)}%</p>`);
    estadisticasVentana.document.write(`<p>Pocker: ${porcentajePocker.toFixed(2)}%</p>`);
    // Agrega más líneas para mostrar porcentajes de otras figuras

    // Cerrar la ventana después de 10 segundos
    setTimeout(function () {
        estadisticasVentana.close();
    }, 10000);
}

// Funciones para calcular porcentajes de otras figuras
function calcularPorcentajeDoblePareja(totalIntentos) {
    const doblePareja = parseInt(getCookie('doblePareja')) || 0;
    return totalIntentos !== 0 ? (doblePareja / totalIntentos) * 100 : 0;
}

function calcularPorcentajeTrio(totalIntentos) {
    const trio = parseInt(getCookie('trio')) || 0;
    return totalIntentos !== 0 ? (trio / totalIntentos) * 100 : 0;
}

function calcularPorcentajeEscaleraSimple() {
    const escaleraSimple = parseInt(getCookie('escaleraSimple')) || 0;
    return obtenerTotalIntentos() !== 0 ? (escaleraSimple / obtenerTotalIntentos()) * 100 : 0;
}

function calcularPorcentajeEscaleraCompleta() {
    const escaleraCompleta = parseInt(getCookie('escaleraCompleta')) || 0;
    return obtenerTotalIntentos() !== 0 ? (escaleraCompleta / obtenerTotalIntentos()) * 100 : 0;
}

function calcularPorcentajePocker() {
    const pocker = parseInt(getCookie('pocker')) || 0;
    return obtenerTotalIntentos() !== 0 ? (pocker / obtenerTotalIntentos()) * 100 : 0;
}

function calcularPorcentajePocker(totalIntentos) {
    const pocker = parseInt(getCookie('pocker')) || 0;
    return totalIntentos !== 0 ? (pocker / totalIntentos) * 100 : 0;
}
function actualizarEstadisticas(figura) {
    contador++; // Incrementar el contador total de jugadas
    actualizarCookieVecesJugado(contador);

    let estadisticasGuardadas = JSON.parse(localStorage.getItem('estadisticas')) || {};
    estadisticasGuardadas[figura] = (estadisticasGuardadas[figura] || 0) + 1;

    // Calcular porcentajes
    const porcentajes = {};
    for (const cifra in estadisticasGuardadas) {
        porcentajes[cifra] = (estadisticasGuardadas[cifra] / contador) * 100;
    }

    // Guardar estadísticas en el almacenamiento local
    localStorage.setItem('estadisticas', JSON.stringify(estadisticasGuardadas));
}

function calcularEstadisticas(numero) {
    const cifras = String(numero).split('');
    const contador = {};

    for (const cifra of cifras) {
        contador[cifra] = (contador[cifra] || 0) + 1;
    }

    return contador;
}


// Otros elementos relacionados con el manejo de cookies pueden agregarse aquí.
