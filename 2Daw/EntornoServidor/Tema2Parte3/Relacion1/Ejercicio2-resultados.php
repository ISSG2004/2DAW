<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Datos del formulario 2</h1>
    <ul>
        <?php
            echo"<li>Texto introducido: ".$_REQUEST["textoBuscar"]."</li>";
            echo"<li>Sexo introducido: ".$_REQUEST["Sexo"]."</li>";
            echo"<li>Extras: ".$_REQUEST["Extras"]."</li>";
            echo"<li>Lo veremos en el ejercicio4</li>";
            echo"<li>contraseña: ".$_REQUEST["password"]."</li>";
            echo"<li>Color: ".$_REQUEST["color"]."</li>";
            $idiomas = $_REQUEST["idioma"];
            $idiomasEscogidos = "";
            foreach ($idiomas as $idioma) {
                echo "<li>Idiomas: ".$idioma."</li>";
                $idiomasEscogidos .= $idioma . "; ";
            }
            echo"<li>comentario: ".$_REQUEST["comentario"]."</li>";
            echo"<li>El campo file lo veremos en el ejercicio 4</li>";
        ?>
    </ul>
</body>
</html>