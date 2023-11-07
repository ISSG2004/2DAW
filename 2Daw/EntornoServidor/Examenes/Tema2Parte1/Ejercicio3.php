<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        //Separar email en dominio y nombreUsuario
        $email="example@gmail.com";
        $nombreUsuario;
        $dominio;
        $nombreUsuario=substr($email,0,strpos($email,"@"));
        $dominio=substr($email,strpos($email,"@"));
        echo"El mail completo es ".$email."<br>";
        echo"El nombre de usuario de mail es ".$nombreUsuario."<br>";
        echo"El dominio del mail es ".$dominio;
    ?>
</body>
</html>