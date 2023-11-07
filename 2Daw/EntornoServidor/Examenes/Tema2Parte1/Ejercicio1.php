<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        //4 variables
        //pagina diga que cadena es mayor 
        //Comparacion modo1: comparacion de cadenas
        //comparacion modo2: comparacion no case-sensitiva 
        //comparacion modo3: comparacion natural
        //comparacion modo4:comparacion de los n-primeros caracteres
        $cad1="Hola";
        $cad2= "Holo";
        $modo=1;
        $ncaracteres=4;
        switch ($modo) {
            case 1:
                if (strcmp($cad1, $cad2)<0) {
                    echo $cad1." es menor que ".$cad2;
                }else if(strcmp($cad1, $cad2)>0){
                    echo $cad1." es mayor que ".$cad2;
                }else {
                    echo"Las dos cadenas son iguales";
                }
                break;
            case 2:
                if (strcasecmp($cad1, $cad2)<0) {
                    echo $cad1." es menor que ".$cad2;
                }else if(strcasecmp($cad1, $cad2)>0){
                    echo $cad1." es mayor que ".$cad2;
                }else {
                    echo"Las dos cadenas son iguales";
                }
                break;
            case 3:
                if (strcmp($cad1, $cad2)<0) {
                    echo $cad1." es menor que ".$cad2;
                }else if(strcmp($cad1, $cad2)>0){
                    echo $cad1." es mayor que ".$cad2;
                }else {
                    echo"Las dos cadenas son iguales";
                }
                break;
            case 4:
                if(strncmp($cad1,$cad2, $ncaracteres) <0) {
                    echo $cad1." es menor que ".$cad2." en los ".$ncaracteres." caracteres";
                }else if(strncmp($cad1,$cad2, $ncaracteres) >0){
                    echo $cad1." es mayor que ".$cad2." en los ".$ncaracteres." caracteres";
                }else{
                    echo "Ambas cadenas son iguales en los ".$ncaracteres." caracteres";
                }

                break;
            default:
                echo"Modo no existente";
                break;
        }
    ?>
</body>
</html>