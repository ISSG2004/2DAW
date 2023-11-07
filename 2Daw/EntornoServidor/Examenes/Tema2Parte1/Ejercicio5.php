<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        //Ejercicio que diga si un Nº de telefono esta bien formateado
        $numeroTelefono="654 65 65 65";
        $contador=0;
        $contador2=0;
        if ($numeroTelefono[0]==6 or$numeroTelefono[0]==7 or$numeroTelefono[0]== 8 or$numeroTelefono[0]== 9 ) {
            if (strlen($numeroTelefono)==12) {
                for ($i=0; $i <strlen($numeroTelefono) ; $i++) { 
                    if ($numeroTelefono[$i]==1 or$numeroTelefono[$i]==2 or$numeroTelefono[$i]==3 or$numeroTelefono[$i]==4 or$numeroTelefono[$i]==5 or$numeroTelefono[$i]==6 or$numeroTelefono[$i]==7 or$numeroTelefono[$i]== 8 or$numeroTelefono[$i]== 9 or $numeroTelefono[$i]==0) {
                        $contador++;
                    }
                }
                if ($contador==9 && $numeroTelefono[3]==" " && $numeroTelefono[6]==" " && $numeroTelefono[9]==" ") {
                   echo "Numero de telefono válido";
                } else {
                    echo "El numero de telefono no es valido";
                }
                
            } else {
               echo"El numero de telefono no es valido";     
            }           
        }else {
            echo"El numero de telefono no es válido";
        }
    ?>
</body>
</html>