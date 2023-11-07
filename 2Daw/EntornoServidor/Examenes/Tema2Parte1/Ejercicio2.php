<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        //Formatear un valor en funcion del formato
        //formato1 decimal
        //formato2 hexadecimal minusculas
        //formato3 hexadecimañ mayusculas
        //formato4 octal
        //format5 exponencial
        //formato6 binario
        //formato distinto error
        $formato=7;
        $numero="12";
        switch ($formato) {
            case 1:
                echo"Representacion decimal de ".$numero.": ";
                echo sprintf("%d",$numero); 
                break;
            case 2:
                echo"Representacion hexadecimal minuscula de ".$numero.": ";
                echo sprintf("%x",$numero); 
                break;
            case 3:
                echo"Representacion hexadecimal mayuscula de ".$numero.": ";
                echo sprintf("%X",$numero); 
                break;
            case 4:
                echo"Representacion octal de ".$numero.": ";
                echo sprintf("%o",$numero);     
                break;
            case 5:
                echo"Representacion exponencial de ".$numero.": ";
                echo sprintf("%e",$numero);       
                break;
            case 6:
                echo"Representacion binaria de ".$numero.": ";
                echo sprintf("%b",$numero);        
                break;    
            default:
                echo"Formato incorrecto";
                break;
        }
    ?>
</body>
</html>