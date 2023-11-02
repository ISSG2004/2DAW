<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cadena1="Esto es una cadena un poco más larga";
        echo"la letra c se muestra por primera vez en ".strpos($cadena1,"c")."<br>";
        echo"la palabra poco se muestra en ".strpos($cadena1,"poco");
    ?>
</body>
</html>