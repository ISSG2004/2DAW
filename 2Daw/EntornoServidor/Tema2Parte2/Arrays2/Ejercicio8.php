<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $base = array("naranja", "plátano", "manzana", "frambuesa");
        $reemplazos = array(0 => "piña", 4 => "cereza");
        $reemplazos2 = array(0 => "uva");
        $arreglo=array_replace($base,$reemplazos,$reemplazos2);
        foreach ($arreglo as $key ) {
            echo $key ."<br>";
        }
    ?>
</body>
</html>