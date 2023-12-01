<?php include "../modelo/dbTwo.php"; ?>

<?php
$estadoHabilitado = 1;

$consulta = $conn->query("SELECT 
    p.id_producto, p.nombre, p.marca, p.precio_compra, p.precio_venta, p.estado,
    ps.id_producto_stock, ps.id_stock,
    s.cantidad, s.log_abm
    FROM productos p
    INNER JOIN productos_stock ps ON p.id_producto = ps.id_producto
    INNER JOIN stock s ON ps.id_stock = s.id_stock
    WHERE p.estado = $estadoHabilitado");

if ($consulta->rowCount()) {
    $inventario = $consulta->fetchAll(PDO::FETCH_ASSOC);
} else {
    echo "No se encontraron resultados en la base de datos para el estado '$estadoHabilitado'.";
}

header('Content-Type: application/json');
echo json_encode($inventario);
?>

<?php $conn = null; ?>