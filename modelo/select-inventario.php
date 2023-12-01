<?php include "../modelo/dbTwo.php"; ?>

<?php
$invetarnio = [];
$estadoHabilitado = 1;

$consulta = $conn->query("SELECT 
p.id_producto, p.nombre, p.marca, p.precio_compra, p.precio_venta,p.estado,
ps.id_producto_stock, ps.id_stock,
s.cantidad, s.log_abm
FROM productos p
INNER JOIN productos_stock ps ON p.id_producto = ps.id_producto
INNER JOIN stock s ON ps.id_stock = s.id_stock
WHERE p.estado = $estadoHabilitado");

if ($consulta->rowCount()) {
    while ($row = $consulta->fetch(PDO::FETCH_ASSOC)) {

        $inventario[] = $row["nombre"];
    }
} else {
    echo "No se encontraron resultados en la base de datos.";
}
header('Content-Type: application/json');
echo json_encode($inventario);
?>
<?php $conn = null; ?>