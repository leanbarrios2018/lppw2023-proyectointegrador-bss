<?php
require_once '../controlador/ProductoControlador.php';
// Manejar las solicitudes del controlador
$productoControlador = new ProductoControlador();
$productoControlador->generarSelectCategoriaParaFormuario();
?>