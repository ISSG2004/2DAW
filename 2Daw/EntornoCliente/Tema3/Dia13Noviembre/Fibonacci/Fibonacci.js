function calcularFibonacci() {
    let numero = prompt("Introduce un número entero");
    let secuencia="";
    while (isNaN(numero)||numero<0) {
        numero=prompt("Introduce un numero positivo")
    }
    numero = parseInt(numero);
    secuencia="La secuencia de fibonacci de "+numero+" es: ";
    for (let i = 0; i <= numero; i++) {
        secuencia=secuencia+fibonacci(i)+" , ";          
    }
    secuencia = secuencia.slice(0, -2);
    document.getElementById("sec").innerHTML=secuencia;
    }

    function fibonacci(numero) {
        if (numero < 2) {
            return numero;
    } else {
            return fibonacci(numero - 1) + fibonacci(numero - 2);
    }
}