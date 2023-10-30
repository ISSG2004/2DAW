function esNumero(valor) {
    return !isNaN(valor);
}

function ejercicio16() {
    let suma = 0;
    let multiplos = "Múltiplos de 23 inferiores a 1000:\n";
    for (let i = 0; i < 1000; i++) {
        if (i % 23 === 0) {
            multiplos += i + " ";
            suma += i ;
        }
    }
    window.alert(multiplos + "\nSu suma total es: " + suma);
}