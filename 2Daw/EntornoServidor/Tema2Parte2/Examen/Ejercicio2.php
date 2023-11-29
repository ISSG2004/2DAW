<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $array=array("a"=>2,"b"=>6,"c"=>9,"z"=>11,"q"=>1,"w"=>0,"x"=>20);
        $criterioOrdenar=5;
        function menu($array,$criterioOrdenar){
            if (empty($criterioOrdenar)) {
                menorMayor($array);
            } else {
                switch ($criterioOrdenar) {
                    case 1:
                        menorMayor($array);
                        break;
                    case 2:
                        mayorMenor($array);
                        break;
                    case 3:
                        menorMayorClave($array);
                        break;
                    case 4:
                        mayorMenorClave($array);
                        break;
                    default:
                        echo"parametro incorrecto";
                        break;
                }
            }
            
        }
        function menorMayor($array){
            sort($array);
            echo "array ordenado de menor a mayor : ";
            foreach ($array as $value) {
                echo $value." ";
            }
        }
        function menorMayorClave($array){
            ksort($array);
            echo "array ordenado de menor a mayor por clave : ";
            foreach ($array as $key => $value) {
                echo "clave: ".$key." valor: " .$value." ";
            }
        }
        function mayorMenor($array){
            rsort($array);
            echo "array ordenado de mayor a menor : ";
            foreach ($array as $value) {
                echo $value." ";
            }
        }
        function mayorMenorClave($array){
            krsort($array);
            echo "array ordenado de mayor a menor por clave : ";
            foreach ($array as $key => $value) {
                echo "clave: ".$key." valor: " .$value." ";
            }
        }
        menu($array,$criterioOrdenar);
    ?>
</body>
</html>