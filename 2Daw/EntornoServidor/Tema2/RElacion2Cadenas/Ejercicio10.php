<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        print htmlspecialchars('<a href="/arbol/prueba.php" class="prueba" onmouseover="status=\'hola\'; return trae;">pruebade\enlace</a>');
    ?>
</body>
</html>