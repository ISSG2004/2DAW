
CREATE DATABASE IF NOT EXISTS `pilotosF1` DEFAULT CHARACTER SET utf8 COLLATE
utf8_spanish_ci;
USE `pilotosF1`;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `usuarios`
--
CREATE TABLE IF NOT EXISTS `usuarios` (
id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(20) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    perfil ENUM('usuario', 'admin') NOT NULL
);
INE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

GRANT ALL PRIVILEGES ON pilotosF1* TO 'dwes'@'localhost';