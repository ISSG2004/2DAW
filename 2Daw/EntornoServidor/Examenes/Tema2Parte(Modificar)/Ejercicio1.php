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
        $altura = 5;
        
        function tablaArbol($altura){
            $arbol=array();
            echo "<table border='1'>";
            for ($i = 0; $i < $altura; $i++) {
                echo "<tr>";
                for ($j = 0; $j < 2; $j++) {
                    echo "<td>";
                    echo $arbol[$i];
                    echo "</td>";
                }
                echo "</tr>";
            }
            echo "</table>";
        }
        tablaArbol($altura);
    ?>
</body>
</html>


