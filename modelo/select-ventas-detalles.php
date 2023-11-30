<?php include "../modelo/dbTwo.php"; ?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $IDProductoVenta = $_POST['IDPV'];
    $IDProducto = $_POST['IDP'];
    $IDVenta = $_POST['IDV'];

    if (!empty($IDProducto) && !empty($IDProductoVenta) && !empty($IDVenta)) {

        $resultados = [];
        $consultaSelect = "SELECT p.id_producto, p.nombre, p.marca, p.precio_venta,
        pv.id_producto_venta, v.id_venta, v.fecha, v.hora, v.precio_total, v.cantidad_venta
        FROM productos p
        INNER JOIN productos_ventas pv ON p.id_producto = pv.id_producto
        INNER JOIN ventas v ON pv.id_venta = v.id_venta WHERE pv.id_producto_venta = :IDProductoVenta AND p.id_producto = :IDProducto AND  v.id_venta = :IDVenta ORDER BY v.id_venta DESC";

        try {
            $consulta = $conn->prepare($consultaSelect);
            $consulta->bindParam(':IDProductoVenta', $IDProductoVenta, PDO::PARAM_INT);
            $consulta->bindParam(':IDProducto', $IDProducto, PDO::PARAM_INT);
            $consulta->bindParam(':IDVenta', $IDVenta, PDO::PARAM_INT);
            $consulta->execute();

            while ($registro = $consulta->fetch(PDO::FETCH_ASSOC)) {
                $resultados[] = $registro;
            }
            header('Content-Type: application/json');
            echo json_encode($resultados);
            header("Location: ../vista/index-vendedor.php");
            exit();
        } catch (PDOException $e) {
            throw new Exception("Error al insertar en la base de datos: " . $e->getMessage());
        }
    }
}
