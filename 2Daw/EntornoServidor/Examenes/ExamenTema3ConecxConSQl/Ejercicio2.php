<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=100, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
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
    $llamadaBD = new mysqli("localhost", "instituto", "instituto", "Instituto");
    // Verificar si hay errores en la conexión
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
    mysqli_close($llamadaBD);
    function fechaACAdena($fecha)
    {//metodo para trabajar con fechas como string y en formato d/m/aaaa
        $fechaConvertida = date("j/n/Y", strtotime($fecha));
        return ($fechaConvertida);
    }
    ?>
    <?php
        $consulta2 = mysqli_query($llamadaBD, "SELECT * FROM Alumnos WHERE Curso='A' ORDER BY Apellidos ASC");
    ?>
</body>

</html>