<?php
session_start();

function verificarSesion() {
    // Verificar si existe una sesión activa
    if(isset($_SESSION['username'])) {
        //verificar tipo de usuario
        if ($_SESSION['tipo']=='admin') {
            return true;//si el usuario es de tipo admin no iniciamos sesion
        } else {
            return false;//si no lo es iniciamos
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
    <title>Pagina de administracion</title>
</head>
<body>
    <h1>Esta es la página de administracion</h1>
    <ul>
        <li><a href="logout.php">Desconectar</a></li>
    </ul>
    <h2>Insertar registros de pilotos</h2>
    <?php
    //verificaciones del formulario de insercion de pilotos
        if (isset($_POST['subirPiloto'])) {
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $nombrePiloto=$_POST['piloto'];
                $biografíaPiloto=$_POST['biografia'];
                $rutaImagen= "./imagenes"+$_FILES['imagen']['name'];
                
            }
        }else{
    ?>
    <form action="./admin.php" method="post">
        <fieldset>
        <label for="piloto">Nombre del piloto:</label>
        <input type="text" id="piloto">
        <br><br>
        <label for="biografia">Biografia del piloto:</label><br>
        <textarea id="biografia" cols="30" rows="5"></textarea>
        <br><br>
        <label for="imagenPiloto">Imagen del piloto</label>
        <input type="file" id="imagenPiloto">
        <br><br>
        <input type="submit" value="Agregar Piloto" id="subirPiloto">
        </fieldset>
    </form>
    <h2>Insertar nuevos usuarios</h2>
    <?php
    //verificaciones del formulario de insercion de usuarios
        if (isset($_POST['agregarUsuario'])) {
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $usuario=$_POST['usuario'];
                $contraseña=$_POST['psswd'];
            }
    ?>
    <form action="./admin.php" method="post">
        <fieldset>
        <label for="usuario">Nombre de usuario:</label>
        <input type="text" id="usuario">
        <br><br>
        <label for="psswd">Contraseña del usuario:</label>
        <input type="text" id="psswd">
        <br><br>
        <input type="submit" value="Agregar usuario" id="agregarUsuario">
        </fieldset>
    </form>
<?php
        }
        }
}else{
    header("Location: error.php");
}
?>
</body>
</html>