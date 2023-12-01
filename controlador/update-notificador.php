<?php require_once "../modelo/dbTwo.php" ?>
<?php include "../modelo/update-notificador.php"; ?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    session_start();

    $IDUsuario = 3;
    $IDIndicador = $_POST["IDIndicador"];
    $Nivel = $_POST["Nivel"];
    $Categoria = $_POST["IDCategoria"];
    $Producto = $_POST["IDProducto"];

    $update = new UpdateNotificador($conn, $Nivel, $Categoria, $Producto, $IDUsuario, $IDIndicador);
    $update->updateNotificador();
    header("Location:../vista/notificador.php");
    exit();
}
?>