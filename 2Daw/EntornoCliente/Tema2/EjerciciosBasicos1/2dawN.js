function esNumero(valor) {
    return !isNaN(valor);
}

function ejercicio14() {
    let contador = 0;
    let suma = 0;
    while (true) {
        let numero = parseInt(window.prompt("Introduce un número (9999 para finalizar):"));
        if (numero === 9999) {
            break;
        }
        contador++;
        suma += numero;
    }
    window.prompt("Se introdujeron "+ contador +" números (excluyendo el 9999)");
    window.prompt("La suma de los números introducidos (excluyendo el 9999) es: "+suma);
}