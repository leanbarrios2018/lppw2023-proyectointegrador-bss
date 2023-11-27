<?php
class selectVentas
{
    private $conn;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function getDatosVentas()
    {
        require_once '../modelo/dbTwo.php';

        /** @var \PDO $conn */

        $consultaSelect = "SELECT `id_venta`, `fecha`, `hora`, `precio_total`, `cantidad_venta` FROM `ventas` ORDER BY `id_venta` DESC LIMIT 5;";
        try {
            $consulta = $this->conn->query($consultaSelect);
            $numFila = 1;

            while ($registro = $consulta->fetch(PDO::FETCH_ASSOC)) {
                echo "<tr>";
                echo "<td>" . $numFila . "</td>";
                echo "<td class='text-center d-none'>" . $registro['id_venta'] . "</td>";
                echo "<td class='text-center'>" . $registro['fecha'] . "</td>";
                echo "<td class='text-center'>" . $registro['hora'] . "</td>";
                echo "<td class='text-center'>" . $registro['precio_total'] . "</td>";
                echo "<td class='text-center'>" . $registro['cantidad_venta'] . "</td>";
                echo "</tr>";
                $numFila++;
            }
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }

    public function cerrarConexion()
    {
        $this->conn = null;
    }
}
