<?php
require_once "ProductoControlador.php";
// Manejar las solicitudes del controlador
$productoControlador = new ProductoControlador();
$productoControlador->generarTbody();
// $productoControlador->mostrarTablaPorJSON();
?>