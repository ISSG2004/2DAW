<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cadena1="La bala mata la vaca";
        $cadena2="El oso osó asir a la osa";
        echo (("La bala mata la vaca tiene las siguientes repeticiones de la 'A'").substr_count($cadena1,"a"));
        echo (("El oso osó asir a la osa tiene las siguientes repeticiones de la 'A'").substr_count($cadena2,"a"));

    ?>
</body>
</html>