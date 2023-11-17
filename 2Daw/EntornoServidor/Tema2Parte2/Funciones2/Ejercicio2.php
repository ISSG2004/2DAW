<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        function media_aritmetica() {
        $numeros = func_get_args();
        $total_numeros = count($numeros);
        $suma = array_sum($numeros);
        $media = $suma / $total_numeros;
        echo "Los números son: ";
        foreach ($numeros as $numero) {
            echo $numero . " ";
        }
        echo "<br>";
        media_aritmetica(1,2,3);
        echo "La media aritmética es: " . $media;
    }
    ?>
</body>
</html>