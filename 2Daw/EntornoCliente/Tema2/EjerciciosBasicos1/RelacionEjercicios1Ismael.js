function esNumero(valor) {
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
function ejercicio1B(){
    let numero1=window.prompt("Introduce el minuendo para la resta");
    let numero2=window.prompt("Introduce el sustraendo para la resta");
    let resultado=numero1-numero2;
    window.alert("El resultado de "+numero1+"-"+numero2+" es "+resultado);
}
function ejercicio2(){
    let numero1=window.prompt("Introduce el dividendo para la division");
    while(!esNumero(numero1)){
        numero1=window.prompt("Introduce un numero por favor");
    }
    let numero2=window.prompt("Introduce el divisor para la resta");
    while(!esNumero(numero2)){
        numero2=window.prompt("Introduce un numero por favor");
    }
    let resultado=numero1/numero2;
    window.alert("El resultado de "+numero1+"/"+numero2+" es "+resultado);
}
function ejercicio3() {
    let nombre=window.prompt("Introduce tu nombre");
    let edad=window.prompt("Introduce tu edad")
    while (!esNumero(edad)) {
        edad=window.prompt("No has entroducido un numero, introduce un valor que sea valido como edad");
    }
    let resultado=edad*365;
    window.alert("Tu nombre es "+nombre+" y has vivido "+resultado+" dias");
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
function ejercicio6() {
    let radio = window.prompt("Introduce el radio:");
    while (!esNumero(radio)){
        radio=window.prompt("Introduce un numero");
    }
        window.alert("Longitud de la circunferencia: " + 2*Math.PI*radio + "\nÁrea del círculo: " + Math.PI*radio*radio);
}

function ejercicio7() {
    let a = parseFloat(window.prompt("Introduce un número:"));
    while (!esNumero(a)){
        numero=window.prompt("Introduce un numero");
    }
        let b = a+5;
        let c = b+21;
        let d = c-4;
        window.alert("Número introducido:\u00A0" + a + "\nContadores:\u00A0" + b + "\u00A0" + c + "\u00A0" + d);
}

function ejercicio8() {
    let a = parseInt(window.prompt("Introduce un número entero:"));
    while (!esNumero(a)&&a>=8){
        a=window.prompt("Introduce un numero");
    }
    window.alert("Base 16: " + a.toString(16) + "\nBase 5: " + a.toString(5));
}
function ejercicio9() {
    let a = parseInt(window.prompt("Introduce un número en base ocho:"));
    while (!esNumero(a)){
        a=window.prompt("Introduce un numero entero");
    }
    window.alert("Base decimal: " + parseInt(a, 8) + "\nBase 2: " + parseInt(a, 8).toString(2));
}
function ejercicio10() {
    let a = parseInt(window.prompt("Introduce un número entero:"));
    let b = parseInt(window.prompt("Introduce la base:"));
    while (!esNumero(a)){
        a=window.prompt("Introduce un numero");
    }
    while (!esNumero(b)){
        b=window.prompt("Introduce un numero");
    }
        window.alert("El número en la base indicada es: " + a.toString(b));    
}
function ejercicio11() {
    let farenheit,celsius;
    let s="";
    for (i=-2;i<=12;i++)
        {
        celsius=10*i;
        farenheit=32+(celsius*9)/5;
        s=s+"C= "+celsius+" F= "+farenheit+"\n";
        if (celsius==0) s=s+"Punto congelación del Agua\n";
        if (celsius==100) s=s+"Punto de ebullición del Agua\n";
        }
    window.alert(s);
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
function ejercicio13() {//falla
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
function ejercicio14() {//falla
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
function ejercicio15() {//falla
    let contador = 0;
    let suma = 0;
    let producto = 1;
    while (true) {
        let numero = parseInt(window.prompt("Introduce un número (9999 para finalizar):"));
        if (numero === 9999) {
            break;
        }
        contador++;
        suma += numero;
        producto *= numero;
    }
    window.alert("Se introdujeron "+contador+" números (excluyendo el 9999)");
    window.alert("La suma de los números introducidos (excluyendo el 9999) es: "+suma);
    window.alert("El producto de los números introducidos (excluyendo el 9999) es: "+producto);
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