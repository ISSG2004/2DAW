<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    if (isset($_REQUEST["enviar"])) {
        $nombre = isset($_REQUEST['nombre']) ? $_REQUEST['nombre'] : '';
        $comentarios = isset($_REQUEST['comentarios']) ? $_REQUEST['comentarios'] : '';

        $ficheroAlmacenarDatos = "./datos.txt";
        $contenidoFichero = "\n--------------------------------------------------------\n$nombre\n$comentarios\n--------------------------------------------------------";

        if (file_exists($ficheroAlmacenarDatos)) {
            $abrirFichero = fopen($ficheroAlmacenarDatos, 'a+');
            fwrite($abrirFichero, $contenidoFichero);
            fclose($abrirFichero);
        } else {
            touch($ficheroAlmacenarDatos);
            $abrirFichero = fopen($ficheroAlmacenarDatos, "a+");
            fwrite($abrirFichero, $contenidoFichero);
            fclose($abrirFichero);
        }

        echo "\n--------------------------------------------------------\n$nombre\n$comentarios\n--------------------------------------------------------";
        echo "<a href='./Ejercicio4_mostrarDatos.php'>ver fichero</a>";
        }
?>

</body>
</html>