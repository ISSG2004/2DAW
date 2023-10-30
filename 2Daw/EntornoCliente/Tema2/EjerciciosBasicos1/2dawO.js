function esNumero(valor) {
    return !isNaN(valor);
}
function ejercicio15() {
    let contador = 0;
    let suma = 0;
    let producto = 1;
    while (true) {
        let numero = parseInt(window.prompt("Introduce un número (9999 para finalizar):"));
        if (numero === 9999) {
            break;
        }
        contador++;
        suma += numero;
        producto *= numero;
    }
    window.alert("Se introdujeron "+contador+" números (excluyendo el 9999)");
    window.alert("La suma de los números introducidos (excluyendo el 9999) es: "+suma);
    window.alert("El producto de los números introducidos (excluyendo el 9999) es: "+producto);
}