<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $numero=5;
        function fibonacci($numero) {
            if ($numero<=2) {
                return $numero;
            }else{
                fibonacci($numero-1)+fibonacci($numero-2);

            }
        }
        echo fibonacci($numero);
    ?>
</body>
</html>