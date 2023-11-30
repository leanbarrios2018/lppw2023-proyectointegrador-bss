<?php 

class Categoria {
	protected $id;
	protected $nombre;

	public function __construct($id, $nombre) {
		$this->id = $id;
		$this->nombre = $nombre;
	}
	
	public function getId() {
		return $this->id;
	}
	public function getNombre() {
		return $this->nombre;
	}
	public function setId($id) {
		$this->id = $id;
	}
	public function setNombre($nombre) {
		$this->nombre = $nombre;
	}
	public function __desstruct () {}

	public static function getCategorias() {
		require '../resources/include/conexion-bbdd-estockear.php';
		/** @var \PDO $conn */
		$categorias = array();
		try {
			$sql_get_categorias = 'SELECT * FROM categorias ORDER BY nombre ASC';
		   $objQuery = $conn->prepare($sql_get_categorias);
		   $objQuery->execute();
		   while ($row = $objQuery->fetch(\PDO::FETCH_ASSOC)) {
		    array_push($categorias, $row);
		   }
		   return $categorias;
		  } catch (Exception $e) {
		   echo "Error en getCategorias: " . $e->getMessage();
		   die();
		  }
		}
	public static function getCategoriasById($id) {
	  require '../resources/include/conexion-bbdd-estockear.php';
	  /** @var \PDO $conn */
	  $categoria = array();
	  try {
	   $sql_get_categoria_by_id = 'SELECT * FROM categorias WHERE id_categoria = :id';
	   $objQuery = $conn->prepare($sql_get_categoria_by_id);
	   $objQuery->bindParam(':id', $id);
	   $objQuery->execute();
	   while ($row = $objQuery->fetch(\PDO::FETCH_ASSOC)) {
	    array_push($categoria, $row);
	   }
	   return $categoria;
	  } catch (Exception $e) {
	   echo "Error en getCategoriaById: " . $e->getMessage();
	   die();
	  }
	}
	public function insertNuevaCategoria() {
	  require '../resources/include/conexion-bbdd-estockear.php';
	  /** @var \PDO $conn */
	}
	public function updateCategoria($id, $nombre) {
	  require '../resources/include/conexion-bbdd-estockear.php';
	  /** @var \PDO $conn */
	}
	public function deleteCategoria() {}
}

?>