function esNumero(valor) {
    return !isNaN(valor);
}

function ejercicio8() {
    let a = parseInt(window.prompt("Introduce un número entero:"));
    while (!esNumero(a)&&a>=8){
        a=window.prompt("Introduce un numero");
    }
    window.alert("Base 16: " + a.toString(16) + "\nBase 5: " + a.toString(5));
}
