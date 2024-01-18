<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $ficheroDatos = "datos.txt";
    $lineas = file($ficheroDatos);
    $fichero = fopen($ficheroDatos, "w+");

    foreach ($lineas as $linea) {
        echo "<p>" . $linea . "</p>";
    }

    fclose($fichero);
?>

</body>
</html>