<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $array= array("blue","red","green","blue","blue");
        print_r(array_keys($array,"blue"));
    ?>
</body>
</html>