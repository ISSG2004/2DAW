<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        td{padding: 5px;}
    </style>
</head>
<body>
<?php

    function generarTriangulo($altura)
    {
        $triangulo = array();

        // Generar la parte superior del triángulo
        for ($i = 1; $i <= $altura; $i++) {
            $espacios = str_repeat(' ', ($altura - $i) + ($altura - 1));
            $izquierda = str_repeat('*', $i);
            $derecha = str_repeat('*', $i - 1);
            $linea = $espacios . $izquierda . '/' . $derecha . $espacios;
            $triangulo[] = $linea;
        }

        return $triangulo;
    }

    // Especificar la altura del triángulo
    $alturaTriangulo = 5;

    // Generar el triángulo y almacenar las líneas en un array
    $arrayTriangulo = generarTriangulo($alturaTriangulo);

    // Imprimir el contenido del array
    foreach ($arrayTriangulo as $linea) {
        echo $linea . "<br>";
    }
?>

</body>
</html>


