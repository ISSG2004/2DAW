<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cadenaConA="hola";
        $cadenaSinA= str_replace("a","/", $cadenaConA);
        echo $cadenaSinA;
    ?>
</body>
</html>