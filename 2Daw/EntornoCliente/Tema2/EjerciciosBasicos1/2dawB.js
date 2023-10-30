function esNumero(valor) {
    return !isNaN(valor);
}
function ejercicio2(){
    let numero1=window.prompt("Introduce el dividendo para la division");
    while(!esNumero(numero1)){
        numero1=window.prompt("Introduce un numero por favor");
    }
    let numero2=window.prompt("Introduce el divisor para la division");
    while(!esNumero(numero2)){
        numero2=window.prompt("Introduce un numero por favor");
    }
    let resultado=numero1/numero2;
    window.alert("El resultado de "+numero1+"/"+numero2+" es "+resultado);
}