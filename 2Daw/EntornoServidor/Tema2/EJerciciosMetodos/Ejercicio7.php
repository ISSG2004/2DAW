<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cadena="Manolo";
        $cadena2="";
        for ($i=0; $i <strlen($cadena) ; $i++) { 
            $cadena2.=($cadena[$i].$cadena[$i]);
        }
        echo($cadena2);
    ?>
</body>
</html>