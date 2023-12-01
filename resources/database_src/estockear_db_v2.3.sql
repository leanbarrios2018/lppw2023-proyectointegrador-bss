-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-12-2023 a las 03:07:21
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `estockear_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(20) NOT NULL,
  `nombre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `nombre`) VALUES
(1, 'Conservas'),
(2, 'Aceites y aderezos'),
(3, 'Pastas secas'),
(4, 'Arroz y legumbres'),
(5, 'Panaderia'),
(6, 'Golosinas y alfajores'),
(7, 'Repostería'),
(8, 'Comidas listas'),
(9, 'Harinas'),
(10, 'Picadas'),
(11, 'Pan rallado y rebozadores'),
(12, 'Galletitas y cereales'),
(13, 'Infusiones y endulzantes'),
(14, 'Para untar'),
(16, 'Fiambreria'),
(17, 'Lacteos'),
(18, 'Carniceria'),
(19, 'Frutas y verduras'),
(20, 'Pastas frescas'),
(21, 'Gaseosas'),
(22, 'Cervezas'),
(23, 'Aguas'),
(24, 'Bodega'),
(25, 'Jugos e isotonicas'),
(26, 'Aperitivos'),
(27, 'Bebidas blancas y licores'),
(28, 'Hamburguesas y medallones'),
(29, 'Rebozados'),
(30, 'Papeleria'),
(31, 'Limpiadores'),
(32, 'Limpieza de cocina'),
(33, 'Accesorios de limpieza'),
(34, 'Desodorantes de ambiente'),
(35, 'Insecticidas'),
(36, 'Fosforos y velas'),
(37, 'Bolsas'),
(38, 'Cuidado del pelo'),
(39, 'Cuidado personal'),
(40, 'Cuidado bucal'),
(41, 'Jabones'),
(42, 'Proteccion femenina'),
(43, 'Maquinas de afeitar'),
(44, 'Farmacia'),
(45, 'Pañales'),
(46, 'Cuidado del bebe'),
(47, 'Juegos y juguetes'),
(48, 'Libreria'),
(49, 'Deco hogar'),
(50, 'Ferreteria'),
(51, 'Cocina'),
(52, 'Climatización'),
(53, 'Pequeños electrodomésticos'),
(54, 'Cocinas y hornos'),
(55, 'Lavado y secado'),
(56, 'Heladeras y freezers'),
(57, 'Campanas purificadoras');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_productos`
--

CREATE TABLE `categorias_productos` (
  `id_categoria_producto` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias_productos`
--

