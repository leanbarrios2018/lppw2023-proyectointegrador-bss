<?php
class InsertNotificador
{
    private $conn;
    private $nivel;
    private $categoria;
    private $producto;
    private $IDUsuario;

    public function __construct($conn, $nivel, $categoria, $producto, $IDUsuario)
    {
        $this->conn = $conn;
        $this->nivel = $nivel;
        $this->categoria = $categoria;
        $this->producto = $producto;
        $this->IDUsuario = $IDUsuario;
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
    public function setIDUsuario($IDUsuario)
    {
        $this->IDUsuario = $IDUsuario;
    }
    public function insertNotificador()
    {
        require_once '../modelo/dbTwo.php';

        /** @var \PDO $conn */

        $Acierto = [];
        $Error = [];
        $Verificador = false;

        $checkProductoQuery = "
        SELECT 
        n.`ID_notificador`, 
        n.`ID_usuario_registrado`, 
        n.`ID_categoria`, 
        n.`ID_producto`, 
        n.`Nivel`, 
        p.`nombre` AS producto_nombre, 
        p.`marca`, 
        p.`precio_compra`, 
        p.`precio_venta`, 
        p.`estado`, 
        c.`nombre` AS categoria_nombre
        FROM 
            `notificador` n
        INNER JOIN 
            `productos` p ON n.`ID_producto` = p.`id_producto`
        INNER JOIN 
        `categorias` c ON n.`ID_categoria` = c.`id_categoria`
        WHERE 
                n.`ID_usuario_registrado` = :IDUsuario 
                AND n.`ID_categoria` = :IDCategoria 
                AND n.`ID_producto` = :IDProducto    
        ";

        $checkProductoStatement = $this->conn->prepare($checkProductoQuery);
        $checkProductoStatement->bindParam(':IDUsuario', $this->IDUsuario);
        $checkProductoStatement->bindParam(':IDCategoria', $this->categoria);
        $checkProductoStatement->bindParam(':IDProducto', $this->producto);
        $checkProductoStatement->execute();
        $productoExistente = $checkProductoStatement->fetch();

        if (!$productoExistente) {

            $insertConsulta = "INSERT INTO `notificador`( `ID_usuario_registrado`, `ID_categoria`, `ID_producto`, `Nivel`) 
        VALUES (:IDUsuario,:IDCategoria,:IDProducto,:Nivel)";

            try {
                $consulta = $this->conn->prepare($insertConsulta);
                $consulta->bindParam(':IDUsuario', $this->IDUsuario);
                $consulta->bindParam(':IDCategoria', $this->categoria);
                $consulta->bindParam(':IDProducto', $this->producto);
                $consulta->bindParam(':Nivel', $this->nivel);
                $consulta->execute();
                $Acierto["exitoso"] = "Creacion exitosa.";
                $Verificador = true;
            } catch (PDOException $e) {
                echo "Error en la consulta de inserción: " . $e->getMessage();
            }
        } else {
            $Error["indicador"] = "El Indicador ya existe";
            $Verificador = true;
        }
    }
}
