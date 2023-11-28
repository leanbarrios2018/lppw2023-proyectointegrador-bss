<?php

class selectVentas
{
    private $conn;
    private $fecha;

    private $hora;

    private $total;

    private $cantidad;

    public function __construct($conn, $fecha, $hora, $total, $cantidad)
    {
        $this->conn = $conn;
        $this->fecha = $fecha;
        $this->hora = $hora;
        $this->total = $total;
        $this->cantidad = $cantidad;
    }

    public function insertVentas()
    {
        $consultaInsert = "INSERT INTO `ventas`(`fecha`, `hora`, `precio_total`, `cantidad_venta`) 
        VALUES (:fecha,:hora,:precioTotal,:cantidadVenta)";

        try {
            $consulta = $this->conn->prepare($consultaInsert);
            $consulta->bindParam(':fecha', $this->fecha);
            $consulta->bindParam(':hora', $this->hora);
            $consulta->bindParam(':precioTotal', $this->total);
            $consulta->bindParam(':cantidadVenta', $this->cantidad);
            $consulta->execute();
        } catch (PDOException $e) {
            throw new Exception("Error al insertar en la base de datos: " . $e->getMessage());
        }
    }
}
