<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $arrayNumeros = array();
        $contadorRepetidos=-1;
        for ($i= 0; $i < 10; $i++ ) {
            $arrayNumeros[$i] = rand(1,10);
        }
        for ($i= 0; $i < 10; $i++ ) {
            if ($arrayNumeros[2]==$arrayNumeros[$i]) {
                $contadorRepetidos++;
            }
        }
        echo"El numero de la posicion 2 se repite ".$contadorRepetidos." veces";
    ?>
</body>
</html>