<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        //creación del fichero 
        if (file_exists("./visitas.txt")==false) {
            touch("./visitas.txt");
            escribirFichero();
        }
        //abrimos el fichero en modo lectura/escritura( 'a+' )
        $archivo = fopen('visitas.txt', "a+");
        //leer 8 bytes del fichero
        $contador=fread($archivo,8);
        //escribimo el contenido de contador
        echo "Hay ".$contador." visitas<br>";
        //incrementamos en 1 el contador
        $contador=$contador+1;
        //colocamos el puntero al inicio del fichero
        rewind($archivo);
        //escribimos el nuevo valor del contador en el fichero
        fwrite($archivo,$contador);
        //cerramos el archivo
        fclose($archivo);
        echo $contador;
        function escribirFichero(){//metodo para escribir el 0 en el fichero creado
            $archivo = fopen('visitas.txt', 'w');
            fwrite($archivo,"0");
            fclose($archivo);
        }
    ?>
</body>
</html>