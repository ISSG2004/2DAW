
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TRAVELMAS - Agencia de Viajes</title>
</head>
<body>
    <h1>TRAVELMAS - Agencia de Viajes</h1>

    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label for="destino">Destino:</label>
        <input type="text" name="destino" required><br>

        <label for="pais">País:</label>
        <input type="text" name="pais" required><br>

        <label for="duracion">Duración:</label>
        <input type="text" name="duracion" required><br>

        <label for="dias">Días Disponibles:</label>
        <input type="checkbox" name="dias[]" value="lunes"> Lunes
        <input type="checkbox" name="dias[]" value="martes"> Martes
        <input type="checkbox" name="dias[]" value="miércoles"> Miércoles
        <input type="checkbox" name="dias[]" value="jueves"> Jueves
        <input type="checkbox" name="dias[]" value="viernes"> Viernes
        <input type="checkbox" name="dias[]" value="sábado"> Sábado
        <input type="checkbox" name="dias[]" value="domingo"> Domingo<br>

        <input type="submit" value="Agregar Destino">
    </form>
    <?php
// Ruta del archivo que almacenará los destinos
$archivoDestinos = "viajes.txt";

// Función para mostrar la tabla de destinos
function mostrarDestinos($archivoDestinos) {
    echo "<table border='1'>
            <tr>
                <th>Destino</th>
                <th>País</th>
                <th>Duración</th>
                <th>Días Disponibles</th>
            </tr>";

    $destinos = file($archivoDestinos, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    foreach ($destinos as $destino) {
        $detalles = explode(":", $destino);
        echo "<tr>
                <td>{$detalles[0]}</td>
                <td>{$detalles[1]}</td>
                <td>{$detalles[2]}</td>
                <td>{$detalles[3]}</td>
            </tr>";
    }

    echo "</table>";
}

// Manejo del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar valores del formulario
    $destino = $_POST["destino"];
    $pais = $_POST["pais"];
    $duracion = $_POST["duracion"];
    $diasDisponibles = implode(",", $_POST["dias"]);

    // Crear una línea con los datos del destino
    $nuevoDestino = "$destino:$pais:$duracion:$diasDisponibles\n";

    // Abrir el archivo y añadir el nuevo destino
    file_put_contents($archivoDestinos, $nuevoDestino, FILE_APPEND | LOCK_EX);
}
?>

    <h2>Destinos Disponibles</h2>
    <?php mostrarDestinos($archivoDestinos); ?>
</body>
</html>
