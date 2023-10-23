<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
        $cadena="b";
        if (preg_match('/[aeiouAEIOU]/', $cadena) === 1) {
            echo("La cadena contiene vocales");
        }else {
            echo("La cadena no contiene vocales");
        }
    ?>
</body>
</html>