<?php
session_start();

function verificarSesion() {
    // Verificar si existe una sesión activa
    if(isset($_SESSION['username'])) {
        //verificar tipo de usuario
        if ($_SESSION['tipo']=='admin') {
            return false;//si el usuario es de tipo admin no iniciamos sesion
        } else {
            return true;//si no lo es iniciamos
        }
    } else {
        // Sesión no iniciada
        return false;
    }
}
if (verificarSesion()==true){
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina aplicacion</title>
</head>
<body>
    <h1>Esta es la página de usuarios</h1>
    <ul>
        <li><a href="logout.php">Desconectar</a></li>
    </ul>

<?php
}else{
    header("Location: error.php");
}
?>
</body>
</html>
