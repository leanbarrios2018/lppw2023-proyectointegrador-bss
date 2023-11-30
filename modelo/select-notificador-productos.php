<?php include "../modelo/dbTwo.php"; ?>

<?php
$estadoHabilitado = 1;
$consultaSelect = "SELECT `id_producto`, `nombre`, `marca`, `precio_compra`, `precio_venta`, `estado` FROM `productos`
WHERE `estado` = $estadoHabilitado";

try {
    $consulta = $conn->query($consultaSelect);
    $registro = $consulta->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($registro);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>