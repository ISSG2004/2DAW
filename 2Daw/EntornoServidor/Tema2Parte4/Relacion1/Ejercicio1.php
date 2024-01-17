<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$contenidoWeb = "";
$ficheroLeido = file("./WebParaOperar.php");
$ficheroEscribir = "./visitas.txt";

// Abre el archivo en modo "a" para agregar contenido al final
$archivo = fopen($ficheroEscribir, "a");

if ($archivo) {
    foreach ($ficheroLeido as $linea) {
        fwrite($archivo, $linea . "\n");
    }
    
    // Cierra el archivo después de escribir todas las líneas
    fclose($archivo);
} else {
    // Manejar el error si no se puede abrir el archivo
    echo "Error al abrir el archivo para escritura.";
}
?>

</body>
</html>