<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Elementos de entrada</h1>
    <h2>Elementos de tipo INPUT</h2>
    <form action="Ejercicio2-resultados.php" method="post">
        <h3>TEXT</h3>
        <label for="textoBuscar">Introduza la cadena a buscar: </label>
        <input type="text" name="textoBuscar" value="valor por defecto">
        <hr>
        <h3>RADIO</h3>
        <label for="Sexo">Sexo:</label>
        <label for="Mujer">Mujer</label>
        <input type="radio" name="Sexo" value="mujer" checked>
        <label for="Hombre">Hombre</label>
        <input type="radio" name="Sexo" value="hombre">
        <hr>
        <h3>CHECKBOX</h3>
        <label for="Extras">Extras:</label>
        <input type="checkbox" name="Extras" value="Garaje" checked>
        <label for="Garaje">Garaje</label>
        <input type="checkbox" name="Extras" value="Piscina">
        <label for="Piscina">Piscina</label>
        <input type="checkbox" name="Extras" value="Jardin">
        <label for="Jardin">Jardín</label>
        <hr>
        <h3>FILE</h3>
        <label for="fichero">Fichero:</label>
        <input type="file" name="fichero" value="fichero">
        <hr>
        <h3>HIDDEN</h3>
        <hr>
        <h3>PASSWORD</h3>
        <label for="password">Contraseña: </label>
        <input type="password" name="password">
        <hr>
        <h3>Elemento SELECT</h3>
        <h4>SELECT SIMPLE</h4>
        <label for="color">Color: </label>
        <select name="color" value="color">
            <option value="rojo">Rojo</option>
        </select>
        <hr>
        <h4>SELECT MÚLTIPLE</h4>
        <label for="idioma">Idiomas:</label>
        <select multiple size="3" name="idioma[]">
            <option value="ingles">Inglés</option>
            <option value="frances">Francés</option>
            <option value="aleman">Aleman</option>
        </select>
        <hr>
        <h3>Elemento TEXTAREA</h3>
        <label for="comentario">Comentario: </label>
        <textarea name="comentario" cols="40" rows="10">Este libro me parece...</textarea>
        <hr>
        <button type="submit">enviar datos</button>
        <button type="reset">borrar datos</button>
    </form>
</body>
</html>