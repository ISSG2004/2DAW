<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $llamadaBD= new mysqli("localhost","dwes","abc123.","inmobiliaria");
        #$llamadaBD->connect("localhost","dwes","abc123.","inmobiliaria");
        $Titulo=$llamadaBD->query('SELECT Titulo FROM NOTICIAS');
        
    ?>
</body>
</html>