<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
         $cadenaConA="hola";
         $cadenaSinA= str_replace("a","/", $cadenaConA);
         echo "La cadena sin letra a: ".$cadenaSinA;
        $cadenaConA=str_replace("/","a",$cademaSinA);
        echo "La cadena original es ".$cadenaConA;
    ?>
</body>
</html>