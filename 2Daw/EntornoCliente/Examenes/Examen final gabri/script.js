var regExpContrasena=/[0-9]{4}[A-HJ-NPR-Z]/; //expresion regular clave acceso
var regExpNombreYapellidos=/[0-9]/;//verificar si hay numeros
const boton = document.getElementById('botonIdioma');
let estado = true;//variable para controlar el estado del boton
let estadoSalir=true;//variable para controlar el estado del boton salir
//capturar los valores del label del formulario
const txtnombre=document.getElementById("txtNombre");
const txtApellidos=document.getElementById("txtApellidos");
const txtCodigoVerificacion=document.getElementById("txtCodVer");
const txtUsuario=document.getElementById("txtUsuario");
const txtContrasena=document.getElementById("txtContrasena");
boton.addEventListener('click', function() {//escuchador para cambiar info del boton
    estado = !estado;
    //cambiamos el contenido del boton y de los campos del formulario
    boton.textContent = estado ? 'Cambiar a inglés' : 'Switch to Spanish';
    document.getElementById("botonSalir").textContent = estado ? 'Salir' : 'Exit';
    txtnombre.textContent=estado ? 'Nombre: ' : 'Name: ';
    txtApellidos.textContent=estado ? 'Apellidos: ' : 'Last Name';
    txtCodigoVerificacion.textContent=estado ? 'Codigo de Verificacion: ' : 'Verification code: ';
    txtUsuario.textContent=estado ? 'Usuario: ' : 'Username: ';
    txtContrasena.textContent= estado ? 'Contraseña: ' : 'Password: ';
});

//funcion validar login
function iniciarSesion(){
    let contrasena=document.getElementById("contrasena").value;
    let nombre=document.getElementById("nombre").value;
    let apellidos=document.getElementById("apellidos").value;
    let usuario=document.getElementById("usuario").value;
    let codigoVerificacion=document.getElementById("codVer").value;
    let codigoSinLetra="";
    for (let i = 0; i < codigoVerificacion.length-1; i++) {//recorremos el codigo de verificacion para eliminar la letra
        codigoSinLetra+=codigoVerificacion[i];
        
    }
    if (!regExpContrasena.test(codigoVerificacion)) {//verificar el codigo de verificacion
        alert("el formato del codigo de verificacion no es válido")
    }else{
        if (!regExpNombreYapellidos.test(nombre) && !regExpNombreYapellidos.test(apellidos)) {//verificar nombre y apellidos que solo sean letras
            if (usuario.trim() =="Administrador") {//comprobamos el usuario
                if (contrasena==codigoSinLetra) {//comprobamos contraseña con el criterio q se nos exige
                    alert("Usuario y clave correctas");
                    cargarZonaAdmin();//cargamos los botones de la zona admin
                } else {//mensaje de error
                    alert("la contraseña es incorrecta")
                }//mensaje de error
            } else {
                alert("El nombre de usuario introducido es incorrecto")
            }
        }else{//mensaje de error
            alert("El nombre o el apellido incluyen algún caracter no permitido")
        }
    }
}

//cargar los botones de la zona de admin

function cargarZonaAdmin(){//mostrar botones de zona admin
    document.getElementById("botonIdioma").style.display="block";//mostrar elemento cambiar idioma
    document.getElementById("botonLogin").style.display="none";//ocultar elemento iniciar sesion
    document.getElementById("botonSalir").style.display="block";//mostrar elemento salir
    if (estadoSalir==true) {
         // Ocultar el boton después de 10 segundos
        setTimeout(function() {
            document.getElementById("botonIdioma").style.display="none";//ocultar elemento cambiar idioma
            document.getElementById("botonLogin").style.display="block";//mostrar elemento iniciar sesion
            document.getElementById("botonSalir").style.display="none";//ocultar elemento salir
        }, 10000); // 10000 milisegundos = 10 segundos
    }
}
document.getElementById("botonSalir").addEventListener("click",function(){
    estadoSalir=false;
    document.getElementById("botonIdioma").style.display="none";//ocultar elemento cambiar idioma
    document.getElementById("botonLogin").style.display="block";//mostrar elemento iniciar sesion
    document.getElementById("botonSalir").style.display="none";//ocultar elemento salir
});
