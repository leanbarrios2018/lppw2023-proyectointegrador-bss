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

        $consultaSelect = "SELECT p.id_producto, pv.id_producto_venta, v.id_venta, v.fecha, v.hora, v.precio_total, v.cantidad_venta
        FROM productos p
        INNER JOIN productos_ventas pv ON p.id_producto = pv.id_producto
        INNER JOIN ventas v ON pv.id_venta = v.id_venta ORDER BY `id_venta` DESC LIMIT 5;";

        try {
            $consulta = $this->conn->query($consultaSelect);
            $numFila = 1;

            while ($registro = $consulta->fetch(PDO::FETCH_ASSOC)) {
                echo "<tr>";
                echo "<td>" . $numFila . "</td>";
                echo "<td class='text-center d-none'>" . $registro['id_producto_venta'] . "</td>";
                echo "<td class='text-center d-none'>" . $registro['id_producto'] . "</td>";
                echo "<td class='text-center d-none'>" . $registro['id_venta'] . "</td>";
                echo "<td class='text-center'>" . $registro['fecha'] . "</td>";
                echo "<td class='text-center'>" . $registro['hora'] . "</td>";
                echo "<td class='text-center'>" . $registro['precio_total'] . "</td>";
                echo "<td class='text-center'>" . $registro['cantidad_venta'] . "</td>";
                echo "<td class='text-center'><div class='btn-group' role='group' aria-label='Grupo botones'><button type='submit' id='botonDetalleVenta' class='btn btn-success btn-sm' data-btn-grupo='mostrar-detalles-ventas'><i class='bi bi-eye'></i></button></div></td>";
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
