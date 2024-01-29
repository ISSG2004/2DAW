<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    if (isset($_REQUEST['enviar']) && !empty($_POST["nombre"]) && !empty($_POST["apellidos"]) && !empty($_POST["dni"]) && $_SERVER["REQUEST_METHOD"] == "POST" && ! empty($_FILES["foto"])) {//validamos que cuando se envían datos los campos obligatorios están rellenos
        echo"<h1>Nombre: </h1>".$_POST["nombre"]."<br>";
        echo"<h1>Apellidos: </h1>".$_POST["apellidos"]."<br>";
        echo"<h1>DNI: </h1>".$_POST["dni"]."<br>";
        echo"<h1>Sexo: </h1>".$_POST["sexo"]."<br>";
        $meritos=array($_POST["meritos"]);
        echo"<h1>Meritos: </h1>" ;
        echo"<ul>";
        if (empty($meritos)) {
            echo"campo vacio";
        } else {
            foreach ($meritos as $key ) {
                echo"<li>".$key."</li>";
            }
        }
        
        
        echo"</ul>";
        echo"<h1>País de residencia: </h1>".$_POST["nacionalidad"]."<br>";
        echo"<h1>Comentario: </h1>".$_POST["comentario"]."<br>";
        echo "<h1>Imagen</h1>";
        echo"<br>";
        echo"<a href='./formularioDefinitivo.php'>Volver al formulario</a>";
    } else {//mostrar el formulario siempre que de error
        
    
    ?>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data">
        <label for="nombre">Nombre</label>
        <img src="" alt="">
        <input type="text" id="nombre" name="nombre"><br><br>
        <?php
            if (isset($_REQUEST['enviar']) && empty($_POST["nombre"])) {
                echo"El nombre está vacío<br><br>";
            }
        ?>
        <label for="apellidos">apellidos</label>
        <input type="text" id="apellidos" name="apellidos"><br><br>
        <?php
            if (isset($_REQUEST['enviar']) && empty($_POST["apellidos"])) {
                echo"Los apellidos están vacíos<br><br>";
            } 
        ?>
        <label for="dni">DNI</label>
        <input type="text" name="dni" id="dni">
        <br><br>
        <?php
            if (isset($_REQUEST['enviar']) && empty($_POST["dni"])) {
                echo"El DNI está vacío<br><br>";
            }  
        ?>
        <label for="sexo">Sexo</label>
        <input type="radio" value="hombre" name="sexo" checked><label for="hombre">Hombre</label>
        <input type="radio" value="mujer" name="sexo"><label for="mujer">Mujer</label>
        <br><br>
        <label for="meritos">Méritos</label><br>
        <input type="checkbox" name="meritos" value="carnet"><label for="carnet">Permiso de conducir tipo B</label>
        <input type="checkbox" name="meritos" value="pensionista"><label for="pensionista">Pensionista</label>
        <input type="checkbox" name="meritos" value="experiencia"><label for="experiencia">20 años (o más) de experiencia</label>
        <input type="checkbox" name="meritos" value="discapacidad"><label for="discapacidad">Discapacidad superior al 33%</label>
        <br><br>
        <label for="nacionalidad">País de residencia</label>
        <select name="nacionalidad">
            <option value="España">España</option>
            <option value="Francia">Francia</option>
            <option value="Portugal">Portugal</option>
        </select>
        <br><br>
        <label for="comentario">Escribe un comentario</label><br>
        <textarea name="comentario" cols="30" rows="10" placeholder="Escribe aquí un comentario"></textarea>
        <br><br>
        <label for="foto">Sube aquí tu imagen</label>
        <input type="file" name="foto">
        <?php
        //si se ha dado a enviar subimos la imagen al directorio especificado
            if (isset($_POST["enviar"]) && !empty($_FILES["foto"])) {
                $nombreImagen = $_FILES["foto"]["name"];
                move_uploaded_file($_FILES["foto"]["tmp_name"], "./img/" . $nombreImagen);//llevamos la imagen al fichero /img
            }
        ?>
        <br><br>
        <button type="submit" name="enviar">Enviar información</button>
    </form>
    <?php
    contador();
    } 
    function contador(){
        // Nombre del archivo
        $archivo = 'visitas.txt';
        // Abrir el archivo en modo lectura/escritura
        $fp = fopen( $archivo, 'r+');
        // Leer del archivo la cantidad deseada de bytes y guardarlos en una variable
        $contador = fread( $fp, 8);
        // Escribir en pantalla
        echo "Esta es la visita número: " .  $contador;
        // Incrementar el contador en una unidad
        $contador++;
        // Colocar el puntero al principio del archivo
        rewind( $fp); 
        // Escribir el nuevo valor del contador en el archivo
        fwrite( $fp,  $contador);
        // Cerrar el archivo
        fclose( $fp);
    }
    ?>
</body>
</html>




