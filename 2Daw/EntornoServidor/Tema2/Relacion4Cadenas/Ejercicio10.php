<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
       $cadena="Mano";
       $numVocales=0;
       for ($i=0; $i <strlen($cadena) ; $i++) { 
           if ($cadena[$i]=="A"||$cadena[$i]=="a"||$cadena[$i]=="E"||$cadena[$i]=="e"||$cadena[$i]=="o"||$cadena[$i]=="O"||$cadena[$i]=="i"||$cadena[$i]=="I") {
               $numVocales=$numVocales+1;
           }
       }
       echo"La cadena tiene ".$numVocales." vocales";
    ?>
</body>
</html>