INSERT INTO `categorias_productos` (`id_categoria_producto`, `id_categoria`, `id_producto`) VALUES
(1, 17, 1),
(2, 2, 2),
(3, 2, 3),
(4, 2, 4),
(5, 9, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `combos`
--

CREATE TABLE `combos` (
  `id_combo` int(20) NOT NULL,
  `nombre` varchar(120) NOT NULL,
  `cantidad` int(20) NOT NULL,
  `precio` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `combos_productos`
--

CREATE TABLE `combos_productos` (
  `id_combo_producto` int(11) NOT NULL,
  `id_combo` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificador`
--

CREATE TABLE `notificador` (
  `ID_notificador` int(255) NOT NULL,
  `ID_usuario_registrado` int(255) NOT NULL,
  `ID_categoria` int(255) NOT NULL,
  `ID_producto` int(255) NOT NULL,
  `Nivel` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `notificador`
--

INSERT INTO `notificador` (`ID_notificador`, `ID_usuario_registrado`, `ID_categoria`, `ID_producto`, `Nivel`) VALUES
(6, 3, 17, 1, 50),
(7, 3, 2, 3, 80),
(8, 3, 9, 5, 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `id_permiso` int(11) NOT NULL,
  `nombre` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos_roles`
--

CREATE TABLE `permisos_roles` (
  `id_permiso_rol` int(11) NOT NULL,
  `id_permiso` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(20) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `marca` varchar(100) NOT NULL,
  `precio_compra` float NOT NULL,
  `precio_venta` float NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`, `marca`, `precio_compra`, `precio_venta`, `estado`) VALUES
(1, 'Yogurt Clasico Frutilla 900 Gr. Serenisima', 'Serenisima', 300, 500, 1),
(2, 'Aceite de Girasol 1,5 Lt. Legitimo', 'Legitimo', 600, 665, 0),
(3, 'Aceite de Girasol 1,5 Lts. Natura', 'Natura', 500, 739, 1),
(4, 'Mayonesa Sabor Ahumado 250 Gr. Hellmans', 'Hellmans', 300, 411.52, 0),
(5, 'Harina 000 1 kg. Morixe', 'Morixe', 150, 214.69, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_stock`
--

CREATE TABLE `productos_stock` (
  `id_producto_stock` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos_stock`
--

INSERT INTO `productos_stock` (`id_producto_stock`, `id_producto`, `id_stock`) VALUES
(6, 1, 6),
(7, 3, 9),
(8, 5, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_usuarios`
--

CREATE TABLE `productos_usuarios` (
  `id_producto_usuario` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_ventas`
--

CREATE TABLE `productos_ventas` (
  `id_producto_venta` int(11) NOT NULL,
  `id_producto` int(20) NOT NULL,
  `id_venta` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos_ventas`
--

INSERT INTO `productos_ventas` (`id_producto_venta`, `id_producto`, `id_venta`) VALUES
(48, 1, 53),
(49, 1, 53),
(50, 1, 53),
(51, 1, 54),
(52, 5, 54),
(53, 1, 55),
(54, 1, 55);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id_rol` int(20) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles_usuarios`
--

CREATE TABLE `roles_usuarios` (
  `id_rol_permiso` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock`
--

CREATE TABLE `stock` (
  `id_stock` int(20) NOT NULL,
  `cantidad` int(20) NOT NULL,
  `log_abm` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `stock`
--

INSERT INTO `stock` (`id_stock`, `cantidad`, `log_abm`) VALUES
(6, 5, '2023-11-30 23:59:48'),
(7, 100, '2023-11-30 23:59:48'),
(9, 150, '2023-12-01 00:00:07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(20) NOT NULL,
  `username` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `tipo_documento` varchar(4) NOT NULL,
  `nro_documento` int(20) NOT NULL,
  `email` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `username`, `nombre`, `apellido`, `tipo_documento`, `nro_documento`, `email`) VALUES
(1, 'gere01', 'Gerente', 'Primero', 'DNI', 11223344, 'gprimero@mail.com'),
(2, 'adminstock01', 'Adminstock', 'Primero', 'LCLE', 112233, 'aprimero@mail.com'),
(3, 'vende01', 'Vendedor', 'Primero', 'LCLE', 445566, 'vprimero@mail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_ventas`
--

CREATE TABLE `usuarios_ventas` (
  `id_usuario_venta` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_venta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id_venta` int(20) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `precio_total` float NOT NULL,
  `cantidad_venta` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id_venta`, `fecha`, `hora`, `precio_total`, `cantidad_venta`) VALUES
(53, '2023-11-29', '18:29:00', 3000, 6),
(54, '2023-11-29', '18:29:58', 3146.9, 12),
(55, '2023-11-29', '19:04:48', 5000, 10),
(56, '2023-11-30', '14:07:34', 1000, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `categorias_productos`
--
ALTER TABLE `categorias_productos`
  ADD PRIMARY KEY (`id_categoria_producto`),
  ADD KEY `id_cat_id_cat_fk` (`id_categoria`),
  ADD KEY `id_prod_id_prod` (`id_producto`);

--
-- Indices de la tabla `combos`
--
ALTER TABLE `combos`
  ADD PRIMARY KEY (`id_combo`) USING BTREE;

--
-- Indices de la tabla `combos_productos`
--
ALTER TABLE `combos_productos`
  ADD PRIMARY KEY (`id_combo_producto`),
  ADD KEY `id_combo_id_combo_fk` (`id_combo`),
  ADD KEY `id_prod_id_prod_fk` (`id_producto`);

--
-- Indices de la tabla `notificador`
--
ALTER TABLE `notificador`
  ADD PRIMARY KEY (`ID_notificador`),
  ADD KEY `FK_notificador_usuario_ID_usuario` (`ID_usuario_registrado`),
  ADD KEY `FK_notificador_categoria_ID_categoria` (`ID_categoria`),
  ADD KEY `FK_notificador_producto_ID_producto` (`ID_producto`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`id_permiso`);

--
-- Indices de la tabla `permisos_roles`
--
ALTER TABLE `permisos_roles`
  ADD PRIMARY KEY (`id_permiso_rol`),
  ADD KEY `id_permiso_id_permiso_fk` (`id_permiso`),
  ADD KEY `id_rol_id_rol_fk` (`id_rol`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `productos_stock`
--
ALTER TABLE `productos_stock`
  ADD PRIMARY KEY (`id_producto_stock`),
  ADD KEY `id_stock_id_stock_fk` (`id_stock`),
  ADD KEY `id_producto_id_producto_fk` (`id_producto`);

--
-- Indices de la tabla `productos_usuarios`
--
ALTER TABLE `productos_usuarios`
  ADD PRIMARY KEY (`id_producto_usuario`),
  ADD KEY `id_prod_id_producto_fk` (`id_producto`),
  ADD KEY `id_usuario_id_usuario_fk` (`id_usuario`);

--
-- Indices de la tabla `productos_ventas`
--
ALTER TABLE `productos_ventas`
  ADD PRIMARY KEY (`id_producto_venta`) USING BTREE,
  ADD KEY `id_producto_id_prod_fk` (`id_producto`),
  ADD KEY `id_venta_id_venta_fk` (`id_venta`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `roles_usuarios`
--
ALTER TABLE `roles_usuarios`
  ADD PRIMARY KEY (`id_rol_permiso`),
  ADD KEY `id_roles_id_rol_fk` (`id_rol`),
  ADD KEY `id_usuarios_id_usuario_fk` (`id_usuario`);

--
-- Indices de la tabla `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id_stock`) USING BTREE;

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `usuarios_ventas`
--
ALTER TABLE `usuarios_ventas`
  ADD PRIMARY KEY (`id_usuario_venta`),
  ADD KEY `id_usuario_id_usuarios_fk` (`id_usuario`),
  ADD KEY `id_ventas_id_venta_fk` (`id_venta`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id_venta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT de la tabla `categorias_productos`
--
ALTER TABLE `categorias_productos`
  MODIFY `id_categoria_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `combos`
--
ALTER TABLE `combos`
  MODIFY `id_combo` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `combos_productos`
--
ALTER TABLE `combos_productos`
  MODIFY `id_combo_producto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `notificador`
--
ALTER TABLE `notificador`
  MODIFY `ID_notificador` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `id_permiso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `permisos_roles`
--
ALTER TABLE `permisos_roles`
  MODIFY `id_permiso_rol` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `productos_stock`
--
ALTER TABLE `productos_stock`
  MODIFY `id_producto_stock` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `productos_usuarios`
--
ALTER TABLE `productos_usuarios`
  MODIFY `id_producto_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos_ventas`
--
ALTER TABLE `productos_ventas`
  MODIFY `id_producto_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id_rol` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles_usuarios`
--
ALTER TABLE `roles_usuarios`
  MODIFY `id_rol_permiso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `stock`
--
ALTER TABLE `stock`
  MODIFY `id_stock` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios_ventas`
--
ALTER TABLE `usuarios_ventas`
  MODIFY `id_usuario_venta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id_venta` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categorias_productos`
--
ALTER TABLE `categorias_productos`
  ADD CONSTRAINT `id_cat_id_cat_fk` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`),
  ADD CONSTRAINT `id_prod_id_prod` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`);

--
-- Filtros para la tabla `combos_productos`
--
ALTER TABLE `combos_productos`
  ADD CONSTRAINT `id_combo_id_combo_fk` FOREIGN KEY (`id_combo`) REFERENCES `combos` (`id_combo`),
  ADD CONSTRAINT `id_prod_id_prod_fk` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`);

--
-- Filtros para la tabla `notificador`
--
ALTER TABLE `notificador`
  ADD CONSTRAINT `FK_notificador_categoria_ID_categoria` FOREIGN KEY (`ID_categoria`) REFERENCES `categorias` (`id_categoria`),
  ADD CONSTRAINT `FK_notificador_producto_ID_producto` FOREIGN KEY (`ID_producto`) REFERENCES `productos` (`id_producto`),
  ADD CONSTRAINT `FK_notificador_usuario_ID_usuario` FOREIGN KEY (`ID_usuario_registrado`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `permisos_roles`
--
ALTER TABLE `permisos_roles`
  ADD CONSTRAINT `id_permiso_id_permiso_fk` FOREIGN KEY (`id_permiso`) REFERENCES `permisos` (`id_permiso`),
  ADD CONSTRAINT `id_rol_id_rol_fk` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`);

--
-- Filtros para la tabla `productos_stock`
--
ALTER TABLE `productos_stock`
  ADD CONSTRAINT `id_producto_id_producto_fk` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`),
  ADD CONSTRAINT `id_stock_id_stock_fk` FOREIGN KEY (`id_stock`) REFERENCES `stock` (`id_stock`);

--
-- Filtros para la tabla `productos_usuarios`
--
ALTER TABLE `productos_usuarios`
  ADD CONSTRAINT `id_prod_id_producto_fk` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`),
  ADD CONSTRAINT `id_usuario_id_usuario_fk` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `productos_ventas`
--
ALTER TABLE `productos_ventas`
  ADD CONSTRAINT `id_producto_id_prod_fk` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`);

--
-- Filtros para la tabla `roles_usuarios`
--
ALTER TABLE `roles_usuarios`
  ADD CONSTRAINT `id_roles_id_rol_fk` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`),
  ADD CONSTRAINT `id_usuarios_id_usuario_fk` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `usuarios_ventas`
--
ALTER TABLE `usuarios_ventas`
  ADD CONSTRAINT `id_usuario_id_usuarios_fk` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `id_ventas_id_venta_fk` FOREIGN KEY (`id_venta`) REFERENCES `ventas` (`id_venta`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
