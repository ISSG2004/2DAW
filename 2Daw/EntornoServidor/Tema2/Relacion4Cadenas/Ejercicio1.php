<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $nom="Ismael";
        $apell1="Sanchez";
        $apell2="Gonzalez";
        $edad=19;
        echo"Así se muestra el caso a"."<br>"."$nom $apell1 $apell2 $edad"."<br>";
        echo"Así se muestra el caso b"."<br>".$nom.$apell1.$apell2.$edad."<br>";
        echo"Así se muestra el caso c"."<br>"."$nom <br> $apell1 <br> $apell2 <br> $edad"."<br>";
        echo"Así se muestra el caso d"."<br>".$nom."<br>".$apell1."<br>".$apell2."<br>".$edad."<br>";
    ?>  
</body>
</html>