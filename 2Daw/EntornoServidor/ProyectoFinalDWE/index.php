<?php
session_start();

// Función para conectar a la base de datos
function conectarBD() {
    $host = "localhost";
    $usuario = "usu4";
    $contrasena = "usu4";
    $bd = "tarea4";

    $conexion = new mysqli($host, $usuario, $contrasena, $bd);

    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }

    return $conexion;
}

// Función para autenticar al usuario
function autenticarUsuario($usuario, $contrasena) {
    $conexion = conectarBD();
    
    // Escapar los valores para evitar inyección SQL
    $usuario = $conexion->real_escape_string($usuario);
    
    $consulta = "SELECT * FROM usuarios WHERE usuario = '$usuario'";
    $resultado = $conexion->query($consulta);
    
    if ($resultado->num_rows > 0) {
        $fila = $resultado->fetch_assoc();
        $pwd_hash = $fila['pwd'];
        
        // Verificar si la contraseña es correcta usando password_verify
        if (password_verify($contrasena, $pwd_hash)) {
            $_SESSION['usuario'] = $usuario;
            header("Location: aplicacion.php");
            exit();
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "Usuario no encontrado.";
    }

    $conexion->close();
}

// Verificar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(isset($_POST['invitado'])) {
        $_SESSION['usuario'] = 'Invitado';
        header("Location: informacion.php");
        exit();
    } else {
        $usuario = $_POST['usuario'];
        $contrasena = $_POST['contrasena'];
        autenticarUsuario($usuario, $contrasena);
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio de sesión</title>
</head>
<body>
    <h2>Iniciar sesión</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="usuario">Usuario:</label><br>
        <input type="text" id="usuario" name="usuario" required><br><br>
        <label for="contrasena">Contraseña:</label><br>
        <input type="password" id="contrasena" name="contrasena" required><br><br>
        <input type="submit" value="Iniciar sesión">
    </form>
    <br>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <input type="hidden" name="invitado" value="true">
        <input type="submit" value="Acceder como invitado">
    </form>
</body>
</html>
