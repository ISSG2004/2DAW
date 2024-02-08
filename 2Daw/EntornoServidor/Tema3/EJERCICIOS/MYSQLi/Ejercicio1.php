<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $llamadaBD=new mysqli("localhost","dwes","abc123.","inmobiliaria");
        // Verificar si hay errores en la conexión
        if ($llamadaBD->connect_error) {
            die("Error en la conexión: " . $llamadaBD->connect_error);
        }
        $consulta=mysqli_query($llamadaBD,"SELECT * FROM noticias");
        while ($registro = mysqli_fetch_array($consulta)) {
            echo $registro['titulo'] . "<br>";
        }
        mysqli_close($llamadaBD);
    ?>
</body>
</html>