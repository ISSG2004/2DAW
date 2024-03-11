<?php
session_start();

function verificarSesion() {
    // Verificar si existe una sesión activa
    if(isset($_SESSION['username'])) {
        //verificar tipo de usuario
        if ($_SESSION['tipo']=='admin') {
            return true;//si el usuario es de tipo admin no iniciamos sesion
        } else {
            return false;//si no lo es iniciamos
        }
    } else {
        // Sesión no iniciada
        return false;
    }
}
if (verificarSesion()==true){
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina de administracion</title>
</head>
<body>
    <?php
        // Establecer la conexión con la base de datos (reemplaza con tus propios datos)
        $servername = "localhost";
        $username = "dwes";
        $password = "abc123.";
        $database = "pilotosF1";

        // Crear conexión
        $conn = new mysqli($servername, $username, $password, $database);

        // Verificar la conexión
        if ($conn->connect_error) {
            die("Error de conexión: " . $conn->connect_error);
        }

        // Verificar si se ha enviado el formulario de agregar piloto
        if(isset($_POST['subirPiloto'])) {
            // Recoger los datos del formulario
            $nombrePiloto = $_POST['piloto'];
            $biografiaPiloto = $_POST['biografia'];
            
            // Procesar la imagen
            $directorioImagenes = 'imagenes/';
            $nombreArchivo = $_FILES['imagen']['name'];
            $rutaTemporal = $_FILES['imagen']['tmp_name'];
            $rutaDestino = $directorioImagenes . $nombreArchivo;
            
            // Mover la imagen al directorio deseado
            if(move_uploaded_file($rutaTemporal, $rutaDestino)) {
                // Insertar los datos en la base de datos
                $sql = "INSERT INTO pilotos (nombre_piloto, biografia_piloto, ruta_imagen) VALUES (?, ?, ?)";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("sss", $nombrePiloto, $biografiaPiloto, $rutaDestino);
                
                if ($stmt->execute()) {
                    echo "Nuevo piloto registrado correctamente.";
                } else {
                    echo "Error al registrar el piloto: " . $stmt->error;
                }
                $stmt->close();
            } else {
                echo "Error al subir la imagen.";
            }
        }

        // Cerrar conexión
        $conn->close();
    ?>




    <?php
        // Establecer la conexión con la base de datos (reemplaza con tus propios datos)
        $servername = "localhost";
        $username = "dwes";
        $password = "abc123.";
        $database = "pilotosF1";

        // Crear conexión
        $conn = new mysqli($servername, $username, $password, $database);

        // Verificar la conexión
        if ($conn->connect_error) {
            die("Error de conexión: " . $conn->connect_error);
        }

        // Verificar si se ha enviado el formulario de agregar usuario
        if(isset($_POST['agregarUsuario'])) {
            // Recoger los datos del formulario y escaparlos para prevenir inyección SQL
            $nombreUsuario = $_POST['usuario'];
            $contrasenaUsuario = $_POST['psswd'];
            $tipoUsuario = $_POST['tipoUsuario'];

            // Validar que no haya campos vacíos
            if(empty($nombreUsuario) || empty($contrasenaUsuario) || empty($tipoUsuario)) {
                echo "Por favor, complete todos los campos.";
            } else {
                // Consulta SQL para insertar el usuario en la base de datos
                $sql = "INSERT INTO usuarios (nombre_usuario, contrasena, tipo) VALUES ('$nombreUsuario', '$contrasenaUsuario', '$tipoUsuario')";

                if ($conn->query($sql) === TRUE) {
                    echo "Usuario agregado correctamente.";
                } else {
                    echo "Error al agregar usuario: " . $conn->error;
                }
            }
        }

        // Cerrar conexión
        $conn->close();
    ?>
    <h1>Esta es la página de administracion</h1>
    <ul>
        <li><a href="logout.php">Desconectar</a></li>
    </ul>
    <h2>Insertar registros de pilotos</h2>
    <form action="./admin.php" method="post" enctype="multipart/form-data">
        <fieldset>
        <label for="piloto">Nombre del piloto:</label>
        <input type="text" id="piloto" name="piloto">
        <br><br>
        <label for="biografia">Biografia del piloto:</label><br>
        <textarea id="biografia" name="biografia" cols="30" rows="5"></textarea>
        <br><br>
        <label for="imagenPiloto">Imagen del piloto</label>
        <input type="file" id="imagenPiloto" name="imagen">
        <br><br>
        <input type="submit" value="Agregar Piloto" name="subirPiloto">
        </fieldset>
    </form>
    <h2>Insertar nuevos usuarios</h2>
    <form action="./admin.php" method="post">
        <fieldset>
        <label for="usuario">Nombre de usuario:</label>
        <input type="text" id="usuario" name="usuario">
        <br><br>
        <label for="tipoUsuario">Tipo de usuario:</label>
        <input type="radio" name="tipoUsuario" id="tipoUsuario" value="normal">Normal<input type="radio" name="tipoUsuario" id="tipoUsuario" value="admin">Admin
        <br><br>
        <label for="psswd">Contraseña del usuario:</label>
        <input type="password" id="psswd" name="psswd">
        <br><br>
        <input type="submit" value="Agregar usuario" name="agregarUsuario">
        </fieldset>
    </form>
    <h2>Todos los pilotos añadidos</h2>
    <?php
        // Establecer la conexión con la base de datos (reemplaza con tus propios datos)
        $servername = "localhost";
        $username = "dwes";
        $password = "abc123.";
        $database = "pilotosF1";

        // Crear conexión
        $conn = new mysqli($servername, $username, $password, $database);

        // Verificar la conexión
        if ($conn->connect_error) {
            die("Error de conexión: " . $conn->connect_error);
        }
        // Ejecutar la instrucción para deshabilitar la verificación de clave externa
        $sql_disable_fk_checks = "SET FOREIGN_KEY_CHECKS=0;";

        // Verificar si se ha enviado el formulario de borrar
        if(isset($_POST['borrar'])) {
            // Recoger el ID del piloto a borrar
            $idPiloto = $_POST['borrar'];
            
            // Consulta SQL para borrar el piloto
            $sql = "DELETE FROM  pilotos WHERE id = $idPiloto";
            
            // Ejecutar la consulta
            if ($conn->query($sql) === TRUE) {
                if ($conn->affected_rows > 0) {
                    echo "Piloto(s) borrado(s) correctamente.";
                } else {
                    echo "No se encontraron pilotos para borrar.";
                }
            } else {
                echo "Error al ejecutar la consulta: " . $conn->error;
            }            
        }

        // Consulta SQL para obtener todos los pilotos
        $sql = "SELECT * FROM pilotos";
        $resultado = $conn->query($sql);

        // Verificar si hay resultados
        if ($resultado->num_rows > 0) {
            // Mostrar los datos de cada fila
            while($fila = $resultado->fetch_assoc()) {
                echo "Nombre del Piloto: " . $fila["nombre_piloto"]. "<br><br>";
                echo "Biografía del Piloto: " . $fila["biografia_piloto"]. "<br><br>";
                echo '<img src="' . $fila["ruta_imagen"] . '" alt="Imagen del Piloto" width="200">'."<br><br>";
                // Agregar un formulario para borrar el registro actual
                echo '<form action="admin.php" method="post">';
                echo '<input type="hidden" name="borrar" value="' . $fila["id"] . '">';
                echo '<input type="submit" value="Borrar">';
                echo '</form>';
                echo "<hr>";
            }
        } else {
            echo "No se encontraron resultados.";
        }

        // Cerrar conexión
        $conn->close();
    ?>
    <h2>Todos los usuarios añadidos</h2>
    <?php
        // Establecer la conexión con la base de datos (reemplaza con tus propios datos)
        $servername = "localhost";
        $username = "dwes";
        $password = "abc123.";
        $database = "pilotosF1";
        // Crear conexión
        $conn = new mysqli($servername, $username, $password, $database);
        // Verificar la conexión
        if ($conn->connect_error) {
            die("Error de conexión: " . $conn->connect_error);
        }
        // Verificar si se ha enviado el formulario de borrar
        if(isset($_POST['borrar'])) {
            // Recoger el ID del usuario a borrar
            $idUsuario = $_POST['borrar'];
            
            // Consulta SQL para borrar el usuario
            $sql = "DELETE FROM usuarios WHERE id = $idUsuario";
            
            // Ejecutar la consulta
            if ($conn->query($sql) === TRUE) {
                if ($conn->affected_rows > 0) {
                    echo "Usuario(s) borrado(s) correctamente.";
                } else {
                    echo "No se encontraron usuarios para borrar.";
                }
            } else {
                echo "Error al ejecutar la consulta: " . $conn->error;
            }            
        }
        // Consulta SQL para obtener todos los usuarios
        $sql = "SELECT * FROM usuarios";
        $resultado = $conn->query($sql);
        // Verificar si hay resultados
        if ($resultado->num_rows > 0) {
            // Mostrar los datos de cada fila
            while($fila = $resultado->fetch_assoc()) {
                echo "Nombre del usuario: " . $fila["nombre_usuario"]. "<br><br>";
                echo "Contraseña: " . $fila["contrasena"]. "<br><br>";
                echo "Tipo de usuario: ".$fila["tipo"]."<br><br>";
                // Agregar un formulario para borrar el registro actual
                echo '<form action="admin.php" method="post">';
                echo '<input type="hidden" name="borrar" value="' . $fila["id"] . '">';
                echo '<input type="submit" value="Borrar">';
                echo '</form>';
                echo "<hr>";
            }
        } else {
            echo "No se encontraron resultados.";
        }
        // Cerrar conexión
        $conn->close();
    ?>


</body>
</html>
<?php
    }
    else{
        header('Location: ./error.php');
    }
?>

