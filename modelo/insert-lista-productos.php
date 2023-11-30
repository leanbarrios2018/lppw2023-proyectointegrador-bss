<?php
include "../modelo/dbTwo.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtengo los datos JSON del cuerpo de la solicitud
    $datosJson = file_get_contents('php://input');

    // Decodifico los datos JSON en un array asociativo
    $listaDeVenta = json_decode($datosJson, true);

    $conn->beginTransaction();

    $consultaInsert = "INSERT INTO `productos_ventas`(`id_producto`, `id_venta`) 
                    VALUES (:IDProducto, :IDVenta)";

    try {
        $consulta = $conn->prepare($consultaInsert);

        $consulta->bindParam(':IDProducto', $listaDeVenta['IDProducto']);
        $consulta->bindParam(':IDVenta', $listaDeVenta['IDVenta']);
        $consulta->execute();
        $conn->commit();

        // Puedes enviar una respuesta JSON al cliente si es necesario
        $respuesta = ['mensaje' => 'Datos insertados correctamente'];
        echo json_encode($respuesta);
    } catch (PDOException $e) {
        // Manejo de excepciones en caso de error en la base de datos
        $respuesta = ['error' => 'Error al insertar en la base de datos: ' . $e->getMessage()];
        echo json_encode($respuesta);
    }
}
?>

<!-- // $IDProducto = $_POST["IDProducto"];
// $IDVenta = $_POST["IDVenta"];

// $consultaInsert = "INSERT INTO `productos_ventas`(`id_producto`, `id_venta`)
// VALUES (:IDProducto, :IDVenta)";

// try {
// $consulta = $conn->prepare($consultaInsert);
// $consulta->bindParam(':IDProducto', $IDProducto);
// $consulta->bindParam(':IDVenta', $IDVenta);
// $consulta->execute();
// } catch (PDOException $e) {
// throw new Exception("Error al insertar en la base de datos: " . $e->getMessage());
// } -->