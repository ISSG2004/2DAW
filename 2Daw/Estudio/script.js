var usuario={//creacion objeto usuario
    nombreUsuario:"alumno",
    contraseña:"bueno",
    hora:"",
    cambiarContraseña: function(nuevaContrtaseña) {
        this.contraseña=nuevaContrtaseña;
    },
    asignarHora : function(){
        this.hora=new Date();
    }
}
var ventana1; var ventana2;var ventana3; var ventana4;
function crearLimite(){
    let maximo=parseInt(document.getElementById("longitud").value);
    return maximo;
}
function generarLongitud(){
    let random=parseInt(document.getElementById("valores").value);
    return random;
}
//cerrar ventanas
function cerrarventana1(){
    ventana1.close();
}
function cerrarventana2(){
    ventana2.close();
}
function cerrarventana3(){
    ventana3.close();
}
function cerrarventana4(){
    ventana4.close();
}
//escuchadores de eventos para cerrar ventanas
cerrav1.addEventListener('click', cerrarventana1());
cerrarv2.addEventListener('click',cerrarventana2());
cerrarv3.addEventListener('click',cerrarventana3());
cerrarv4.addEventListener('click',cerrarventana4());
//funcionalidades de ventanas
function abrirVentana1(){
    ventana1=window.open('_ventanaForm.html','ventana1','height=300px,width=300px');
    ventana1=window.moveTo(0,0);
    ventana1.document.body.style.backgroundColor="lightgreen";
}
function validarUsuario(){//metodo para validar datos de usuario
    let usuarioIntroducido=document.getElementById("nombre").value;
    let contrasenaIntroducida=document.getElementById("contraseña").value;
    let nuevaContraseña=document.getElementById("NuevaContraseña").value;
    if (usuarioIntroducido==usuario.nombreUsuario && contrasenaIntroducida==usuario.contraseña){
        alert("contraseña cambiada")
        usuario.cambiarContraseña(nuevaContraseña);
    }else{
        alert("Datos incorrectos¿Quieres intentarlos de nuevo?")
    }
}
//cosas ventana2
function abrirVentana2() {
    ventana2=window.open('','ventana2','height=300px,width=300px');
    ventana2.moveTo(1900,0);
    ventana2.document.write("listado de numeros"+crearVector());
}
function generarNumeroAleatorio() {
    return parseInt(Math.random() * crearLimite());
}
function crearVector(){
    let vector=[];
    for (let i = 0; i < generarLongitud(); i++) {
        vector.push(parseInt(generarNumeroAleatorio()));
    }
    return vector;
}
//cosas ventana3
function abrirVentana3(){
    ventana3=window.open('','ventana3','height=300px,width=300px');
    ventana3.moveTo(1900,1900);
    ventana3.document.write("valores impares "+impares());
}
function impares() {
    let vector = crearVector(); // Llamar a la función una vez y almacenar el resultado
    let imparesArray = [];

    for (let i = 0; i < vector.length; i++) {
        if (vector[i] % 2 !== 0) {
            imparesArray.push(parseInt(vector[i]));
        }
    }

    imparesArray.sort(function (a, b) {
        return a - b;
    });

    return imparesArray;
}




