<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
        $cadena="Texto dE EjEmplO";
        $cadenaReemplazada=str_ireplace(['a','e','i','o','u'],['A','E','I','O','U'],$cadena);
        echo $cadenaReemplazada;
    ?>
</body>
</html>