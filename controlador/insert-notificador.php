<?php require_once "../modelo/dbTwo.php" ?>
<?php include "../modelo/insert-notificador.php" ?>

<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nivel = $_POST["limiteDeAviso"];
    $categoria = $_POST["selectCategoria"];
    $producto = $_POST["selectProducto"];
    $IDUsuario = 3;

    $Notificador = new InsertNotificador($conn, $nivel, $categoria, $producto, $IDUsuario);
    $Notificador->insertNotificador();
    header("Location:../vista/notificador.php");
    exit();
}
?>