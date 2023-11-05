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