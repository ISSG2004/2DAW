function esNumero(valor) {
    return !isNaN(valor);
}
function ejercicio4() {
    let numero=window.prompt("Introduce un numero");
    while (!esNumero(numero)){
        numero=window.prompt("Introduce un numero");
    }
    let doble=numero*2;
    let triple=numero*3;
    let cuadruple=numero*4;
    window.alert("El numero introducido es "+numero+". Su doble es "+doble+". Su triple es "+triple+". Su cuadruple es "+cuadruple);
}