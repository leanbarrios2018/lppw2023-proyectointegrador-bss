<?php



class Producto
{
	protected $id;
	protected $nombre;
	protected $marca;
	protected $precio_compra;
	protected $precio_venta;
	protected $estado;
	// construct
	public function __construct($id, $nombre, $marca, $precio_compra, $precio_venta, $estado)
	{
		$this->id = $id;
		$this->nombre = $nombre;
		$this->marca = $marca;
		$this->precio_compra = $precio_compra;
		$this->precio_venta = $precio_venta;
		$this->estado = $estado;
	}
	// getters
	public function getId() {
		return $this->id;
	}
	public function getNombre() {
		return $this->nombre;
	}
	public function getMarca() {
		return $this->marca;
	}
	public function getPrecioCompra() {
		return $this->precio_compra;
	}
	public function getPrecioVenta() {
		return $this->precio_venta;
	}
	public function getEstado() {
		return $this->estado;
	}
	// setters
	public function setId($id) {
		$this->id = $id;
	}
	public function setNombre($nombre) {
		$this->nombre = $nombre;
	}
	public function setMarca($marca) {
		$this->marca = $marca;
	}
	public function setPrecioCompra($precio_compra) {
		$this->precio_compra = $precio_compra;
	}
	public function setPrecioVenta($precio_venta) {
		$this->precio_venta = $precio_venta;
	}
	public function setEstado($estado) {
		$this->estado = $estado;
	}
	// desstruct
	public function __desstruct () {}

	public static function getProductos() {
		require '../resources/include/conexion-bbdd-estockear.php';
		  /** @var \PDO $conn */
		  $productos = array();
		  try 
		  {
		   $sql_get_productos = 'SELECT prod.id_producto, prod.nombre, prod.marca, prod.precio_compra, prod.precio_venta, prod.estado, 
		   cat_prod.id_categoria, cat_prod.id_producto,
		   cat.id_categoria, cat.nombre AS nombre_categoria
		   FROM productos prod
		   INNER JOIN categorias_productos cat_prod ON prod.id_producto = cat_prod.id_producto
		   INNER JOIN categorias cat ON cat_prod.id_categoria = cat.id_categoria';
		   $objQuery = $conn->prepare($sql_get_productos);
		   $objQuery->execute();
		   while ($row = $objQuery->fetch(\PDO::FETCH_ASSOC)) {
		    array_push($productos, $row);
		   }
		   return $productos;
		  } catch (Exception $e) {
		   echo "Error inesperado en getProductos: " . $e->getMessage();
		   die();
		  }
		}

	public static function getProductosUsandoLimit($inicio, $registros) {
		require '../resources/include/conexion-bbdd-estockear.php';
		/** @var \PDO $conn */
		$productos = array();
		$inicio = intval($inicio);
		$registros = intval($registros);
		try {
			$sql_get_productos = 'SELECT * FROM productos LIMIT :inicio, :registros';
			// $sql_get_productos = 'SELECT * FROM productos LIMIT' . $inicio . ',' . $registros;
			$objQuery = $conn->prepare($sql_get_productos);
			$objQuery->bindValue(":inicio", $inicio, \PDO::PARAM_INT);
			$objQuery->bindValue(":registros", $registros, \PDO::PARAM_INT);
			$objQuery->execute();
			while ($row = $objQuery->fetch(\PDO::FETCH_ASSOC)) {
				array_push($productos, $row);
			}
			return $productos;
		} catch (Exception $e) {
			echo "Error inesperado en getProductosUsandoLimit: " . $e->getMessage();
			die();
		}
	}

	public static function getProductosByJSON() {
		require '../resources/include/conexion-bbdd-estockear.php';
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
	   echo "Error inesperado en getProductosByJSON: " . $e->getMessage();
	   die();
	  }
	}

	public static function countAllProductos() {
		require '../resources/include/conexion-bbdd-estockear.php';
		/** @var \PDO $conn */
		$productos = array();
		try {
			$sql_get_productos = 'SELECT * FROM productos';
			$objQuery = $conn->prepare($sql_get_productos);
			$objQuery->execute();
			$num_registros = $objQuery->rowCount();
			return $num_registros;
	  } catch (Exception $e) {
	   echo "Error inesperado en countAllProductos: " . $e->getMessage();
	   die();
	  }
	}

	public static function getProductoById($id) {
	  require '../resources/include/conexion-bbdd-estockear.php';
	  /** @var \PDO $conn */
	  try {
	   $sql_get_productos = 'SELECT * FROM productos WHERE id_producto = :id';
	   $objQuery = $conn->prepare($sql_get_productos);
	   $objQuery->bindParam(':id', $id);
	   $objQuery->execute();
	   while ($row = $objQuery->fetch(\PDO::FETCH_ASSOC)) {
	    array_push($productos, $row);
	   }
	   return $productos;
	  } catch (Exception $e) {
	   echo "Error inesperado getProductoById: " . $e->getMessage();
	   die();
	  }
	}
	// -- Primero, obtén el ID de la categoría basado en su nombre
	// DECLARE @nombreCategoria NVARCHAR(50);
	// SET @nombreCategoria = 'Nombre de la Categoría'; -- Reemplaza esto con el nombre de la categoría deseada

	// DECLARE @idCategoria INT;
	// SELECT @idCategoria = id_categoria
	// FROM categoria
	// WHERE nombre_categoria = @nombreCategoria;

	// -- Luego, inserta el nuevo producto en la tabla productos
	// INSERT INTO productos (id_producto, nombre, marca, precio_compra, precio_venta, estado)
	// VALUES (nuevo_id_producto, 'Nombre Producto', 'Marca Producto', precio_compra, precio_venta, 'Estado Producto');

	// -- Finalmente, inserta la relación en la tabla intermedia categoria_producto
	// INSERT INTO categoria_producto (id_producto, id_categoria)
	// VALUES (nuevo_id_producto, @idCategoria);
	public function insertNuevoProducto() {
	  require '../resources/include/conexion-bbdd-estockear.php';
	  /** @var \PDO $conn */
	  
	}

	public function updateProducto() {
	  require '../resources/include/conexion-bbdd-estockear.php';
	  /** @var \PDO $conn */
	}

	public function updateEstadoProducto($id, $nuevo_estado) {
	  require '../resources/include/conexion-bbdd-estockear.php';
	  /** @var \PDO $conn */
	  try {
	  	$sql_update_estado_producto = "UPDATE productos SET estado = :nuevo_estado WHERE id_producto = :id";
	  	$objQuery = $conn->prepare($sql_update_estado_producto);
	  	$objQuery->bindParam(':nuevo_estado', $nuevo_estado);
	  	$objQuery->bindParam(':id', $id);
	  	$objQuery->execute();
	  	} catch (Exception $e) {
	  	echo "Error inesperado en updateEstadoProducto: " . $e->getMessage();
	  }
	}

}
?>