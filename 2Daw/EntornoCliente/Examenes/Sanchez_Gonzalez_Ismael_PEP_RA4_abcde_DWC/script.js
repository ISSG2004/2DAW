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
    var listadoImpar=[];//creamos un segundo array para almacenar impares
    for (let i = 0; i < listaRecortada().length; i++) {
        if (listaRecortada()[i]%2!==0) {//condicion para sacar impares
            listadoImpar.push(listaRecortada()[i]);//añadimos al array auxiliar los impares
        }
    }
    listadoImpar.sort();//ordenamos el array de menor a mayor
    return listadoImpar;//devolvemos el segundo array
}

//opciones de valdiacion de usuario
function administrarUsuario(){
    var usuarioIntroducido=document.getElementById("usuario").value;//accedemos mediante ID al usuario
    var contraseñaIntroducida=document.getElementById("contraseña").value;//accedemos mediante ID a la contraseña
    var contraseñaNueva="";//variable para almacenar la nueva contraseña
    var usuario={//creamos el objeto usaurio
        usuario:"alumno",//declaracion nombre usuario
        contraseña:"bueno",//declaracion contraseña
        cambiarContraseña(nuevaContraseña)//metodo cambio contraseña
            {
                this.contraseña=nuevaContraseña;//devolvemos la nueva contraseña
            }   
        }
    if (usuarioIntroducido===usuario.usuario && contraseñaIntroducida===usuario.contraseña) {//verificamos que ambos datos esten correctos
        document.getElementById("mensajes").innerHTML="Datos correctos¿Deseas cambiar la contraseña?";//mostramos un mensaje 
        contraseñaNueva=prompt("Introduce la nueva contraseña");//pedimos la contraseña 
        usuario.cambiarContraseña(contraseñaNueva);//actualizamos por el metodo del objeto
    } else {
        document.getElementById("mensajes").innerHTML="Datos incorrectos¿Quieres intentarlo de nuevo?";//mostramos msj si no es correcta
    }
}

