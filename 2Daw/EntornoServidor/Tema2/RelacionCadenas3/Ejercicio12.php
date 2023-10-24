<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $dirIp="1.1.1.1";
        if (filter_var($dirIp,FILTER_VALIDATE_IP)) {
            echo "Es una direccion válida";
        } else {
            echo "No es una direccion válida";
        }
        
        
    ?>
</body>
</html>