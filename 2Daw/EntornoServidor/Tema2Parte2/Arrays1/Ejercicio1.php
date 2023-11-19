<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $diasSemana=array("Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo");
        for($i= 0; $i<count($diasSemana); $i++){
            echo"".$diasSemana[$i]."<br>";
        }    
        foreach($diasSemana as $diasSemana){
            echo "".$diasSemana[0]."<br>";
        }
        ?>
</body>
</html>