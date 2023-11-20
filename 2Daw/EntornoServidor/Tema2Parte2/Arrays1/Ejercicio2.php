<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $alumnos=array("Juan","Paco","Gabriel","Manolo","Jose");
        $tresPrimeros=array_slice($alumnos,0,3);
        $dosUltimos=array_slice($alumnos,3,4);
        echo"<ul>";
        echo"<li>Tres primeros alumnos</li>";
        for ($i=0; $i <sizeof($tresPrimeros); $i++) { 
            echo"<li>".$tresPrimeros[$i]."</li>";
        }
        echo"</ul>";
        echo"<ul>";
        echo"<li>Dos Ultimos alumnos</li>";
        for ($i=0; $i <sizeof($dosUltimos); $i++) { 
            echo"<li>".$dosUltimos[$i]."</li>";
        }
        echo"</ul>";
    ?>
</body>
</html>