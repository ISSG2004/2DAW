<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cadena="vamos al o’Brian";
        addslashes($cadena);
        $cadena1=stripslashes($cadena);
        echo $cadena;
    ?>
</body>
</html>