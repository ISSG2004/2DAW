<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $nombreUsuario=$_REQUEST["nombre"];
        $email=$_REQUEST["mail"];
        $ficheroDatos="./info.txt";
        if (empty($nombreUsuario) || empty($email)) {
            echo"No se han podido validar los datos porque hay uno o más campos vacíos; vuelva a atrás";
            echo"<br><a href='./index.php'>Volver al formulario</a>";
        }else{
            echo"Datos procesados correctamente";
            echo"<br><a href='./index.php'>Volver al formulario</a><br>";
            if (file_exists($ficheroDatos)) {
                touch($ficheroDatos);
                modificarFichero($ficheroDatos,$nombreUsuario,$email);
                leerFichero($ficheroDatos);
            } else {
                modificarFichero($ficheroDatos,$nombreUsuario,$email);
                leerFichero($ficheroDatos);
            }
            
        }
        function modificarFichero($ficheroDatos,$nombreUsuario,$email){
            $operaciones=fopen($ficheroDatos,"a+");
            $datosUsuario="nombre : ".$nombreUsuario." correo electrónico: ".$email."\n";
            fwrite($operaciones,$datosUsuario);
            fclose($operaciones);
        }
        function leerFichero($ficheroDatos){
            $ficheroRecorrer=file($ficheroDatos);
            foreach ($ficheroRecorrer as $linea){
                echo($linea);
            }
        }
    ?>
</body>
</html>