<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cadena=" ...Hola a todos... ";
        $cadena1=rtrim($cadena," ... ");
        $cadena2=ltrim($cadena," ... ");
        $cadena3=trim($cadena," ... ");
        echo "Cadena sin los puntos y el espacio al final: "."<h1>".$cadena1."</h1>";
        echo "Cadena sin los puntos y el espacio al principio: "."<h1>".$cadena2."</h1>";
        echo "Cadena sin los puntos y el espacio al final y al principio: "."<h1>".$cadena3."</h1>";
        
    ?>
</body>
</html>