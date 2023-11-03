<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $tituloPagina="Ejercicio4";
        function escribirEncabezado($tituloPagina){
            $encabezado="<html><head>t<title>$tituloPagina</title></head>";
            echo $encabezado;
        }
        escribirEncabezado($tituloPagina);
    ?>
</body>
</html>