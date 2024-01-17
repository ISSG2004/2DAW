<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Formualrio simple. Resultados del formulario</h1>
    <p>Estos son los datos introducidos</p>
    <ul>
    <?php
        if (isset($_REQUEST['buscar'])) {
            echo"<li>Texto en búsqueda: ".$_REQUEST["TxtBusq"]."</li>";
            echo"<li>Buscar en: ".$_REQUEST["DondeBuscar"]."</li>";
            echo"<li>Género : ".$_REQUEST["Genero"]."</li>";
        }
        
    ?>
    </ul>
    <a href="Ejercicio1.php">[Nueva búsqueda]</a>
</body>
</html>