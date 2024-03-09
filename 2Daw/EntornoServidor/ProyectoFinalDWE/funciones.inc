<?php
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
//funcion para obtener datos usuario
function obtenerDatosUsuario() {
    $usuario = $_SESSION['usuario'];
    $horaConexion = date('H:i:s');
    return array($usuario, $horaConexion);
}
?>
