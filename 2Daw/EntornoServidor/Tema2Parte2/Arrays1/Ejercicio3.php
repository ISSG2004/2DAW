<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $coloresFuertes=array("Rojo"=>"FF000","Verde"=>"00FF00","Azul"=>"0000FF");
        $coloresSuaves=array("Rosa"=>"FE9ABC","Amarillo"=>"FDF189","Malva"=>"BC8F8F");
        foreach ($coloresFuertes as $key => $value) {
            echo"Color:".$key." Codigo de color:" .$value."<br>";
        }
        echo"<br>";
        foreach ($coloresSuaves as $key => $value) {
            echo"Color:".$key." Codigo de color:" .$value."<br>";
        }
    ?>
</body>
</html>