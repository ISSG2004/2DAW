<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php  
        if (isset($_REQUEST["insertar"])) {
            echo"<h1>Resultado de la inserción de nueva noticia</h1>";
            if (empty($_REQUEST["titulo"]) || empty($_REQUEST["texto"])) {
                echo "No se ha podido realizar la inserción debido a los siguientes errores:<ul>";
                if (empty($_REQUEST["titulo"])) {
                    echo"<li>Se requiere el título de la noticia</li>";
                }
                if (empty($_REQUEST["texto"])) {
                    echo"<li>Se requiere el texto de la noticia</li>";
                }
                echo"</ul>";
                echo"[<a href='./Ejercicio4.php'>Volver</a>]";  
            }else{
                $nombreImagen= $_FILES["imagen"]["name"];
                move_uploaded_file($_FILES["imagen"]["tmp_name"], "./Ficheros/".$nombreImagen."/");
                echo "La noticia ha sido recibida correctamente: <ul><li>Titulo: " . $_REQUEST["titulo"] . "</li><li>Texto: " . $_REQUEST["texto"] . "</li><li>Categoria: " . $_REQUEST["categoria"] . "</li><li>Imagen: <a href='./Ficheros/" . $nombreImagen . "' target='_blank'>" . $_FILES["imagen"]["name"] . "</a></li></ul>";
            }
        }else{
    ?>
    <h1>Subida de ficheros</h1>
    <h2>Insertar nueva noticia</h2>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data">
        <fieldset>
            <label for="titulo">Título: *</label>
            <input type="text" name="titulo">
            <br>
            <br>
            <label for="texto">Texto: *</label>
            <textarea name="texto" cols="25" rows="10" value="texto informativo"></textarea>
            <br>
            <br>
            <label for="categoria">Categoría: </label>
            <select name="categoria">
                <option value="promociones">promociones</option>
            </select>
            <br>
            <br>
            <label for="imagen">Imagen: </label>
            <input type="file" name="imagen">
            <br>
            <br>
            <button type="submit" name="insertar">Insertar noticia</button>
        </fieldset>
    </form>
    <?php
    }
    ?>

</body>
</html>