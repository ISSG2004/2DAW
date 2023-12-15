<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        function esPrimo($num) {//metodo para verificar si es primo
            if ($num <= 1) {//si es 0 o 1 devolvemos false, ya que estos no se consideran primos
                return false;
            }
            for ($i = 2; $i < $num; $i++)//si es un numero igual o mayor a 2 comprobamos si este se puede dividir entre todos los que van desde 2 hasta si mismo
                if ($num % $i === 0) 
                    return false;//si se podido dividir entre algumo devolvemos false valorando este como no primo 
            return true;//si no se puede dividir entre nada devolvemos true ya que este es primo
        }     
        function primos($num){
            $listaNumeros=array();//declaramos el array con todos los números
            $listaPrimos=array();//declaramos donde almacenaremos los números primos
            for ($i=0; $i <= $num ; $i++) { //rellenamos todo el array de numeros con true
                $listaNumeros[$i]=true;
            }
            for ($i=2; $i < sizeof($listaNumeros) ; $i++) {//recorremos el array que almacena los numeros 
                if (!esPrimo($i)){//mediante el indice del elemento valoramos si es primo o no
                    $listaNumeros[$i]=false;//si no es primo ponemos false en esta posicion
                }else{//si es primo calculamos todos sus multiplos para asignarle false a estos
                    for ($j=$listaNumeros[$i]; $j <sizeof($listaNumeros); $j++) { 
                        if ($j % $listaNumeros[$i]==0) {
                            $listaNumeros[$j]=false;
                        }
                    }
                }
            }
            for ($i=2; $i <sizeof($listaNumeros) ; $i++) { //recorremos el array de numeros
                if ($listaNumeros[$i]==1) {//validamos que la posicion tenga un true 
                    array_push($listaPrimos,$i);//si es verdadero añadimos el indice de esta posicion al array de numeros primos
                }
            }
            echo "<h1>Listado de numeros primos desde 0 hasta ".$num ."</h1><ul>";
            foreach ($listaPrimos as $value) {//recorremos el array de primos para mostrar los primos
                echo "<li>".$value."</li>";
            }
            echo "</ul>";
        }
        $numero=23;
        primos($numero);//llamada al método
    ?>
</body>
</html>