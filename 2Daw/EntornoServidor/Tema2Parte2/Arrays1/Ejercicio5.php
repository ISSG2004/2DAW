<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $pila = array("cinco" => 5, "uno"=>1, "cuatro"=>4, "dos"=>2, "tres"=>3);
        echo "Usando asort:<ul>";
        asort($pila);
        foreach ($pila as $numero => $n) {
            echo "<li>$numero - $n</li>";
        }

        echo "</ul>Usando arsort:<ul>";
        arsort($pila);
        foreach ($pila as $numero => $n) {
            echo "<li>$numero - $n</li>";
        }

        echo "</ul>Usando ksort:<ul>";
        ksort($pila);
        foreach ($pila as $numero => $n) {
            echo "<li>$numero - $n</li>";
        }

        echo "</ul>Usando sort:<ul>";
        sort($pila);
        foreach ($pila as $numero => $n) {
            echo "<li>$numero - $n</li>";
        }

        echo "</ul>Usando rsort:<ul>";
        rsort($pila);
        foreach ($pila as $numero => $n) {
            echo "<li>$numero - $n</li>";
        }
        echo "</ul>";
    ?>
</body>
</html>