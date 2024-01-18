<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $ficheroAlmacenarDatos=file("./datos.txt");
        $contenidoFichero="Los datos se guardaron correctamente:\n--------------------------------------------------------\n".$_REQUEST["nombre"]."\n".$_REQUEST["comentarios"]."\n--------------------------------------------------------";
        if (file_exists("./datos.txt")) {
            $abrirFichero=fopen($ficheroAlmacenarDatos,"a+");
            fwrite($abrirFichero,$contenidoFichero);
            fclose($abrirFichero);
        } else {
            touch("./datos.txt");
            $abrirFichero=fopen($ficheroAlmacenarDatos,"a+");
            fwrite($abrirFichero,$contenidoFichero);
            fclose($abrirFichero);
        }
        
        echo$contenidoFichero;
        echo"<a href'./datos.txt'>ver fichero</a>";
    ?>
</body>
</html>