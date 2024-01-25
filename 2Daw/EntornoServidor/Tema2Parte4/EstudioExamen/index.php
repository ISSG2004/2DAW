<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="procesar_formulario.php" method="post">
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre">
        <br><br>
        <label for="mail">correo electrónico</label>
        <input type="mail" name="mail">
        <br><br>
        <button type="submit" name="enviarDatos">Enviar Datos</button>
    </form>
</body>
</html>