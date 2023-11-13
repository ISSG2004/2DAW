function objeto(){
    var contraseña=document.getElementById("passwd");
    var usuario=document.getElementById("userName");
    const usuario={
        nombreUsuario: "1234",
        contraseña: "1234",
        verificarContraseña: function(contraseña,nombreUsuario){
            if (this.contraseña===contraseña&&this.nombreUsuario===nombreUsuario){
                return true;
                alert("Creedenciales correctas")
            }else{
                return false;
                alert("Creedenciales incorrectas")
            }
        }
    }
}