<?php
session_start();

function verificarSesion() {
    // Verificar si existe una sesión activa
    if(isset($_SESSION['username'])) {
        //verificar tipo de usuario
        if ($_SESSION['tipo']=='admin') {
            return false;//si el usuario es de tipo admin no iniciamos sesion
        } else {
            return true;//si no lo es iniciamos
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
    <title>Pagina aplicacion</title>
</head>
<body>
    <h1>Esta es la página de usuarios</h1>
    <ul>
        <li><a href="logout.php">Desconectar</a></li>
    </ul>
    <!--Crear para añadir a favoritos pilotos(Es el sustituto al carrito)-->
    <!--Recorrer la tabla pilotos para mostrar todos los datos-->
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
                echo '<input type="hidden" name="id" value="' . $fila["id"] . '">';
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
<?php
}else{
    header("Location: error.php");
}
?>
</html>
