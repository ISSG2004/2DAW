<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cadena="Texto para probar";
        echo"Cadena sin negrita "."<br>".$cadena."<br>";
        function convertirANegrita($cadena){
            echo"Cadena en negrita";
            echo"<h1>".$cadena."</h1>";
        }
        echo convertirANegrita($cadena);
    ?>
</body>
</html>