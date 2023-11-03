<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $capital="";
        $pais="Portugal";
        $habitantes="";
        function mostrarContent($capital,$pais, $habitantes){
            if (isset($capital)==true) {
                $capital="Madrid";
            }
            if (isset($habitantes)==true) {
                $habitantes="muchos";
            }
            echo"La capital de "." $pais "." es ".$capital." y tiene ".$habitantes." habitantes";
        }
        mostrarContent($capital,$pais,$habitantes);
    ?>
</body>
</html>