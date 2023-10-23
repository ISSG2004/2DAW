<!DOCTYPE html>
<html lang="eS">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $cadena1="hoala";
    $cadena2="hola";
    if ( (substr($cadena1,-3)==substr($cadena2,-3))) {
        echo("Ambas cadenas riman");
    }elseif ((substr($cadena1,-2)==substr($cadena2,-2))) {
        echo("Las cadenas riman un poco ");
    
    }else {
        echo("Las cadenas no riman");
    }
    ?>    
</body>
</html>