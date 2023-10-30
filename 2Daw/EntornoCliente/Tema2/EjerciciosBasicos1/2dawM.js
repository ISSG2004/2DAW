function esNumero(valor) {
    return !isNaN(valor);
}
function ejercicio13() {
    let contador = 0;
    while (true) {
        let numero = parseInt(window.prompt("Introduce un número (9999 para finalizar):"));
        if (numero === 9999) {
            break;
        }
        contador++;
    }
    window.alert("Se introdujeron "+ contador +" números (excluyendo el 9999)");

}