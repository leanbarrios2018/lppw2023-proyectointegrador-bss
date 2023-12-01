<?php
class UpdateNotificador
{
    private $conn;
    private $nivel;
    private $categoria;
    private $producto;
    private $IDUsuario;
    private $IDIndicador;
    public function __construct($conn, $nivel, $categoria, $producto, $IDUsuario, $IDIndicador)
    {
        $this->conn = $conn;
        $this->nivel = $nivel;
        $this->categoria = $categoria;
        $this->producto = $producto;
        $this->IDUsuario = $IDUsuario;
        $this->IDIndicador = $IDIndicador;
    }

    public function setNivel($nivel)
    {
        $this->nivel = $nivel;
    }
    public function setCategoria($categoria)
    {
        $this->categoria = $categoria;
    }
    public function setProducto($producto)
    {
        $this->producto = $producto;
    }

    public function updateNotificador()
    {
        require_once '../modelo/dbTwo.php';

        /** @var \PDO $conn */

        $consultaUpdate = "UPDATE `notificador` SET `Nivel`=:nivel WHERE `ID_notificador`=:IDIndicador and `ID_usuario_registrado`=:IDUsuario and `ID_categoria`=:IDCategoria and `ID_producto`=:IDProducto";

        try {
            $consulta = $this->conn->prepare($consultaUpdate);
            $consulta->bindParam(":nivel", $this->nivel);
            $consulta->bindParam(":IDIndicador", $this->IDIndicador);
            $consulta->bindParam(":IDUsuario", $this->IDUsuario);
            $consulta->bindParam(":IDCategoria", $this->categoria);
            $consulta->bindParam(":IDProducto", $this->producto);
            $consulta->execute();
        } catch (PDOException $e) {
            echo "Error en la actualización: " . $e->getMessage();
        }
    }
}
