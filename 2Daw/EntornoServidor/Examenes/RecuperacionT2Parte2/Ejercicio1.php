<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        function sumarValoresArrayRec($array) {
            if (empty($array)) {//caso base
                return 0;//devolvemos 0 
            }//caso recursivo
            return $array[0] + sumarValoresArrayRec(array_slice($array, 1));//realizamos la llamada recursiva
        }//consiste en coger la primera posicion del array, y vas cogiendo de una posición en una

        $array = array("a"=>1,"b"=>2);
        echo "Suma de todos los valores del array: " .sumarValoresArrayRec($array);
    ?>
</body>
</html>