<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $directorioARecorrer=scandir(__DIR__);//creamos una variable para almacenar el directorio en el que se encuentra este fichero
        //mostrar contenido del directorio
        foreach ($directorioARecorrer as $contenido){
            //mostrar la fecha de la ultima mod. de cada elemento
            //mostrar el tamaño de cada fichero
            if (is_file($contenido)) {
                echo "<p>" . $contenido . " su tamaño es de ". filesize($contenido) ." bytes su última modificación fue el ". formatearFecha($contenido) ."</p>";
            } else {
                echo "<p>" . $contenido . "</p>";
            }
        }
        function formatearFecha($contenido){//formateamos la fecha
            return date("d/m/Y H:i",filemtime($contenido));
        }
    ?>
</body>
</html>