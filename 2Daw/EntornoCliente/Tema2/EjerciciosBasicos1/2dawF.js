function esNumero(valor) {
    return !isNaN(valor);
}
function ejercicio6() {
    let radio = window.prompt("Introduce el radio:");
    while (!esNumero(radio)){
        radio=window.prompt("Introduce un numero");
    }
        window.alert("Longitud de la circunferencia: " + 2*Math.PI*radio + "\nÁrea del círculo: " + Math.PI*radio*radio);
}
