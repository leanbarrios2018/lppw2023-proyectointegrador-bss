<?php
session_start();
$_SESSION["alta_producto"] = false;

$producto_controlador = new ProductoControlador();
$producto_controlador->agregarProducto();
?>