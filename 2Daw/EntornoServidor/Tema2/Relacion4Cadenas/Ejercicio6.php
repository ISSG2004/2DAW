<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cadena="Bienvenido a nuestro cine. Ha efectuado usted la decisión correcta.";
        $nombreCliente="Pablo González";
        $parte2Substr=substr($cadena,strpos($cadena,".")+ 1);
        echo substr($cadena,0,strpos($cadena,"."))." ".$nombreCliente."".$parte2Substr;
    ?>
</body>
</html>