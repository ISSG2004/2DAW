<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cadena="Bienvenido a nuestro cine. Ha efectuado usted la decisión correcta.";
        $cadenaA=substr($cadena,strpos($cadena,".")+1,strlen($cadena)-1);
        echo $cadenaA."<br>";
        $cadenaB=substr($cadena,strpos($cadena,"usted"));
        echo $cadenaB."<br>";
        $cadenaC=substr($cadena,0,strpos($cadena,"ect"));
        echo $cadenaC."<br>";
        $cadenaD=substr($cadena,0,strpos($cadena,"ecta"));
        echo $cadenaD."<br>";
        $cadenaE=substr($cadena,strpos($cadena,"ine"),strpos($cadena,"cine"));
        echo $cadenaE."<br>";
    ?>
</body>
</html>