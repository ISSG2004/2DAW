<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
       
       $cadena1="hola 9";
       $cadena2= "hola 10";
       $subCadena1=substr($cadena1,0,5);
       $subCadena2= substr($cadena2,0,5);
       if (strcmp($subCadena1,$subCadena2)==0) {#comparacion 5 primeros caracteres
            echo"Las cadenas son iguales";
       }elseif (strcmp($subCadena1,$subCadena2)>0) { 
            echo "Los 5 primeros caracteres de ".$cadena1." son mayores a lo de ".$cadena2; 
        }else{
            echo "Los 5 primeros caracteres de ".$cadena2." son mayores a lo de ".$cadena1; 
        }
        if (strcmp($cadena1,$cadena2)==0) {#comparacion natural
           echo"Las cadenas son iguales";
      }elseif (strcmp($cadena1,$cadena2)>0) { 
           echo "<br>".$cadena1." es mayor que ".$cadena2; 
       }else{
           echo $cadena2." es mayor que ".$cadena1; 
       }
    ?>
</body>
</html>