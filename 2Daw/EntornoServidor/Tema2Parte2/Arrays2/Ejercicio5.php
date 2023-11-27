<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $numeros=range(0,99);
// Crear el array con números del 0 al 99
$numeros = range(0, 99);

// Comprobar si el valor 96 está en el array
if (in_array(96, $numeros)) {
    echo "96 está en el array\n";
} else {
    echo "96 no está en el array\n";
}

// Comprobar si el valor 98 está en el array
if (in_array(98, $numeros)) {
    echo "98 está en el array\n";
} else {
    echo "98 no está en el array\n";
}

// Comprobar si el valor 90 está en el array
if (in_array(90, $numeros)) {
    echo "90 está en el array\n";
} else {
    echo "90 no está en el array\n";
}
    ?>
</body>
</html>