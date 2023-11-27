<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $listaNums= range(0,29);
        //recorrer desde el inicio
        reset($listaNums);//puntero se resete a la posicion 0
        echo reset($listaNums)." ";
        foreach ($listaNums as $value) {
            echo next($listaNums)." ";
        }
        echo"<br>";
        //recorrer desde el final
        end($listaNums);//puntero apunta al ultimo elemento del array
        echo end($listaNums)." ";
        foreach ($listaNums as $value) {
            echo prev($listaNums)." ";
        }
    ?>
</body>
</html>