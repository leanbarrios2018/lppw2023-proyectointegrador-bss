<?php



class Producto
{
	private $id;
	private $nombre;
	private $marca;
	private $precio_compra;
	private $precio_venta;
	private $habilitado;

	function __construct($id, $nombre, $marca, $precio_compra, $precio_venta, $habilitado)
	{
		$this->id = $id;
		$this->nombre = $nombre;
		$this->marca = $marca;
		$this->precio_compra = $precio_compra;
		$this->precio_venta = $precio_venta;
		$this->habilitado = $habilitado;
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
	function getHabilitado() {
		return $this->habilitado;
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
	function setHabilitado($habilitado) {
		$this->habilitado = $habilitado;
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

	public static function getProductoById() {
	  require_once 'resources/include/conexion_bbdd_estockear.php';
	  /** @var \PDO $conn */
	}

	public function insertNuevoProducto() {
	  require_once 'resources/include/conexion_bbdd_estockear.php';
	  /** @var \PDO $conn */
	}

	public function updateProducto() {
	  require_once 'resources/include/conexion_bbdd_estockear.php';
	  /** @var \PDO $conn */
	}

	public function updateEstadoProducto($id, $habilitado) {
	  require_once 'resources/include/conexion_bbdd_estockear.php';
	  /** @var \PDO $conn */
	}

	//public function deleteProducto($id) {}
}
?>