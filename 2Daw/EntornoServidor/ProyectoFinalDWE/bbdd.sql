
CREATE DATABASE IF NOT EXISTS `pilotosF1` DEFAULT CHARACTER SET utf8 COLLATE
utf8_spanish_ci;
USE `pilotosF1`;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `usuarios`
-- Establecer el motor de almacenamiento InnoDB
SET default_storage_engine=INNODB;

-- Crear la tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL,
    contrasena VARCHAR(50) NOT NULL,
    tipo ENUM('admin', 'normal') NOT NULL
) ENGINE=InnoDB;

-- Crear la tabla de pilotos
CREATE TABLE pilotos (
    id INT PRIMARY KEY,
    nombre_piloto VARCHAR(100) NOT NULL,
    ruta_imagen VARCHAR(255) NOT NULL,
    FOREIGN KEY (id) REFERENCES usuarios(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Agregar usuario administrador
INSERT INTO usuarios (nombre_usuario, contrasena, tipo) VALUES ('admin', 'admin', 'admin');

-- Agregar usuario normal
INSERT INTO usuarios (nombre_usuario, contrasena, tipo) VALUES ('usuario', 'usuario', 'normal');


GRANT ALL PRIVILEGES ON pilotosF1* TO 'dwes'@'localhost';
