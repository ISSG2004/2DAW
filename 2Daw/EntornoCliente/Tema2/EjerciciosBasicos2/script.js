function esNumero(valor) {
    return !isNaN(valor);
}
function ejercicio51() {
    let longitudLado=(window.prompt("Introduce un numero entero para la longitud del lado"));//peticion de numero al usuario
    while (!esNumero(longitudLado)) {//verificacion de si intorduce un numero
        longitudLado=window.prompt("Introduce un número entero!!");
    }
    window.alert("El perímetro del rectángulo es "+longitudLado*4)//calcular perimetro
}
function ejercicio52() {
    let num1=parseInt(window.prompt("Introduce un numero"));//peticion de numero al usuario
    while (!esNumero(num1)) {//verificacion de si intorduce un numero
        num1=parseInt(window.prompt("Introduce un número entero!!"));
    }
    let num2=parseInt(window.prompt("Introduce un numero"));//peticion de numero al usuario
    while (!esNumero(num2)) {//verificacion de si intorduce un numero
        num2=parseInt(window.prompt("Introduce un número entero!!"));
    }
    let num3=parseInt(window.prompt("Introduce un numero"));//peticion de numero al usuario
    while (!esNumero(num3)) {//verificacion de si intorduce un numero
        num3=parseInt(window.prompt("Introduce un número entero!!"));
    }
    let num4=parseInt(window.prompt("Introduce un numero"));   //peticion de numero al usuario
    while (!esNumero(num4)) {//verificacion de si intorduce un numero
        num4=parseInt(window.prompt("Introduce un número entero!!"));
    }
    var sumaResultado = num1 + num2;
    window.alert("La suma entre el numero 1 y 2 es "+sumaResultado);
    window.alert("El producto entre el 3 y el 4 es "+num3*num4);
}
function ejercicio53() {
    let num1=parseInt(window.prompt("Introduce un numero"));//peticion de numero al usuario
    while (!esNumero(num1)) {//verificacion de si intorduce un numero
        num1=parseInt(window.prompt("Introduce un número entero!!"));
    }
    let num2=parseInt(window.prompt("Introduce un numero"));//peticion de numero al usuario
    while (!esNumero(num2)) {//verificacion de si intorduce un numero
        num2=parseInt(window.prompt("Introduce un número entero!!"));
    }
    let num3=parseInt(window.prompt("Introduce un numero"));//peticion de numero al usuario
    while (!esNumero(num3)) {//verificacion de si intorduce un numero
        num3=parseInt(window.prompt("Introduce un número entero!!"));
    }
    let num4=parseInt(window.prompt("Introduce un numero"));   //peticion de numero al usuario
    while (!esNumero(num4)) {//verificacion de si intorduce un numero
        num4=parseInt(window.prompt("Introduce un número entero!!"));
    }
    var sumaResultado = num1 + num2 +num3+num4;
    window.alert("La suma entre los 4 numeros es "+sumaResultado);
    window.alert("El producto entre los 4 numeros es "+num3*num4*num1*num2);
}
function ejercicio54(){
    let num1=parseInt(window.prompt("Introduce el precio de un artículo"));//peticion de numero al usuario
    while (!esNumero(num1)) {//verificacion de si intorduce un numero
        num1=parseInt(window.prompt("Introduce un número entero!!"));
    }
    window.alert("La cantidad a abonar es "+num1);
}
function ejercicio61() {
    let num1=parseInt(window.prompt("Introduce la primera nota"));//peticion de numero al usuario
    while (!esNumero(num1)) {//verificacion de si intorduce un numero
        num1=parseInt(window.prompt("Introduce un número entero!!"));
    }
    let num2=parseInt(window.prompt("Introduce la segunda nota"));//peticion de numero al usuario
    while (!esNumero(num2)) {//verificacion de si intorduce un numero
        num2=parseInt(window.prompt("Introduce un número entero!!"));
    }
    let num3=parseInt(window.prompt("Introduce la tercera nota"));//peticion de numero al usuario
    while (!esNumero(num3)) {//verificacion de si intorduce un numero
        num3=parseInt(window.prompt("Introduce un número entero!!"));
    }
    let sumaNotas=(num1+num2+num3);
    window.alert("La media entre las 3 notas es "+sumaNotas/3);
}
function ejercicio62() {
    let clave1=window.prompt("Introduce una clave");//peticion de numero al usuario
    let clave2=window.prompt("Introduce la segunda clave")//peticion de numero al usuario
    if (clave1==clave2){//verificacion de si son iguales
        window.alert("Las claves son iguales")
    }else{
        window.alert("Las claves son distintas")
    }
}
function ejercicio71(){
    let num1=parseInt(window.prompt("Introduce el primer numero"));//peticion de numero al usuario
    while (!esNumero(num1)) {//verificacion de si intorduce un numero
        num1=parseInt(window.prompt("Introduce un número entero!!"));
    }
    let num2=parseInt(window.prompt("Introduce el segundo numero"));//peticion de numero al usuario
    while (!esNumero(num2)) {//verificacion de si intorduce un numero
        num2=parseInt(window.prompt("Introduce un número entero!!"));
    }
    if (num1>num2){//comprobar que numero es mayor
        window.alert("El numero 1 es mayor al segundo")
        window.alert("La diferencia entre el numero 1 y el numero 2 es "+(num1-num2))
        window.alert("La suma entre el numero 1 y el numero 2 es "+(num1+num2))
    }else{//comprobar que numero es mayor
        window.alert("El numero 1 es menor al segundo")
        window.alert("El producto entre el numero 1 y el numero 2 es "+num2*num1)
        window.alert("La division entre el numero 1 y el numero 2 es "+(num2/num1))
    }
}
function ejercicio72() {
    let num1=parseInt(window.prompt("Introduce la primera nota"));//pedimos nota
    while (!esNumero(num1)) {//comprobar si el usuario introduce un numero
        num1=parseInt(window.prompt("Introduce un número entero!!"));
    }
    let num2=parseInt(window.prompt("Introduce la segunda nota"));//pedimos nota
    while (!esNumero(num2)) {//comprobar si el usuario introduce un numero
        num2=parseInt(window.prompt("Introduce un número entero!!"));
    }
    let num3=parseInt(window.prompt("Introduce la tercera nota"));//pedimos nota
    while (!esNumero(num3)) {//comprobar si el usuario introduce un numero
        num3=parseInt(window.prompt("Introduce un número entero!!"));
    }
    let media=(num1+num2+num3/3);//calculamos la media de las 3 notas
    if (media>=4) {//comprobamos los rangos
        alert("Regular");
    }else{
        alert("Reprobado");
    }
}
function ejercicio73() {
    let numero=parseInt(prompt("Introduce un numero de dos digitos"))//peticion de numero
    while (!esNumero(numero)||numero>99) {//comprobar si el usuario introduce un numero
        numero=parseInt(window.prompt("Introduce un número entero de 2 cifras!!"));
    }
    if (numero<10) {//comprobamos de cuantas cifras es el numero
        alert("El numero tiene una cifra solo")
    }else{
        alert("El numero tiene dos cifras")
    }
}
