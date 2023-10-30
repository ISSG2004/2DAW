function esNumero(valor) {
    return !isNaN(valor);
}

function ejercicio12() {
        let salir=false;
        let a = parseFloat(window.prompt("Introduce un número positivo menor que 57:"));
    if (isNaN(a) || a>=57 || a<=0) {
        a=window.prompt("el numero no es menor que 57");
    } else {
        let b = parseFloat(window.prompt("Introduce otro número menor que 57:"));
        if (isNaN(b) || b>=57 || b<=0) {
            b=window.prompt("el numero no es menor que 57");
        } else {
            alert("El producto de ambos números es: " + a*b);
        }
    }
 
}