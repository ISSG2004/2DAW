<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página gestión</title>
</head>
<body>
    <?php
        function verificarSesion() {
            // Verificar si existe una sesión activa
            if(isset($_SESSION['username'])) {
                //verificar tipo de usuario
                if ($_SESSION['tipo']=='normal') {
                    return false;//si el usuario es de tipo normal no iniciamos sesion
                } else {
                    return true;//si no lo es iniciamos
                }
            } else {
                // Sesión no iniciada
                return false;
            }
        }
    ?>
    <h1>Esta es la página admin</h1>
    <ul>
        <li><a href="logout.php">Desconectar</a></li>
    </ul>
</body>
</html>