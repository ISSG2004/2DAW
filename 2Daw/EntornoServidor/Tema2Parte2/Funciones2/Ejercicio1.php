<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $numero1=5;
        $numero2=10;
        function intercambiarNumeros($numero1,$numero2){
            $aux=$numero1;
            $numero1=$numero2;
            $numero2=$aux;
            
        }
        intercambiarNumeros($numero1,$numero2);
        echo $numero1
    ?>
</body>
</html>