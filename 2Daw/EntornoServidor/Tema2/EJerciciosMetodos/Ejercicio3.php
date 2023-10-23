<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $nombreUsuario="manolo69";
        if ((strlen($nombreUsuario)>=3 or strlen($nombreUsuario)<=20)) {
            if (strpos($nombreUsuario,"+")||strpos($nombreUsuario,"*")||strpos($nombreUsuario,"@")||strpos($nombreUsuario,"&")) {
                echo("Cadena no valida");
            } else {
                echo("Cadena valida");
            }
        }else {
            echo("Cadena no valida");
        }
    ?>
</body>
</html>