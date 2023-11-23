<?php include "conetDataBase.php" ?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {


    date_default_timezone_set('America/Argentina/Buenos_Aires'); // Configuro la zona horaria a Buenos Aires, Argentina
    $fechaActual = date("Y-m-d"); // Obtengo la fecha actual (Año-Mes-Día)
    $horaActual = date("H:i:s"); // Obtengo la hora actual (Horas:Minutos:Segundos)

    $idUsuario = 4;
    $total = $_POST["total"];
    $cantidad = $_POST["cantidadTotal"];

    if (!empty($idUsuario) && !empty($total) && !empty($cantidad)) {
        try {
            $consultaInsert = "INSERT INTO `ventas`(`ID_USUARIO`, `FECHA`, `HORA`, `PRECIO_TOTAL`, `CANTIDAD_VENTA`) VALUES (:idUsuario,:fecha,:hora,:precioTotal,:cantidadVenta)";
            $consulta = $conn->prepare($consultaInsert);
            $consulta->bindParam(":idUsuario", $idUsuario, PDO::PARAM_INT);
            $consulta->bindParam(":fecha", $fechaActual);
            $consulta->bindParam(":hora", $horaActual);
            $consulta->bindParam(":precioTotal", $total, PDO::PARAM_INT);
            $consulta->bindParam(":cantidadVenta", $cantidad, PDO::PARAM_INT);

            $consulta->execute();
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    } else {
        echo "Algunos campos están vacíos. Por favor, completa todos los campos.";
    }
}
?>


<?php $conn = null; ?>