<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cadena="Frase de ejemplo";
        echo("La ultima palabra de ".$cadena." es ".strrchr($cadena," "));
    ?>
</body>
</html>