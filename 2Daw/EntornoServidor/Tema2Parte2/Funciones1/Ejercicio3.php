<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $dias=2;
        function diasASegundos($dias){
            return $dias*86400;
        }
        echo"Un ".$dias." tiene ".diasASegundos($dias)." segundos";
    ?>
</body>
</html>