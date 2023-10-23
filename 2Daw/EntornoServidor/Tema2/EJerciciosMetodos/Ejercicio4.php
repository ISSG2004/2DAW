<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cadena="hola hola mundo";
        $arrPalabras = explode(" ",$cadena);
        echo($arrPalabras[0]);
        echo($arrPalabras[1]);
    ?>
</body>
</html>