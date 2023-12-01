<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    </style>
</head>
<body>
<?php
//Abajo en el body se encuentra la llamada de la función
    function plantarArbol($altura)
    {
        $arbol = array();
        for ($i = $altura; $i > 0; $i--) {
            $fila = array();
            //Parte izquierda de la nieve
            for ($j = 1; $j < $i; $j++) {
                array_push($fila, '*');
            }
            //Parte izquierda y central del árbol
            for ($j = $altura - $i; $j >= 0; $j--) {
                array_push($fila, '\\');
            }
            //Parte derecha del árbol
            for ($j = $altura - $i; $j > 0; $j--) {
                array_push($fila, '\\');
            }
            //Parte derecha de la nieve
            for ($j = 1; $j < $i; $j++) {
                array_push($fila, '*');
            }
            array_push($arbol, $fila);
        }
        dibujarArbol($arbol);
    }

    function dibujarArbol($arbol)
    {
        echo "<table class='margin: 0 auto;'>";
        foreach ($arbol as $fila) {
            echo "<tr>";
            foreach ($fila as $columna) {
                switch ($columna) {
                    case '*':
                        echo "<td style='background-color: #00FFFF; color: white; width: 10px; text-align: center;'>$columna</td>";
                        break;

                    case '\\':
                        echo "<td style='background-color: #00FFFF; color: green; width: 10px; text-align: center;'>$columna</td>";
                        break;
                }
            }
            echo "</tr>";
        }
        echo "</table>";
    }
    plantarArbol(13);
?>

</body>
</body>
</html>


