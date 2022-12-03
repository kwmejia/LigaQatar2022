-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-11-2022 a las 23:07:30
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `equiposqatar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipo`
--

CREATE TABLE `equipo` (
  `id` bigint(20) NOT NULL,
  `bandera_img` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `partidos_empatados` int(11) DEFAULT NULL,
  `partidos_ganados` int(11) DEFAULT NULL,
  `partidos_jugados` int(11) DEFAULT NULL,
  `partidos_perdidos` int(11) DEFAULT NULL,
  `puntos` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `equipo`
--

INSERT INTO `equipo` (`id`, `bandera_img`, `nombre`, `partidos_empatados`, `partidos_ganados`, `partidos_jugados`, `partidos_perdidos`, `puntos`) VALUES
(1, 'ecuador.jpg', 'Ecuador', 0, 0, 1, 1, 0),
(2, 'alemania.png', 'Alemania', 0, 0, 1, 1, 0),
(3, 'qatar.png', 'Qatar', 0, 0, 1, 1, 0),
(4, 'brasil.jpg', 'Brasil', 1, 0, 2, 1, 1),
(5, 'senegal.png', 'Senegal', 0, 0, 1, 1, 0),
(6, 'holanda.png', 'Holanda', 0, 2, 2, 0, 6),
(7, 'inglaterra.png', 'Inglaterra', 1, 0, 2, 1, 1),
(8, 'arabia.jpg', 'Arabia saudita', 0, 1, 1, 0, 3),
(9, 'iran.jpg', 'Irán', 0, 0, 1, 1, 0),
(10, 'su.png', 'USA', 1, 0, 3, 2, 1),
(11, 'gales.png', 'Gales', 0, 1, 1, 0, 3),
(12, 'argentina.png', 'Argentina', 0, 1, 1, 0, 3),
(13, 'mexico.jpg', 'Mexico', 1, 0, 2, 1, 1),
(14, 'polonia.jpg', 'Polonia', 0, 1, 1, 0, 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `equipo`
--
ALTER TABLE `equipo`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
