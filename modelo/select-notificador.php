<?php
include "../modelo/dbTwo.php";

$consultaSelect = "SELECT 
    n.ID_notificador, 
    n.ID_usuario_registrado, 
    n.ID_categoria, 
    n.ID_producto, 
    n.Nivel,
    p.nombre,
    p.marca,
    p.precio_compra,
    p.precio_venta,
    p.estado,
    c.nombre AS nombre_categoria,
    ps.id_producto_stock,
    ps.id_stock,
    s.cantidad,
    s.log_abm
    FROM 
    notificador n
    INNER JOIN 
        productos p ON n.ID_producto = p.id_producto
    INNER JOIN 
        categorias c ON n.ID_categoria = c.id_categoria
    INNER JOIN 
        productos_stock ps ON p.id_producto = ps.id_producto
    INNER JOIN 
        stock s ON ps.id_stock = s.id_stock;";
try {
    $consulta = $conn->query($consultaSelect);
    $registro = $consulta->fetchAll(PDO::FETCH_ASSOC);
    header('Content-Type: application/json');
    echo json_encode($registro);
} catch (Exception $e) {
    error_log("Error al realizar la consulta: " . $e->getMessage());
    echo "Error al realizar la consulta. Por favor, inténtelo de nuevo más tarde.";
}
