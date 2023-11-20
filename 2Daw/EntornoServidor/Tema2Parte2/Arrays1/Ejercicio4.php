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
        if (in_array("FF88CC",$coloresFuertes)||in_array("FF88CC",$coloresSuaves)) {
            echo"FF88CC aparece en un aray de los dos";
        }
        else{
            echo"FF88CC no aparece en ningun array";
        }
        echo"<br>";
        if (in_array("FF0000",$coloresFuertes)||in_array("FF0000",$coloresSuaves)) {
            echo"FF0000 aparece en un aray de los dos";
        }
        else{
            echo"FF0000 no aparece en ningun array";
        }
    ?>
</body>
</html>