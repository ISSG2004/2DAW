function ejercicio20() {
    //Este método pide un mes por pantalla y según el mes que introduces dice en que cuatrimestre del año estas
    let pedirMes=window.prompt("Introduce un mes del año");
while (!isNaN(pedirMes)) {//descartamos los valores que no sean cadenas
    pedirMes=window.prompt("Introduce un mes del año");
}
pedirMes=pedirMes.toUpperCase();//convertimos a mayuscula
switch (pedirMes) {//En funcion el mes introducido decimos en uqe trimestre esta ese mes 
    case "ENERO": case "FEBRERO": case "MARZO":
        window.alert("El mes introducido está en el primer trimestre");
        break;
    case "ABRIL": case "MAYO": case "JUNIO": 
        window.alert("El mes introducido está en el segundo trimestre");
        break;
    case "JULIO": case "AGOSTO": case "SEPTIEMBRE":  
        window.alert("El mes introducido está en el tercer trimestre");
        break;
    case "OCTUBRE": case "NOVIEMBRE": case "DICIEMBRE":
        window.alert("El mes introducido está en el cuarto trimestre");
        break;
    default:
        window.alert("No has introducido un mes válido");
        break;
}
}
function ejercicio221() {
    let pedirNumero=window.prompt("Introduce un úmero para elevarlo a 3");//pedimos numero al usuario
    while (isNaN(pedirNumero)) {//verificar que es numero
        pedirNumero=window.prompt("Introduce un numero");
    }
    window.alert(pedirNumero+" elevado al cubo es: "+Math.pow(pedirNumero,3));//mostramos por pantalla el cubo del numero introducido
}
function ejercicio222() {
    let pedirNumero=window.prompt("Introduce un úmero para calcular su raiz");//pedimos numero al usuario
    while (isNaN(pedirNumero)) {//verificar que es numero
        pedirNumero=window.prompt("Introduce un numero");
    }
    window.alert("La raiz cuadrada de "+pedirNumero+" es: "+Math.sqrt(pedirNumero));//mostramos por pantalla la raiz del numero introducido
}
function ejercicio231() {
    let pedirNombres;
    let salida=false;
    let contador=0; // Inicializamos el contador a 0
    do {
        pedirNombres=prompt("Introduce un nombre, si introduces la palabra fin se finaliza el programa");
        pedirNombres=pedirNombres.toUpperCase();
        if (pedirNombres==="FIN") {
            salida=true;
        } else {
            contador++;
        }
    } while (salida!=true);
    alert("Se han mostrado "+contador+" nombres en total"); 
}
function ejercicio232() {
    let pedirNombres;
    let salida=false;
    let contador=0; // Inicializamos el contador a 0
    do {
        pedirNombres=prompt("Introduce un nombre, si introduces la palabra fin se finaliza el programa");
        if (pedirNombres==="FIN"||pedirNombres==="fin"||pedirNombres==="Fin") {
            salida=true;
        } else {
            contador++;
        }
    } while (salida!=true);
    alert("Se han mostrado "+contador+" nombres en total"); 
}
function ejercicio233() {
    let cadena=prompt("Introduce la cadena en la que se va a buscar");
    let palabraAbuscar=prompt("Introduce la palabra a buscar");
    if (cadena.indexOf(palabraAbuscar)<0){
        alert("Una leyenda")
    }else{
        alert(palabraAbuscar+" está en la posición "+cadena.indexOf(palabraAbuscar))
    }
}
function ejercicio234() {
    let palabra=prompt("Introduce una palabra y verificaré si es palíndroma");
    palabra=palabra.toUpperCase();
    let palabraInvertida="";
    for (let i = palabra.length-1; i >= 0; i--) {
        palabraInvertida += palabra.charAt(i);
    }
    if (palabra===palabraInvertida) {
        alert("La palabra es palíndroma");
    } else {
        alert("La palabra no es palíndroma");
    }
}
function ejercicio237() {
    let oracion = prompt("Ingrese una oración:");
    let palabras = oracion.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        document.write(palabras[i] + "<br>");
    }
}