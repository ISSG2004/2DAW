function esNumero(valor) {
    return !isNaN(valor);
}
function ejercicio7() {
    let a = parseFloat(window.prompt("Introduce un número:"));
    while (!esNumero(a)){
        numero=window.prompt("Introduce un numero");
    }
        let b = a+5;
        let c = b+21;
        let d = c-4;
        window.alert("Número introducido:\u00A0" + a + "\nContadores:\u00A0" + b + "\u00A0" + c + "\u00A0" + d);
}