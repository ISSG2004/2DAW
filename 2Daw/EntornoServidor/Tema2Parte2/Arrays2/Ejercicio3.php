<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $array= array("blue","red","green","blue","blue");
        $array2=array();
        reset($array);
        reset($array2);
        foreach($array as $valor){
            if(strpos(current($array),"re")!=false){
                array_push($array2,current($array));
                next($array2);
            }
            next($array);
        }
        reset($array2);
        foreach($array2 as $valor2) {
            echo $valor2." ";
        }
    ?>
</body>
</html>