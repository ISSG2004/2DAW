//declaramos objeto
var usuario = {
    nombre: "alumno",
    contraseña: "bueno",
    hora:"",
    cambiarContraseña: function (nuevaContraseña) {
        this.contraseña = nuevaContraseña;
    },
    actualizarHora: function (){
        this.hora=new Date;
    }
};

//declaramos las variables de las ventanas
var ventana1="";ventana2="";ventana3="";ventana4="";
function funcionalidadVentana1() {//metodo para operar en la ventana1
    ventana1 = window.open('_ventana1.html', 'Ventana1', 'height=300,width=300');//creamos la ventana emergente
    ventana1.document.bgColor='green';//ponemos su color de fondo
}
//cerrar ventana1
closeVentana1.addEventListener('click', cerrarVentana1);//Creamos evento para que cuando se haga click en el boton se cierre
function cerrarVentana1(){
    ventana1.close();
}
function funcionalidadVentana2(){//metodo ventana2
    ventana2 = window.open('', 'Ventana2', 'height=300,width=300');//creamos la ventana
    ventana2.document.bgColor='blue';//añadimos el fondo
    ventana2.moveTo(1900,0);//ajustamos la posicion
    //Escribimos los listados de numeros llamando a los metodos
    ventana2.document.write("<h1>Listado completo: </h1><p>"+listaNumeros()+"</p><h1>Listado aleatorio</h1><p>"+listaRecortada()+"</p>");
}
//cerrar ventana2
closeVentana2.addEventListener('click', cerrarVentana2);//Creamos evento para que cuando se haga click en el boton se cierre
function cerrarVentana2(){
    ventana2.close();
}

function funcionalidadVentana3(){//ventana3
    ventana3 = window.open('', 'Ventana3', 'height=300,width=300');//creamos la ventana
    ventana3.document.body.style.backgroundColor ='pink';//ajustamos el color de fondo
    ventana3.moveTo(1900,1080);//ajustamos la posicion
    ventana3.document.write("<h1>Listado impares</h1><p>"+seleccionarImpares()+"</p>")
}
//cerrar ventana3
closeVentana3.addEventListener('click', cerrarVentana3);//Creamos evento para que cuando se haga click en el boton se cierre
function cerrarVentana3(){
    ventana3.close();
}
function funcionalidadVentana4(){//ventana4
    ventana4 = window.open('', 'Ventana4', 'height=300,width=300');//creamos la ventana
    ventana4.document.bgColor='orange';//color de fondo
    ventana4.moveTo(0,1080);//posicion de la ventana
    if (usuario.hora=="") {
        ventana4.document.write("No se puede mostrar nada ya que no se cambio la contraseña");
    } else {
        ventana4.document.write("<p>Contraseña nueva: "+usuario.contraseña+"</p><br><p>Hora del cambio: "+usuario.hora+" </p>")
    }
}
//cerrar ventana4
closeVentana4.addEventListener('click', cerrarVentana4);//Creamos evento para que cuando se haga click en el boton se cierre
function cerrarVentana4(){
    ventana4.close();
}

//metodo para almacenar el valor seleccinado para la longitud
function crearLongitud(){
    var numero=parseInt(document.getElementById("longitud").value);//accedemos a la ID del boton para coger el valor
    return numero;
}

//metodo para almacenar el valor seleccinado para la cantidad de Random
function seleccionarCantidadRandom(){
    var numero=parseInt(document.getElementById("valoresRandom").value);//accedemos a la ID del boton para coger el valor
    return numero;
}
//metodo para crear el array que se nos pide
function listaNumeros() {
    var listado=[];
    for (let i = 0; i < crearLongitud(); i++) {//hacemos que un bucle for itere las veces introducidas
        listado.push(parseInt(Math.random()*crearLongitud()));//añadimos un numero aleatorio al fianl
    }
    return listado;
}
//array recortado segun lo que pide el usuario
function listaRecortada() {
    var listado=[];
    for (let i = 0; i < seleccionarCantidadRandom(); i++) {//hacemos que un bucle for itere las veces introducidas
        listado.push(parseInt(Math.random()*crearLongitud()));
    }
    return listado;
}
//metodo para coger los numeros impares
function seleccionarImpares() {
    var listadoImpar = []; // creamos un segundo array para almacenar impares
    var listaRecortadaArray = listaRecortada(); // almacenamos el resultado de listaRecortada() en una variable
    for (let i = 0; i < listaRecortadaArray.length; i++) {
        if (listaRecortadaArray[i] % 2 !== 0) { // condicion para sacar impares
            listadoImpar.push(listaRecortadaArray[i]); // añadimos al array auxiliar los impares
        }
    }
    listadoImpar.sort(function(a, b) {
        return a - b;
    });//ordenamos el array de menor a mayor
    return listadoImpar;//devolvemos el segundo array
}

//opciones de valdiacion de usuario
function administrarUsuario() {
    var usuarioIntroducido = document.getElementById("usuario").value;
    var contraseñaIntroducida = document.getElementById("contraseña").value;
    var contraseñaNueva = "";
    var mensaj=document.getElementById("mensaje");
    
    if (usuarioIntroducido === usuario.nombre && contraseñaIntroducida === usuario.contraseña) {
        document.getElementById("mensajes").innerHTML = "Datos correctos. ¿Deseas cambiar la contraseña?";
        contraseñaNueva = prompt("Introduce la nueva contraseña");
        usuario.cambiarContraseña(contraseñaNueva);
        usuario.actualizarHora();
    } else {
        document.getElementById("mensajes").innerHTML = "Datos incorrectos. ¿Quieres intentarlo de nuevo?";
    }
}


