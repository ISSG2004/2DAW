
<?php
include 'funciones.inc';
// Verificar si se ha enviado el formulario para establecer las preferencias de color
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['color_fondo'])) {
        // Establecer una cookie con el color de fondo seleccionado
        $color_fondo = $_POST['color_fondo'];
        setcookie('color_fondo', $color_fondo, time() + (86400 * 30), "/"); // Cookie válida por 30 días
    } elseif (isset($_POST['restablecer'])) {
        // Eliminar la cookie de color de fondo para restablecer las preferencias
        setcookie('color_fondo', '', time() - 3600, "/");
    }
}

// Obtener el color de fondo actual de la cookie (o el valor por defecto si no está establecida)
$color_fondo_actual = isset($_COOKIE['color_fondo']) ? $_COOKIE['color_fondo'] : 'blanco';
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preferencias</title>
</head>
<body style="background-color: <?php echo $color_fondo_actual; ?>;">
    <h2>Preferencias</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="color_fondo">Seleccione un color de fondo:</label>
        <select name="color_fondo" id="color_fondo">
            <option value="blanco" <?php if ($color_fondo_actual == 'blanco') echo 'selected'; ?>>Blanco</option>
            <option value="azul" <?php if ($color_fondo_actual == 'negro') echo 'selected'; ?>>Negro</option>
        </select>
        <input type="submit" value="Guardar preferencias">
    </form>
    <br>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <input type="hidden" name="restablecer" value="true">
        <input type="submit" value="Restablecer preferencias">
    </form>
    <br>
    <a href="aplicacion.php">Volver a la aplicación</a>
</body>
</html>
