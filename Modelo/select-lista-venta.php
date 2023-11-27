<?php include 'dbTwo.php'; ?>

<?php
$Ventas = [];
$consulta = $conn->query("SELECT `id_venta`, `fecha`, `hora`, `precio_total`, `cantidad_venta` FROM `ventas`");

if ($consulta->rowCount()) {
    while ($row = $consulta->fetch(PDO::FETCH_ASSOC)) {

        $Ventas[] = strval($row["fecha"]); //strval se utiliza para convertir un valor en una cadena (string). +
        $Ventas[] = strval($row["precio_total"]);
        $Ventas[] = strval($row["cantidad_venta"]);
    }
} else {
    echo "No se encontraron resultados en la base de datos.";
}
header('Content-Type: application/json');
echo json_encode($Ventas);
?>
<?php $conn = null; ?>