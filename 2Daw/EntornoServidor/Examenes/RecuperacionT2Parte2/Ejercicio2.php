<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        function crearArray($inicio,$fin){
            $listaNumeros=array();//array para almacenar los numeros
            $listaNumerosMostrar=array();//array auxiliar
            for ($i=$inicio; $i <= $fin ; $i++) { 
                array_push($listaNumeros,$i);
            }
            for ($i=0; $i <sizeof($listaNumeros) ; $i++) { //recorremos el array
                if ($listaNumeros[$i]%4==0) {//comprobamos que los que son multiplos de 4
                    $listaNumeros[$i]=0;//reemplazamos por 0 los que sean multiplos de 4
                }
            }
            $listaNumerosMostrar=array_unique($listaNumeros);//eliminamos todos los 0, ya que se van a repetir por los multiplos de 4
            sort($listaNumerosMostrar);//ordenamos el array para que los 0 estén al principio
            array_shift($listaNumerosMostrar);//quitamos la primera posicion del array
            end($listaNumerosMostrar);//recorremos el array con su puntero para que este no de warning. En esta linea se pone el puntero al final
            $contador=sizeof($listaNumerosMostrar)-1;//contador para llevar las posiciones
            echo "en la posicion ".sizeof($listaNumerosMostrar)." está el número ".end($listaNumerosMostrar)."<br>";
            foreach ($listaNumerosMostrar as $value) {
                echo "en la posicion ".$contador." está el número ".prev($listaNumerosMostrar)."<br> ";//vamos retrocediendo el puntero para que se muestren los numeros al contrario
                $contador--;//retrocedemos en uno el contador
            }
        }
        $inicio=2;
        $fin=20;
        crearArray($inicio,$fin);

    ?>
</body>
</html>