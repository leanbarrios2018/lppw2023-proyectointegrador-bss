<?php
class Database
{
    private $conn;

    public function __construct()
    {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $db = "estockear";

        try {
            $this->conn = new PDO("mysql:host=$servername;dbname=" . $db . ";charset=utf8", $username, $password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
            die();
        }
    }

    public function getVentasData()
    {
        $consultaSelect = "SELECT `ID_VENTAS`, `ID_USUARIO`, `FECHA`, `HORA`, `PRECIO_TOTAL`, `CANTIDAD_VENTA` FROM `ventas`";
        $consulta = $this->conn->query($consultaSelect);
        $ventasData = [];

        while ($registro = $consulta->fetch(PDO::FETCH_ASSOC)) {
            $ventasData[] = $registro;
        }

        return $ventasData;
    }

    public function closeConnection()
    {
        $this->conn = null;
    }
}
?>

<?php $conn = null; ?>