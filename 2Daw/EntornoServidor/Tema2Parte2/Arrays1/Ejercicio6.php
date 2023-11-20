<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $paises = [
            "España" => "Madrid",
            "Francia" => "París",
            "Italia" => "Roma",
            "Alemania" => "Berlín",
            "Reino Unido" => "Londres",
            "Portugal" => "Lisboa",
        ];
        foreach ($paises as $pais => $capital) {
            echo "La capital de ". $pais ." es ". $capital ."<br>";
        }
        echo "<br>";
        echo "array ordenado en función de la primera letra del país <br><br>";
        ksort($paises);
        foreach ($paises as $pais => $capital) {
            echo "La capital de ". $pais ." es ". $capital ."<br>";
        }
        echo "array ordenado en función de la primera letra de su capital <br><br>";
        asort($paises);
        foreach ($paises as $pais => $capital) {
            echo "La capital de ". $pais ." es ". $capital ."<br>";
        }
    ?>
</body>
</html>