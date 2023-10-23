<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $mail="prueba@gmail.com";
        if(filter_var($mail, FILTER_VALIDATE_EMAIL)) {
            echo("$mail es un correo válido");
          } else {
            echo("$mail no es un correo válido");
          }
    ?>
</body>
</html>