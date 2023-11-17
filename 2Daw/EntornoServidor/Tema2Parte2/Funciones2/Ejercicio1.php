<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $numero1=5;
        $numero2=10;
        function intercambiar_numeros($numero1, $numero2) {
            list($numero1,  $numero2) = array( $numero2, $numero1);
            echo "El primer número es: " . $numero1 . "<br>";
            echo "El segundo número es: " .  $numero2 . "<br>";
            return array($numero1,  $numero2);
        }
        
    ?>
</body>
</html>