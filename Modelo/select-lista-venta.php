<?php include 'dbTwo.php'; ?>

<?php
$consultaSelect = "SELECT `id_venta`, `fecha`, `hora`, `precio_total`, `cantidad_venta` FROM `ventas`";

try {
    $consulta = $conn->query($consultaSelect);
    $venta = $consulta->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($venta);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>