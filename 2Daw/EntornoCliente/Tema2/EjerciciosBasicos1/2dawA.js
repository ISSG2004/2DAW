function esNumero(valor) {//Funcion para controlar si es número
    return !isNaN(valor);
}
function ejercicio1A() {
    let numero1=window.prompt("Introduce el minuendo para la resta");
    while(!esNumero(numero1)){
        numero1=window.prompt("Introduce un numero por favor");
    }
    let numero2=window.prompt("Introduce el sustraendo para la resta");
    while(!esNumero(numero2)){
        numero2=window.prompt("Introduce un numero por favor");
    }
    let resultado=numero1-numero2;
    window.alert("El resultado de "+numero1+"-"+numero2+" es "+resultado);
}