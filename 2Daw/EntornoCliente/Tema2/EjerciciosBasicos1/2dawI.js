function esNumero(valor) {
    return !isNaN(valor);
}
function ejercicio9() {
    let a = parseInt(window.prompt("Introduce un número en base ocho:"));
    while (!esNumero(a)){
        a=window.prompt("Introduce un numero entero");
    }
    window.alert("Base decimal: " + parseInt(a, 8) + "\nBase 2: " + parseInt(a, 8).toString(2));
}