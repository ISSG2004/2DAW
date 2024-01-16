<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <?php
            if (isset($_REQUEST['enviar'])){
                echo"<li>Texto en búsqueda: ".$_REQUEST["TxtBusq"]."</li>";
                echo"<li>Buscar en: ".$_REQUEST["DondeBuscar"]."</li>";
                echo"<li>Género : ".$_REQUEST["Genero"]."</li>";
                echo"[<a href='./Ejercicio3.php'>Realizar otra búsqueda</a>]";
            }else{
        ?>
    </ul>
    <h1>Formulario simple</h1>
    <h2>Búsqueda de canciones</h2>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
        <fieldset>
        <label for="TxtBusq">Texto a buscar</label>
        <input type="text" name="TxtBusq" >
        <br>
        <br>
        <label for="DondeBuscar">Buscar en:</label>
        <input type="radio" value="Titulos" name="DondeBuscar" checked><label for="DondeBuscar">Títulos de canción</label>
        <input type="radio" value="Album" name="DondeBuscar"><label for="Album">Nombre del álbum</label>
        <input type="radio" value="Ambos" name="DondeBuscar"><label for="Ambos">Ambos campos</label>
        <br>
        <br>
        <label for="Genero">Género musical:</label>
        <select name="Genero" id="Genero">
            <option value="todos">Todos</option>
            <option value="Acustica">Acústica</option>
            <option value="Banda Sonora">Banda sonora</option>
            <option value="Blues">Blues</option>
            <option value="Electronica">Electrónica</option>
            <option value="Folk">Folk</option>
            <option value="jazz">Jazz</option>
            <option value="NewAge">New age</option>
            <option value="Pop">Pop</option>
            <option value="Rock">Rock</option>
        </select>
        <br>
        <br>
        <button type="submit" name="enviar">Buscar</button>
        </fieldset>
    </form>
    <?php
        }
    ?>
</body>
</html>