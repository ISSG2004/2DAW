<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $correo="example@email.com";
        $nombreUsuario=substr($correo,0,strpos($correo,"@"));
        $dominio=strstr($correo,"@");
        echo("El nombre de usuario es ".$nombreUsuario."<br>");
        echo("El dominio es ".$dominio);
    ?>
</body>
</html>