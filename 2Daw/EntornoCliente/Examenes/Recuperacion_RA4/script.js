
var Usuario = {
    nombre: "",
    contraseña: "",
    Usuario:function(nombre,contraseña){
        this.nombre=nombre;
        this.contraseña=contraseña;
    },
    borrarContraseña:function(){//metodo para borrar la contraseña actual
        this.contraseña="";
    }
};


//instanciamos el objeto
var usuarioCreado;
//creamos ventanas
var ventana1,ventana2,ventana3;
//variable global para el vector
var vectorEjercicio4=crearVector();
//mostrar lista
function mostrarLista(){
    document.getElementById("valores").innerHTML=vectorEjercicio4;
}
//valores lista
//valor lista1
function extraerLista1(){
    var valorLista1=parseInt(document.getElementById("lista1").value);
    return valorLista1;
}
//valor lista2
function extraerLista2(){
    var valorLista2=parseInt(document.getElementById("lista2").value);
    return valorLista2;
}

//funcionalidad ventana1

function aVentana1(){
    ventana1=window.open("_formUsuario.html","","height=300px,width=300px");
    ventana1.moveTo(0,0);
    
}

function verificarDatos() {
    var usuarioIntroducido = document.getElementById("usuario").value;
    var contraseñaIntroducida = parseInt(document.getElementById("contraseña").value);
    var contraseñaRepetida = parseInt(document.getElementById("contraseñaRepetida").value);

    if (isNaN(contraseñaIntroducida) || isNaN(contraseñaRepetida)) {
        document.getElementById("errorContraseña1").innerHTML = "Las contraseñas deben ser números";
    } else if (contraseñaRepetida !== contraseñaIntroducida) {
        document.getElementById("errorContraseña1").innerHTML = "Las contraseñas introducidas son distintas";
    } else {
        if (usuarioIntroducido.length >= 6 || contraseñaIntroducida < 10000) {
            document.getElementById("errorContraseña1").innerHTML = "Algun dato de usuario es incorrecto";
        } else {
            document.getElementById("errorContraseña1").innerHTML = "";
            document.getElementById("aviso").innerHTML = "Usuario creado correctamente";
            // Aquí puedes hacer lo que necesites con el nuevo usuario
            usuarioCreado = new Usuario(usuarioIntroducido, contraseñaIntroducida);
        }
    }
}



//cerrar ventana1
function cerrarV1(){
    ventana1.close();
}
cerrarVentana1.addEventListener('click', cerrarV1);
//funcionalidad ventana2
function aVentana2(){
    ventana2=window.open("_ventana2.html","","height=300px,width=300px");
    ventana2.moveTo(1900,0);
    ventana2.document.bgColor = 'blue';
    setTimeout(function() {//asignar un cierre cuando pase x tiempo
    ventana2.close();
    }, 5000);//modificamos el tiempo en el que queremos que se cierre
    
}
//mostrar datos usuario
document.getElementById("usuarioV2").innerHTML=Usuario.nombre;
document.getElementById("contraseñav2").innerHTML=Usuario.contraseña;
function borrar(){//borramos contraseña
    Usuario.borrarContraseña();
}
//cerrar ventana2
function cerrarV2(){
    ventana2.close();
}
cerrarVentana2.addEventListener('click', cerrarV2);
//funcionalidad ventana3
function aVentana3(){
    ventana3=window.open("","","height=300px,width=300px");
    ventana3.moveTo(800,1900);
    ventana3.document.bgColor = 'pink';
    ventana3.document.write("<p id='cronometro'></p>"+"numeros pares de la lista:"+pares());
}
//crear vector
function crearVector(){
    var lista=[];
    for (let i = 0; i < extraerLista1(); i++) {
        lista.push(parseInt(Math.random()*extraerLista2()));
    }
    return lista;
}
//seleccionar solo los pares
function pares(){
    var listaPares=[];
    for (let i = 0; i < vectorEjercicio4.length; i++) {
        if (vectorEjercicio4[i]%2==0) {
            listaPares.push(parseInt(vectorEjercicio4[i]));
        }
    }
    return listaPares;
}
//cuenta atrás
var reloj;

function inicio() {

reloj=setInterval(procesar,1000);


}

function procesar() {

var nro=extraerLista1();

nro--;

document.getElementById('cronometro').innerHTML=nro;

}



//cerrar ventana3
function cerrarV3(){
    ventana3.close();
}

cerrarVentana3.addEventListener('click', cerrarV3);

