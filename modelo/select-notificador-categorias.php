<?php include "../modelo/dbTwo.php"; ?>

<?php
$consultaSelect = "SELECT `id_categoria`, `nombre` FROM `categorias`";

try {
    $consulta = $conn->query($consultaSelect);
    $registro = $consulta->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');
    echo json_encode($registro);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>