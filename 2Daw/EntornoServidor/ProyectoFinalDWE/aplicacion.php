<?php
include 'funciones.inc';
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['usuario'])) {
    header("Location: index.php");
    exit();
}

// Función para obtener el nombre de usuario y la hora de conexión
obtenerDatosUsuario();
list($usuario, $horaConexion) = obtenerDatosUsuario();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicación</title>
</head>
<body>
    <h2>Bienvenido, <?php echo $usuario; ?>!</h2>
    <p>Conectado desde: <?php echo $horaConexion; ?></p>
    <h3>Menú:</h3>
    <ul>
        <li><a href="logout.php">Desconectar</a></li>
    </ul>
</body>
</html>
