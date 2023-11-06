<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $nombreUsuario="1opaaaaaaa";
        $nombreUsuarioValido;
        if ($nombreUsuario[0]=="1"||$nombreUsuario[0]=="2"||$nombreUsuario[0]=="3"||$nombreUsuario[0]=="4"||$nombreUsuario[0]=="5"||$nombreUsuario[0]=="6"||$nombreUsuario[0]=="7"||$nombreUsuario[0]=="8"||$nombreUsuario[0]=="9"||$nombreUsuario[0]=="0") {
           $nombreUsuarioValido= false;
        }else if (strlen($nombreUsuario)> 12||strlen($nombreUsuario)<8) {
            $nombreUsuarioValido= false;
        }else{
            $nombreUsuarioValido= true; 
        }   
        if ($nombreUsuarioValido==true){
            echo"Nombre de usuario válido";
        }else{
            echo "Nombre de usuario no válido";
        }
    ?>
</body>
</html>