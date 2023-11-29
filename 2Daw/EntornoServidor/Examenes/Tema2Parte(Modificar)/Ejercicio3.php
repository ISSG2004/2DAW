<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $cadena="Hola amigo, que tal";
        $posicionABorrar=3;
        function borrarPalabra($cadena,$posicionABorrar){
            $arrayPalabras= explode(" ",$cadena);
                if ($posicionABorrar<0 or $posicionABorrar>=sizeof($arrayPalabras)) {
                    echo"El valor introducido a borrar no existe";
                }else{
                    unset($arrayPalabras[$posicionABorrar]);
                    echo "La cadena eliminando la posición ".$posicionABorrar." es: ";
                    foreach ($arrayPalabras as $value) {
                        echo $value." ";
                    }
                }
        }
        borrarPalabra($cadena,$posicionABorrar)
    ?>
</body>
</html>