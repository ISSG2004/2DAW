<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cadena="Bienvenidos al a aventura de aprender PHP en 30 horas";
        $mitad=strlen(($cadena)/2);
        echo("Bienvenidos al a aventura de aprender PHP en 30 horas"."<br>");
        echo("Punto 1: Mostrar la parte central de la frase");
        echo(substr($frase,$mitad));
        echo("Punto 2: Buscar la posicion de la palabra PHP: "."<h1>".strpos($cadena,"PHP")."</h1>"."<br>");
        echo("Punto 3: Reemplazar la palabra 'aventura' por <b>misión</b>:"."<br>");
        $cadenaMod=str_replace("aventura","<b>misión</b>",$cadena);
        echo($cadenaMod);
    ?>
</body>
</html>