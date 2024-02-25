<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=100, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
        $llamadaBD = new mysqli("localhost", "instituto", "instituto", "Instituto");
        if (isset($_POST["enviar"])) {
            if ($llamadaBD->connect_errno == null) {
                echo "<h1> Conexión correcta </h1>";
                switch($_POST["curso"]){
                    case "1":
                        switch ($_POST["letra"]) {
                            case 'A':
                                $consulta = mysqli_query($llamadaBD, "SELECT * FROM Alumnos WHERE Curso='1' AND Letra='A' ORDER BY Apellidos ASC");
                                echo "<table>";
                                echo "<tr>";
                                echo "<th>Numero expediente</th>";
                                echo "<th>Nombre</th>";
                                echo "<th>Apellidos</th>";
                                echo "<th>Fecha nacimiento</th>";
                                echo "<th>Curso</th>";
                                echo "<th>Letra</th>";
                                echo "</tr>";
                                while ($registro = mysqli_fetch_array($consulta)) {
                                    echo "<tr>";
                                    echo "<td>" . $registro["N_expdte"] . "</td><td>" . $registro["Nombre"] . "</td><td>" . $registro["Apellidos"] . "</td><td>" . fechaACAdena($registro["Fecha_nac"]) . "</td><td>" . $registro["Curso"] . "</td><td>" . $registro["Letra"] . "</td>";
                                    echo "</tr>";
                                }
                                echo "</table>";
                                break;
                            case 'B':
                                $consulta = mysqli_query($llamadaBD, "SELECT * FROM Alumnos WHERE Curso='1' AND Letra='B' ORDER BY Apellidos ASC");
                                echo "<table>";
                                echo "<tr>";
                                echo "<th>Numero expediente</th>";
                                echo "<th>Nombre</th>";
                                echo "<th>Apellidos</th>";
                                echo "<th>Fecha nacimiento</th>";
                                echo "<th>Curso</th>";
                                echo "<th>Letra</th>";
                                echo "</tr>";
                                while ($registro = mysqli_fetch_array($consulta)) {
                                    echo "<tr>";
                                    echo "<td>" . $registro["N_expdte"] . "</td><td>" . $registro["Nombre"] . "</td><td>" . $registro["Apellidos"] . "</td><td>" . fechaACAdena($registro["Fecha_nac"]) . "</td><td>" . $registro["Curso"] . "</td><td>" . $registro["Letra"] . "</td>";
                                    echo "</tr>";
                                }
                                echo "</table>";
                            
                                break;
                            default:
                                # code...
                                break;
                        }
                        break;
                    case "2":
                        switch ($_POST["letra"]) {
                            case 'A':
                                $consulta = mysqli_query($llamadaBD, "SELECT * FROM Alumnos WHERE Curso='2' AND Letra='A' ORDER BY Apellidos ASC");
                                echo "<table>";
                                echo "<tr>";
                                echo "<th>Numero expediente</th>";
                                echo "<th>Nombre</th>";
                                echo "<th>Apellidos</th>";
                                echo "<th>Fecha nacimiento</th>";
                                echo "<th>Curso</th>";
                                echo "<th>Letra</th>";
                                echo "</tr>";
                                while ($registro = mysqli_fetch_array($consulta)) {
                                    echo "<tr>";
                                    echo "<td>" . $registro["N_expdte"] . "</td><td>" . $registro["Nombre"] . "</td><td>" . $registro["Apellidos"] . "</td><td>" . fechaACAdena($registro["Fecha_nac"]) . "</td><td>" . $registro["Curso"] . "</td><td>" . $registro["Letra"] . "</td>";
                                    echo "</tr>";
                                }
                                echo "</table>";
                            
                                break;
                            case 'B':
                                $consulta = mysqli_query($llamadaBD, "SELECT * FROM Alumnos WHERE Curso='1' AND Letra='B' ORDER BY Apellidos ASC");
                                echo "<table>";
                                echo "<tr>";
                                echo "<th>Numero expediente</th>";
                                echo "<th>Nombre</th>";
                                echo "<th>Apellidos</th>";
                                echo "<th>Fecha nacimiento</th>";
                                echo "<th>Curso</th>";
                                echo "<th>Letra</th>";
                                echo "</tr>";
                                while ($registro = mysqli_fetch_array($consulta)) {
                                    echo "<tr>";
                                    echo "<td>" . $registro["N_expdte"] . "</td><td>" . $registro["Nombre"] . "</td><td>" . $registro["Apellidos"] . "</td><td>" . fechaACAdena($registro["Fecha_nac"]) . "</td><td>" . $registro["Curso"] . "</td><td>" . $registro["Letra"] . "</td>";
                                    echo "</tr>";
                                }
                                echo "</table>";
                            
                                break;
                            default:
                                echo"error";
                                break;
                            }
                        break;
                        
                }
        }
                //$consulta = mysqli_query($llamadaBD, "SELECT * FROM Alumnos  ORDER BY Apellidos ASC");
            function fechaACAdena($fecha)
            {//metodo para trabajar con fechas como string y en formato d/m/aaaa
                $fechaConvertida = date("j/n/Y", strtotime($fecha));
                return ($fechaConvertida);
            }
        } else {
    ?>
    <form action="./Ejercicio2.php" method="post" enctype="multipart/form-data">
        <label for="curso">Curso:</label>
        <select name="curso" id="curso">
            <option value="1">1</option>
            <option value="2">2</option>
        </select>
        <label for="letra">Letra:</label>
        <select name="letra" id="letra">
            <option value="A">A</option>
            <option value="B">B</option>
        </select>
        <input type="submit" value="Filtrar " id="enviar" name="enviar">
    </form>
    <?php
        if ($llamadaBD->connect_errno == null) {
            echo "<h1> Conexión correcta </h1>";
            $consulta = mysqli_query($llamadaBD, "SELECT * FROM Alumnos ORDER BY Apellidos ASC");
            echo "<table>";
            echo "<tr>";
            echo "<th>Numero expediente</th>";
            echo "<th>Nombre</th>";
            echo "<th>Apellidos</th>";
            echo "<th>Fecha nacimiento</th>";
            echo "<th>Curso</th>";
            echo "<th>Letra</th>";
            echo "</tr>";
            while ($registro = mysqli_fetch_array($consulta)) {
                echo "<tr>";
                echo "<td>" . $registro["N_expdte"] . "</td><td>" . $registro["Nombre"] . "</td><td>" . $registro["Apellidos"] . "</td><td>" . fechaACAdena($registro["Fecha_nac"]) . "</td><td>" . $registro["Curso"] . "</td><td>" . $registro["Letra"] . "</td>";
                echo "</tr>";
            }
            echo "</table>";
        } else {
            echo "<h1>Error en la conexion</h1>";
        }
        function fechaACAdena($fecha)
        {//metodo para trabajar con fechas como string y en formato d/m/aaaa
            $fechaConvertida = date("j/n/Y", strtotime($fecha));
            return ($fechaConvertida);
        }
        mysqli_close($llamadaBD);
    }
    ?>
    <?php
        $consulta2 = mysqli_query($llamadaBD, "SELECT * FROM Alumnos WHERE Curso='A' ORDER BY Apellidos ASC");
    ?>
</body>

</html>