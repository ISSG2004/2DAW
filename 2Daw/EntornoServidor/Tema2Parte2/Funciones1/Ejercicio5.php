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
        $numero2=11;
        function calcSemiSuma($numero1,$numero2){
            return (($numero1 + $numero2)/2);
        }
        echo "La semisuma de ".$numero1." y de ".$numero2." es ".calcSemiSuma($numero1,$numero2);
    ?>
</body>
</html>