function esNumero(valor) {
    return !isNaN(valor);
}
function ejercicio1B(){
    let numero1=window.prompt("Introduce el minuendo para la resta");
    let numero2=window.prompt("Introduce el sustraendo para la resta");
    let resultado=numero1-numero2;
    window.alert("El resultado de "+numero1+"-"+numero2+" es "+resultado);
}