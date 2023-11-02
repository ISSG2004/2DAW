<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cadena1="Esto es una cadena un poco más larga";
        echo"El caracter 1 es ".substr($cadena1,0,1)."<br>";
        echo"El caracter 2 es ".substr($cadena1,2,1)."<br>";
        $ultimoCaracter=strlen($cadena1)-1;
        echo"El último caracter es ".substr($cadena1,$ultimoCaracter,1);
    ?>
</body>
</html>