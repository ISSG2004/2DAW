<?php
    session_start();
?>
<h1>En esta página no puedes entrar con el tipo de perfil que tienes</h1>
<?php
    if ($_SESSION['tipo']=='admin') {
        echo"<a href='admin.php'>Volver al inicio</a>"; 
    } else {
        echo"<a href='aplicacion.php'>Volver al inicio</a>"; 
    }
?>