<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $capital;
        $pais="Portugal";
        $habitantes;
        function mostrarContent($capital,$pais, $habitantes){
            if (empty($capital)==false) {
                $capital="Madrid";
            }
            if (empty($habitantes)==false) {
                $habitantes="muchos";
            }
            echo"".$capital."".$pais."".$habitantes;
        }
        mostrarContent($capital,$pais,$habitantes);
    ?>
</body>
</html>