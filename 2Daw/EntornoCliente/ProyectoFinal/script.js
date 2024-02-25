function validarDatos(){
    var usuario=document.getElementById("usuario").value;
    var contrasena=document.getElementById("contrasena").value;
    var profesor=document.getElementById("profesor").value;
    if(contrasena=="admin" && usuario=="admin"){
        alert("Usuario registrado correctamente")
        borrarTodoElDOM();
        cargarTablaCriterios();
    }else{
        alert("Algún dato de inicio de sesion ha sido incorrecto")
    }
}  
function borrarTodoElDOM() {
    var body = document.body;
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
}
function cargarTablaCriterios() {
    //cargo la tabla con los criterios que se encuentran en el archivo JSON
    document.getElementById("tablaCriterios").style.display="table";
}
