<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $cad = "Hola que tal";
    $cadenaSeparada = explode(" ", $cad);
    echo "La palabra que está en la segunda posición es: ".$cadenaSeparada[1];  
    ?>
</body>
</html>