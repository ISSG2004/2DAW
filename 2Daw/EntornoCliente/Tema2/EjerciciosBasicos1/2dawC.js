function esNumero(valor) {
    return !isNaN(valor);
}
function ejercicio3() {
    let nombre=window.prompt("Introduce tu nombre");
    let edad=window.prompt("Introduce tu edad")
    while (!esNumero(edad)) {
        edad=window.prompt("No has entroducido un numero, introduce un valor que sea valido como edad");
    }
    let resultado=edad*365;
    window.alert("Tu nombre es "+nombre+" y has vivido "+resultado+" dias");
}