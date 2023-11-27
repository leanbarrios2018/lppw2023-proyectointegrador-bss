-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2023 a las 05:17:49
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
-- Base de datos: `stockear`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(20) NOT NULL,
  `nombre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_productos`
--

CREATE TABLE `categorias_productos` (
  `id_categoria_producto` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `precio_venta` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`, `marca`, `precio_compra`, `precio_venta`) VALUES
(1, 'Yogur Clasico Frutilla 900 Gr. Serenisima', 'Serenisima', 300, 500),
(2, 'Aceite de Girasol 1,5 Lt. Legitimo', 'Legitimo', 600, 665),
(3, 'Aceite de Girasol  1,5 Lts. Natura', 'Natura', 500, 739),
(4, 'Mayonesa Sabor Ahumado 250 Gr. Hellmans', 'Hellmans', 300, 411.52),
(5, 'Harina 000 1 kg. Morixe', 'Morixe', 150, 214.69);

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
(1, 1, 1),
(2, 3, 2),
(3, 2, 3),
(4, 4, 4),
(5, 5, 5);

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
(1, 80, '2023-11-20 20:07:42'),
(2, 200, '2023-11-20 20:58:56'),
(3, 120, '2023-11-20 20:58:56'),
(4, 300, '2023-11-20 20:59:22'),
(5, 200, '2023-11-20 20:59:22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(20) NOT NULL,
  `username` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `tipo_documento` int(20) NOT NULL,
  `nro_documento` int(20) NOT NULL,
  `email` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `precio_total` int(20) NOT NULL,
  `cantidad_venta` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id_venta`, `fecha`, `hora`, `precio_total`, `cantidad_venta`) VALUES
(7, '2023-11-21', '15:32:59', 200, 4),
(8, '2023-11-22', '23:38:54', 7000, 14);

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
  MODIFY `id_categoria` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias_productos`
--
ALTER TABLE `categorias_productos`
  MODIFY `id_categoria_producto` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id_producto_stock` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `productos_usuarios`
--
ALTER TABLE `productos_usuarios`
  MODIFY `id_producto_usuario` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `id_stock` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios_ventas`
--
ALTER TABLE `usuarios_ventas`
  MODIFY `id_usuario_venta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id_venta` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
  ADD CONSTRAINT `id_producto_id_prod_fk` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`),
  ADD CONSTRAINT `id_venta_id_venta_fk` FOREIGN KEY (`id_venta`) REFERENCES `ventas` (`id_venta`);

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
