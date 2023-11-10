<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $numero=2;
        function numeroAlCubo($numero) {
            return $numero*$numero*$numero;
        }
        function numeroAlCuadrado($numero) {
            return $numero*$numero;
        }
        echo $numero." elevado al cuadrado es ".numeroAlCuadrado($numero)."<br>";
        echo $numero." elevado al cubo es ".numeroAlCubo($numero);
    ?>
</body>
</html>