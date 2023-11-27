<?php



class Producto
{
	private $id;
	private $nombre;
	private $marca;
	private $precio_compra;
	private $precio_venta;
	private $estado;

	function __construct($id, $nombre, $marca, $precio_compra, $precio_venta, $estado)
	{
		$this->id = $id;
		$this->nombre = $nombre;
		$this->marca = $marca;
		$this->precio_compra = $precio_compra;
		$this->precio_venta = $precio_venta;
		$this->estado = $estado;
	}

	function getId() {
		return $this->id;
	}
	function getNombre() {
		return $this->nombre;
	}
	function getMarca() {
		return $this->marca;
	}
	function getPrecioCompra() {
		return $this->precio_compra;
	}
	function getPrecioVenta() {
		return $this->precio_venta;
	}
	function getEstado() {
		return $this->estado;
	}

	function setId($id) {
		$this->id = $id;
	}
	function setNombre($nombre) {
		$this->nombre = $nombre;
	}
	function setMarca($marca) {
		$this->marca = $marca;
	}
	function setPrecioCompra($precio_compra) {
		$this->precio_compra = $precio_compra;
	}
	function setPrecioVenta($precio_venta) {
		$this->precio_venta = $precio_venta;
	}
	function setEstado($estado) {
		$this->estado = $estado;
	}

	function __desstruct () {

	}

	public static function getProductos() {
		require_once '../resources/include/conexion-bbdd-estockear.php';
		  /** @var \PDO $conn */
		  $productos = array();
		  try 
		  {
		   $sql_get_productos = 'SELECT * FROM productos';
		   $objQuery = $conn->prepare($sql_get_productos);
		   $objQuery->execute();
		   while ($row = $objQuery->fetchAll(\PDO::FETCH_ASSOC)) {
		    array_push($productos, $row);
		   }
		   return $productos;
		  } catch (Exception $e) {
		   echo "Error inesperado: " . $e->getMessage();
		   die();
		  }
		}	

	public static function getProductosByJSON() {
		require_once '../resources/include/conexion-bbdd-estockear.php';
		/** @var \PDO $conn */
	  $productos = array();
	  try 
	  {
	   $sql_get_productos = 'SELECT * FROM productos';
	   $objQuery = $conn->prepare($sql_get_productos);
	   $objQuery->execute();
	   while ($row = $objQuery->fetchAll(\PDO::FETCH_ASSOC)) {
	    array_push($productos, $row);
	   }
	   return json_encode($productos);
	  } catch (Exception $e) {
	   echo "Error inesperado: " . $e->getMessage();
	   die();
	  }
	}

	public static function getProductoById($id) {
	  require_once '../resources/include/conexion-bbdd-estockear.php';
	  /** @var \PDO $conn */
	  try {
	   $sql_get_productos = 'SELECT * FROM productos WHERE id_producto = :id';
	   $objQuery = $conn->prepare($sql_get_productos);
	   $objQuery->bindParam(':id', $id);
	   $objQuery->execute();
	   while ($row = $objQuery->fetchAll(\PDO::FETCH_ASSOC)) {
	    array_push($productos, $row);
	   }
	   return $productos;
	  } catch (Exception $e) {
	   echo "Error inesperado: " . $e->getMessage();
	   die();
	  }
	}

	public function insertNuevoProducto() {
	  require_once '../resources/include/conexion-bbdd-estockear.php';
	  /** @var \PDO $conn */
	}

	public function updateProducto() {
	  require_once '../resources/include/conexion-bbdd-estockear.php';
	  /** @var \PDO $conn */
	}

	public function updateEstadoProducto($id, $nuevo_estado) {
	  require_once '../resources/include/conexion-bbdd-estockear.php';
	  /** @var \PDO $conn */
	  try {
	  	$sql_update_estado_producto = "UPDATE productos SET estado = :nuevo_estado WHERE id_producto = :id";
	  	$objQuery = $conn->prepare($sql_update_estado_producto);
	  	$objQuery->bindParam(':nuevo_estado', $nuevo_estado);
	  	$objQuery->bindParam(':id', $id);
	  	$objQuery->execute();
	  	} catch (Exception $e) {
	  	echo "Error inesperado: " . $e->getMessage();
	  }
	}

	//public function deleteProducto($id) {}
}
?>