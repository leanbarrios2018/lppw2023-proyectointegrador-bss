<?php include "../modelo/dbTwo.php"; ?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $IDStock = $_POST["IDStock"];
    $cantidadProducto = $_POST["cantidadProducto"];

    try {
        $consultaUpdate = "UPDATE `stock` SET `cantidad`=:cantidad WHERE `id_stock`=:IDStock";

        $consulta = $conn->prepare($consultaUpdate);
        $consulta->bindParam(":cantidad", $cantidadProducto, PDO::PARAM_INT);
        $consulta->bindParam(":IDStock", $IDStock, PDO::PARAM_INT);

        $consulta->execute();
    } catch (PDOException $e) {

        echo "Error: " . $e->getMessage();
    }
} else {
    echo "Algunos campos están vacíos. Por favor, completa todos los campos.";
}

?>