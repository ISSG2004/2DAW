<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cadena="Esta cadena tiene muchas letras";
        echo("Esta cadena tiene muchas letras<br><br>");
        echo("La primera ocurrencia de la letra 'a' es en la posicion "."<h1>".strpos($cadena,"a")."</h1>"."<br><br>");
        echo("La primera ocurrencia de la letra es 'm' en la posicion "."<h1>".strpos($cadena,"m")."</h1>"."<br><br>");
        echo("La primera ocurrencia de la cadena 'tiene' es en la posicion "."<h1>".strpos($cadena,"tiene")."</h1>"."<br><br>");
        echo("La primera ocurrencia desde el final de la letra es en la posicion "."<h1>".strrpos($cadena,"a")."</h1>"."<br><br>");
        echo("La cadena partiendo desde la palabra 'cadena' es "."<h1>".strstr($cadena,"cadena")."</h1>"."<br><br>");
        echo("La cadena partiendo desde la posicion 12 es "."<h1>".substr($cadena,12)."</h1>"."<br><br>");
        echo("La cadena partiendo desde la posicion 18 y con una longitud maxima de 6 caracteres es "."<h1>".substr($cadena,18,6)."</h1>"."<br><br>");
        echo("Los 6 últimos de la cadena son "."<h1>".substr($cadena, -6)."</h1>"."<br><br>");
        echo("La cadena desde la posición 26, contando desde atrás, 6 caracteres es "."<h1>".substr($cadena, -26,6)."</h1>"."<br><br>");
        echo("La cadena empezando en el carácter 4 y terminando en el 7 desde atrás "."<h1>".substr($cadena,4,-7)."</h1>");
    ?>
</body>
</html>