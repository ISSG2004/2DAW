function esNumero(valor) {
    return !isNaN(valor);
}
function ejercicio10() {
    let a = parseInt(window.prompt("Introduce un número entero:"));
    let b = parseInt(window.prompt("Introduce la base:"));
    while (!esNumero(a)){
        a=window.prompt("Introduce un numero");
    }
    while (!esNumero(b)){
        b=window.prompt("Introduce un numero");
    }
        window.alert("El número en la base indicada es: " + a.toString(b));    
}