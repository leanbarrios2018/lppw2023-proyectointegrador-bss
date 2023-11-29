<?php include "../modelo/dbTwo.php" ?>
<?php include "../modelo/insert-into-ventas.php" ?>
<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    date_default_timezone_set('America/Argentina/Buenos_Aires'); // Configuro la zona horaria a Buenos Aires, Argentina
    $fechaActual = date("Y-m-d"); // Obtengo la fecha actual (Año-Mes-Día)
    $horaActual = date("H:i:s"); // Obtengo la hora actual (Horas:Minutos:Segundos)
    $total = $_POST["total"];
    $cantidad = $_POST["cantidadTotal"];

    $Ventas = new selectVentas($conn, $fechaActual, $horaActual, $total, $cantidad);
    $Ventas->insertVentas();
    $_SESSION['IDVenta'] = $Ventas->getIDVenta();
    header("Location:../Vista/vendedor-generar-ventas.php");
    exit();
}
?>