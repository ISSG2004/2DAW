function esNumero(valor) {
    return !isNaN(valor);
}

function ejercicio5() {
    let a=prompt("Escribe la base:");
    while (!esNumero(a)){
        a=window.prompt("Introduce un numero");
    }
    let b=prompt("Escribe la altura:");
    while (!esNumero(b)){
        b=window.prompt("Introduce un numero");
    }
    window.alert("Área de un triangulo= "+(a*b/2));
   
}