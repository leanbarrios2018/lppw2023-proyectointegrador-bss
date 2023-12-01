<?php require_once "dbTwo.php" ?>

<?php
class Notificadores
{
    private $conn;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }
    public function SelectNotificadores()
    {
        $nroFila = 1;
        $consulta = "SELECT 
        n.ID_notificador, 
        n.ID_usuario_registrado, 
        n.ID_categoria, 
        n.ID_producto, 
        n.Nivel,
        p.nombre,
        p.marca,
        p.precio_compra,
        p.precio_venta,
        p.estado,
        c.nombre AS nombre_categoria,
        ps.id_producto_stock,
        ps.id_stock,
        s.cantidad,
        s.log_abm
        FROM 
        notificador n
        INNER JOIN 
            productos p ON n.ID_producto = p.id_producto
        INNER JOIN 
            categorias c ON n.ID_categoria = c.id_categoria
        INNER JOIN 
            productos_stock ps ON p.id_producto = ps.id_producto
        INNER JOIN 
            stock s ON ps.id_stock = s.id_stock";
        $resultado = $this->conn->query($consulta);

        while ($registro = $resultado->fetch()) {
            echo "<tr>";
            echo "<td class='text-center'>" . $nroFila . "</td>";
            echo "<td class='text-center d-none'>" . $registro['ID_notificador'] . "</td>";
            echo "<td class='text-center d-none'>" . $registro['ID_usuario_registrado'] . "</td>";
            echo "<td class='text-center'>" . $registro['Nivel'] . "</td>";
            echo "<td class='text-center d-none'>" . $registro['ID_producto'] . "</td>";
            echo "<td class='text-center'>" . $registro['nombre'] . "</td>";
            echo "<td class='text-center ocultar-en-pantalla-xs ocultar-en-pantalla-sm'>" . $registro['marca'] . "</td>";
            echo "<td class='text-center ocultar-en-pantalla-xs ocultar-en-pantalla-sm'>" . $registro['cantidad'] . "</td>";
            echo "<td class='text-center d-none'>" . $registro['ID_categoria'] . "</td>";
            echo "<td class='text-center ocultar-en-pantalla-xs ocultar-en-pantalla-sm'>" . $registro['nombre_categoria'] . "</td>";
            echo "<td class='text-center'><div class='btn-group' role='group' aria-label='Grupo botones'><button class='btn btn-primary btn-sm' data-btn-grupo='modificar-indicador'><i class='bi bi-pencil'></i></div></td>";
            echo "</tr>";
            $nroFila++;
        }

        try {
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    }
}


?>