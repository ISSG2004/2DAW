//inicializamos todas las cookies a 0 al iniciar la web
reiniciarCookies();
var parejaDoble=0,trio=0,escaleraSimple=0,escaleraCompleta=0,poker=0,jugadasRealizadas=0;//inicializamos las variables para controlar cuantas combinaciones se han introducido
//metodo para identificar cada figura
function calcularFigura() {
    const numeroInput = document.getElementById('numeroInput').value;
    if (/^\d{4}$/.test(numeroInput)) {
        const numero = parseInt(numeroInput);
        let figura = "";
        jugadasRealizadas++;
        if (esDoblePareja(numero)) {
            figura = 'Doble Pareja';
            parejaDoble++;
            setCookie("parejaDoble",parejaDoble.toString(),365)
        } else if (esTrio(numero)) {
            figura = 'Trio';
            trio++;
            setCookie("trio",trio.toString(),365)
        } else if (esEscaleraSimple(numero)) {
            figura = 'Escalera Simple';
            escaleraSimple++;
            setCookie("escaleraSimple",escaleraSimple.toString(),365)
        } else if (esEscaleraCompleta(numero)) {
            figura = 'Escalera Completa';
            escaleraCompleta++;
            setCookie("escaleraCompleta",escaleraCompleta.toString(),365)
        } else if (esPocker(numero)) {
            figura = 'Poker';
            poker++;
            setCookie("poker",poker.toString(),365)
        }

        alert(`Figura: ${figura}`);
        ventana();
    } else {
        alert('Por favor, ingrese un número de 4 cifras.');
    }
}
//verificacion de combinacion de numeros
function esDoblePareja(numero) {//doble pareja
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

function esTrio(numero) {//trio
    const cifras = String(numero).split('');
    const contador = {};

    for (const cifra of cifras) {
        contador[cifra] = (contador[cifra] || 0) + 1;
    }

    return Object.values(contador).includes(3);
}

function esEscaleraSimple(numero) {//escalera simple
    const cifras = String(numero).split('').map(Number);
    return cifras[0] === cifras[1] - 1 && cifras[1] === cifras[2] - 1;
}

function esEscaleraCompleta(numero) {//escalera completa
    const cifras = String(numero).split('').map(Number);
    return cifras[0] === cifras[1] - 1 && cifras[1] === cifras[2] - 1 && cifras[2] === cifras[3] - 1;
}

function esPocker(numero) {//poker
    const cifras = String(numero).split('');
    const contador = {};

    for (const cifra of cifras) {
        contador[cifra] = (contador[cifra] || 0) + 1;
    }

    return Object.values(contador).includes(4);
}

//cookies
// Función para establecer el valor de una cookie
function setCookie(nombre, valor, dias) {
    const fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + dias);
    const cookieValue = escape(valor) + ((dias === null) ? '' : '; expires=' + fechaExpiracion.toUTCString());
    document.cookie = nombre + '=' + cookieValue + '; path=/';
}

//reiniciar cookies
function reiniciarCookies() {
    setCookie(parejaDoble, '0', 365);
    setCookie(trio, '0', 365);
    setCookie(escaleraSimple, '0', 365);
    setCookie(escaleraCompleta, '0', 365);
    setCookie(poker, '0', 365);
}

//ventana
function ventana() {
    var ventana=window.open("","estadisticas,","width=400px,height=400px");
    let porcentajeDoblePareja=((parejaDoble/jugadasRealizadas)*100);
    let porcentajeEscaleraSimple=((escaleraSimple/jugadasRealizadas)*100);
    let porcentajeEscaleraCompleta=((escaleraCompleta/jugadasRealizadas)*100);
    let porcentajeTrio=((trio/jugadasRealizadas)*100);
    let porcentajePoker=((poker/jugadasRealizadas)*100);
    ventana.document.write("<h1>Estadisticas de las jugadas</h1><br><p>Porcentaje doble pareja :"+porcentajeDoblePareja+" %</p><br><p>Porcentaje trio :"+porcentajeTrio+" %</p><br><p>Porcentaje escalera simple :"+porcentajeEscaleraSimple+" %</p><br><p>Porcentaje escalera completa :"+porcentajeEscaleraCompleta+" %</p><br><p>Porcentaje de poker :"+porcentajePoker+" %</p>");
    setTimeout(function() {
        ventana.close();
    }, 10000);
}