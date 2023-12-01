<?php
class ProductoControlador
{
	public function traerProductos() {
		require_once "../modelo/Producto.php";
		$productos = Producto::getProductos();
		if (sizeof($productos) == 0) {
			$msj_error = 'No se encontraron productos';
			$vista_msj_error_ruta = 'vista/msj-error.php';
			require_once $vista_msj_error_ruta;
			return;
		} else {
		}
	}
	// generar tbody aca (sin paginador)
	public function generarTbody() {
		require_once "../modelo/Producto.php";
		$respuesta = "";
		$msj_error = "";
		$productos = Producto::getProductos();
		if (sizeof($productos) == 0) {
			$msj_error = 'No se encontraron productos';
			$vista_msj_error_ruta = 'vista/msj-error.php';
			require_once $vista_msj_error_ruta;
			return;
		} else {
			foreach ($productos as $producto) {
					if($producto['estado'] == 1) {
						$producto['estado'] = 'Habilitado';
						$respuesta .= '<tr>';
						$respuesta .= '<td class="ocultar-en-pantalla-xs ocultar-en-pantalla-sm">' . $producto["id_producto"] . '</td>';
						$respuesta .= '<td>' . $producto["nombre"] . '</td>';
						$respuesta .= '<td class="ocultar-en-pantalla-xs ocultar-en-pantalla-sm ocultar-en-pantalla-md">' . $producto["marca"] . '</td>';
						$respuesta .= '<td class="ocultar-en-pantalla-xs ocultar-en-pantalla-sm ocultar-en-pantalla-md">' . $producto["nombre_categoria"] . '</td>';
						$respuesta .= '<td class="ocultar-en-pantalla-xs">' . $producto['precio_compra'] . '</td>';
						$respuesta .= '<td class="ocultar-en-pantalla-xs">' . $producto["precio_venta"] . '</td>';
						$respuesta .= '<td class="text-success">' . $producto['estado'] . '</td>';
						// mostrar grupo de botones
						$respuesta .= '<td>';
						$respuesta .= '<div class="btn-group" role="group" aria-label="Grupo botones">';
						// mostrar detalles del producto seleccionado
		            $respuesta .= '<button type="button" class="btn btn-success btn-sm ocultar-en-pantalla-lg ocultar-en-pantalla-xl ocultar-en-pantalla-xxl" id="tblBtnMostrarDetallesProducto" name="tblBtnMostrarDetallesProducto" data-btn-grupo="mostrar-detalles-productos">';
		            $respuesta .= '<i class="bi bi-eye"></i>';
		            $respuesta .= '</button>';
		            // enviar datos por POST a la página para editar productos
		            $respuesta .= '<form id="frmEditarProducto" action="./modificar-producto.php" method="post">';
		            $respuesta .= '<input type="hidden" name="frmProductoID" value="' . $producto["id_producto"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoNombre" value="' . $producto["nombre"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoMarca" value="' . $producto["marca"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoPrecioCompra" value="' . $producto["precio_compra"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoPrecioVenta" value="' . $producto["precio_venta"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoEstado" value="' . $producto["estado"] . '">';
		            $respuesta .= '<button type="submit" class="btn btn-primary btn-sm" id="tblBtnEditarProducto" name="tblBtnEditarProducto">' . '<i class="bi bi-pencil"></i></button>';
		            $respuesta .= '</form>';
		            // inhabilitar producto seleccionado
		            $respuesta .= '<form action="../controlador/productos-op-cambiar-estado.php" id="frmInhabilitarProducto" method="POST">';
		            $respuesta .= '<input type="hidden" name="frmProductoID" value="' . $producto["id_producto"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoEstado" value="' . $producto["estado"] . '">';
		            $respuesta .= '<button type="submit" class="btn btn-danger btn-sm" id="tblBtnInhabilitarProducto" name="tblBtnInhabilitarProducto">';
		            $respuesta .= '<i class="bi bi-lock"></i>';
		            $respuesta .= '</button>';
		            $respuesta .= '</form>';
						$respuesta .= '</tr>';
					}
					else {
						$producto['estado'] = 'Inabilitado';
						$respuesta .= '<tr>';
						$respuesta .= '<td class="ocultar-en-pantalla-xs ocultar-en-pantalla-sm">' . $producto["id_producto"] . '</td>';
						$respuesta .= '<td>' . $producto["nombre"] . '</td>';
						$respuesta .= '<td class="ocultar-en-pantalla-xs ocultar-en-pantalla-sm ocultar-en-pantalla-md">' . $producto["marca"] . '</td>';
						$respuesta .= '<td class="ocultar-en-pantalla-xs ocultar-en-pantalla-sm ocultar-en-pantalla-md">' . $producto["nombre_categoria"] . '</td>';
						$respuesta .= '<td class="ocultar-en-pantalla-xs">' . $producto["precio_compra"] . '</td>';
						$respuesta .= '<td class="ocultar-en-pantalla-xs">' . $producto["precio_venta"] . '</td>';
						$respuesta .= '<td class="text-danger">' . $producto['estado'] . '</td>';
						// mostrar grupo de botones
						$respuesta .= '<td>';
						$respuesta .= '<div class="btn-group" role="group" aria-label="Grupo botones">';
						// mostrar detalle del producto seleccionado
		            $respuesta .= '<button type="button" class="btn btn-success btn-sm ocultar-en-pantalla-lg ocultar-en-pantalla-xl ocultar-en-pantalla-xxl" id="tblBtnMostrarDetallesProducto" name="tblBtnMostrarDetallesProducto" data-btn-grupo="mostrar-detalles-productos">';
		            $respuesta .= '<i class="bi bi-eye"></i>';
		            $respuesta .= '</button>';
						// enviar datos por POST a la página para editar productos
		            $respuesta .= '<form action="#" method="">';
		            $respuesta .= '<input type="hidden" name="frmProductoID" value="' . $producto["id_producto"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoNombre" value="' . $producto["nombre"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoMarca" value="' . $producto["marca"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoPrecioCompra" value="' . $producto["precio_compra"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoPrecioVenta" value="' . $producto["precio_venta"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoEstado" value="' . $producto["estado"] . '">';
		            $respuesta .= '<button type="submit" class="btn btn-primary btn-sm" id="tblBtnEditarProducto" name="tblBtnEditarProducto" data-btn-grupo="mostrar-detalles-productos">';
		            $respuesta .= '<i class="bi bi-pencil"></i>';
		            $respuesta .= '</button>';
		            $respuesta .= "</form>";
		            // habilitar producto seleccionado
		            $respuesta .= '<form id="frmHabilitarProducto" action="../controlador/productos-op-cambiar-estado.php" method="POST">';
		            $respuesta .= '<input type="hidden" name="frmProductoID" id="frmProductoID" value="' . $producto["id_producto"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoEstado" id="frmProductoEstado" value="' . $producto["estado"] . '">';
		            $respuesta .= '<button type="submit" class="btn btn-secondary btn-sm" id="tblBtnHabilitarProducto" name="tblBtnHabilitarProducto">';
		            $respuesta .= '<i class="bi bi-unlock"></i>';
		            $respuesta .= '</button>';
		            $respuesta .= '</form>';
						$respuesta .= '</tr>';
					}
			}
			echo $respuesta;
		}
	}
	// generar select para formulario
	public function generarSelectCategoriaParaFormuario(){
		require_once "../modelo/Categoria.php";
		/** @var \PDO $conn */
		$respuesta = '';
		$categorias = Categoria::getCategorias();
		// guardar select en $respuesta para que lo reciba la vista por medio de AJAX
		$respuesta .= '<label for="frmSelectNuevoProductoCategoria" class="form-label">Categoria</label>';
		$respuesta .= '<select class="form-select" id="frmSelectNuevoProductoCategoria" name="frmSelectNuevoProductoCategoria" aria-label="Seleccione la categoria del producto">';
		$respuesta .= '<option selected></option>';
		foreach ($categorias as $categoria) {
			$respuesta .= '<option value="' . $categoria["id_categoria"] . '">' . $categoria["nombre"] . '</option>';
		}
		$respuesta .= '</select>';
		$respuesta .= '<div class="invalid-feedback" id="errorSelectNuevoProductoCategoria"></div>';
		echo $respuesta;
	}
	// generar tbody para el paginador 
	// (paginador funciona, pero no muestra los productos de acuerdo a la pagina clickeada)
	public function generarTablaConPaginador() {
		require_once "../modelo/Producto.php";
		/** @var \PDO $conn */

		// Obtener el número total de productos
		$total_productos = Producto::countAllProductos();

		// Calcular el número total de páginas
		$productos_por_pagina = 2;
		$total_paginas = ceil($total_productos / $productos_por_pagina);

		// Obtener el número de página actual
		if (isset($_GET['pagina'])) {
			$pagina_actual = $this->test_input($_GET['pagina']);
		} else {
			$pagina_actual = 1;
		}

		// Calcular el inicio y fin de la consulta
		$inicio = ($pagina_actual - 1) * $productos_por_pagina;

		// Obtener los productos según la página actual
		$productos = Producto::getProductosUsandoLimit($inicio, $productos_por_pagina);

		$respuesta = '';
		// tabla
		$respuesta .= '<div class="table-responsive">';
		$respuesta .= '<table class="table table-dark table-stripped">';
		$respuesta .= '<thead>';
		$respuesta .= '<th>ID Producto</th>';
		$respuesta .= '<th>Nombre</th>';
		$respuesta .= '<th>Marca</th>';
		$respuesta .= '<th>Precio de compra</th>';
		$respuesta .= '<th>Precio de venta</th>';
		$respuesta .= '<th>Estado</th>';
		$respuesta .= '<th>Acciones</th>';
		$respuesta .= '</thead>';
		$respuesta .= '<tbody>';
		foreach ($productos as $producto) {
			if($producto['estado'] == 1) {
				$producto['estado'] = 'Habilitado';
				$respuesta .= '<tr>';
				$respuesta .= '<td>' . $producto["id_producto"] . '</td>';
				$respuesta .= '<td>' . $producto["nombre"] . '</td>';
				$respuesta .= '<td>' . $producto["marca"] . '</td>';
				$respuesta .= '<td>' . $producto['precio_compra'] . '</td>';
				$respuesta .= '<td>' . $producto["precio_venta"] . '</td>';
				$respuesta .= '<td class="text-success">' . $producto['estado'] . '</td>';
				// mostrar grupo de botones
				$respuesta .= '<td>';
				$respuesta .= '<div class="btn-group" role="group" aria-label="Grupo botones">';
				// enviar datos por POST a la página para editar productos
            $respuesta .= '<form id="frmEditarProducto" action="./modificar-producto.php" method="post">';
            $respuesta .= '<input type="hidden" name="frmProductoID" value="' . $producto["id_producto"] . '">';
            $respuesta .= '<input type="hidden" name="frmProductoNombre" value="' . $producto["nombre"] . '">';
            $respuesta .= '<input type="hidden" name="frmProductoMarca" value="' . $producto["marca"] . '">';
            $respuesta .= '<input type="hidden" name="frmProductoPrecioCompra" value="' . $producto["precio_compra"] . '">';
            $respuesta .= '<input type="hidden" name="frmProductoPrecioVenta" value="' . $producto["precio_venta"] . '">';
            $respuesta .= '<input type="hidden" name="frmProductoEstado" value="' . $producto["estado"] . '">';
            $respuesta .= '<button type="submit" class="btn btn-primary btn-sm" id="tblBtnEditarProducto" name="tblBtnEditarProducto">' . '<i class="bi bi-pencil"></i></button>';
            $respuesta .= '</form>';
            // inhabilitar producto seleccionado
            $respuesta .= '<form action="../controlador/productos-op-cambiar-estado.php" id="frmInhabilitarProducto" method="POST">';
            $respuesta .= '<input type="hidden" name="frmProductoID" value="' . $producto["id_producto"] . '">';
            $respuesta .= '<input type="hidden" name="frmProductoEstado" value="' . $producto["estado"] . '">';
            $respuesta .= '<button type="submit" class="btn btn-danger btn-sm" id="tblBtnInhabilitarProducto" name="tblBtnInhabilitarProducto">';
            $respuesta .= '<i class="bi bi-lock"></i>';
            $respuesta .= '</button>';
            $respuesta .= '</form>';
				$respuesta .= '</tr>';
			}
			else {
				$producto['estado'] = 'Inabilitado';
				$respuesta .= '<tr>';
				$respuesta .= '<td>' . $producto["id_producto"] . '</td>';
				$respuesta .= '<td>' . $producto["nombre"] . '</td>';
				$respuesta .= '<td>' . $producto["marca"] . '</td>';
				$respuesta .= '<td>' . $producto["precio_compra"] . '</td>';
				$respuesta .= '<td>' . $producto["precio_venta"] . '</td>';
				$respuesta .= '<td class="text-danger">' . $producto['estado'] . '</td>';
				// mostrar grupo de botones
				$respuesta .= '<td>';
				$respuesta .= '<div class="btn-group" role="group" aria-label="Grupo botones">';
				// enviar datos por POST a la página para editar productos
            $respuesta .= '<form action="#" method="">';
            $respuesta .= '<input type="hidden" name="frmProductoID" value="' . $producto["id_producto"] . '">';
            $respuesta .= '<input type="hidden" name="frmProductoNombre" value="' . $producto["nombre"] . '">';
            $respuesta .= '<input type="hidden" name="frmProductoMarca" value="' . $producto["marca"] . '">';
            $respuesta .= '<input type="hidden" name="frmProductoPrecioCompra" value="' . $producto["precio_compra"] . '">';
            $respuesta .= '<input type="hidden" name="frmProductoPrecioVenta" value="' . $producto["precio_venta"] . '">';
            $respuesta .= '<input type="hidden" name="frmProductoEstado" value="' . $producto["estado"] . '">';
            $respuesta .= '<button type="submit" class="btn btn-primary btn-sm" id="tblBtnEditarProducto" name="tblBtnEditarProducto">';
            $respuesta .= '<i class="bi bi-pencil"></i>';
            $respuesta .= '</button>';
            $respuesta .= "</form>";
            // habilitar producto seleccionado
            $respuesta .= '<form id="frmHabilitarProducto" action="../controlador/productos-op-cambiar-estado.php" method="POST">';
            $respuesta .= '<input type="hidden" name="frmProductoID" id="frmProductoID" value="' . $producto["id_producto"] . '">';
            $respuesta .= '<input type="hidden" name="frmProductoEstado" id="frmProductoEstado" value="' . $producto["estado"] . '">';
            $respuesta .= '<button type="submit" class="btn btn-secondary btn-sm" id="tblBtnHabilitarProducto" name="tblBtnHabilitarProducto">';
            $respuesta .= '<i class="bi bi-unlock"></i>';
            $respuesta .= '</button>';
            $respuesta .= '</form>';
				$respuesta .= '</tr>';
			}
	   }
		$respuesta .= '</tbody>';
		$respuesta .= '</table>';
		$respuesta .= '</div>';
		// paginador inicio
		$respuesta .= '<nav aria-label="Paginador productos">';
		$respuesta .= '<ul class="pagination justify-content-center">';
		// pagina anterior
		if ($pagina_actual > 1) {
			$respuesta .= '<li class="page-item">';
			$respuesta .= '<a class="page-link bg-dark text-light" href="./productos-mostrar-vista.php?pagina="' . $pagina_actual -1 . ' aria-label="Previous">';
			$respuesta .= '<span aria-hidden="true">&laquo;</span>';
			$respuesta .= '</a>';
			$respuesta .= '</li>';
		}
		for ($i = 1; $i <= $total_paginas; $i++) {
			$respuesta .= '<li class="page-item">';
			$respuesta .= '<a class="page-link bg-dark text-light" href="./productos-mostrar-vista.php?pagina=' . $i . '">' . $i . '</a>';
			$respuesta .= '</li>';	
		}
		if ($pagina_actual < $total_paginas) {
			$respuesta .= '<li class="page-item">';
			$respuesta .= '<a class="page-link bg-dark text-light" href="./productos-mostrar-vista.php?pagina="' . $pagina_actual +1 . ' aria-label="Next">';
			$respuesta .= '<span aria-hidden="true">&raquo;</span>';
			$respuesta .= '</a>';
			$respuesta .= '</li>';
			// cerrando paginador
			$respuesta .= '</ul>';
			$respuesta .= '</div>';
		}
		// paginador fin
		echo $respuesta;
	}

	// traer los productos por json
	public function mostrarTablaPorJSON() {
		require_once "../modelo/Producto.php";
		$productos = Producto::getProductosByJSON();
		// Convertir el resultado a formato JSON para enviarlo al js
		echo $productos;
	}
	public function agregarProducto() {
		require_once "../modelo/Producto.php";
		require_once "../modelo/Categoria.php";
		$array_errores = array();
		/** @var \PDO $conn */

		if (isset($_POST['frmNuevoProductoNombre']) && isset($_POST['frmNuevoNuevoProductoMarca']) && isset($_POST['frmNuevoNuevoProductoMarca']) && isset($_POST['frmSelectNuevoProductoCategoria']) && isset($_POST['frmNuevoProductoPrecioCompra']) && isset($_POST['frmNuevoProductoPrecioVenta']) && isset($_POST['frmSelectorNuevoProductoEstado'])) {
			$nombre_producto = $this->test_input($_POST['frmNuevoProductoNombre']);
			$str_word_count_nombre_producto = str_word_count($nombre_producto);
			$strlen_nombre_producto = strlen($nombre_producto);
			$marca = $this->test_input($_POST['frmNuevoNuevoProductoMarca']);
			$str_word_count_marca = str_word_count($marca);
			$strlen_marca = strlen($marca);
			$nombre_categoria = $this->test_input($_POST['frmSelectNuevoProductoCategoria']);
			$precio_compra = $this->test_input($_POST['frmNuevoProductoPrecioCompra']);
			$precio_venta = $this->test_input($_POST['frmNuevoProductoPrecioVenta']);
			$estado = $this->test_input($_POST['frmSelectorNuevoProductoEstado']);
			// validar nombre
			if (empty($nombre_producto)) {
				$array_errores['nombre_producto'] = "Nombre producto está vacío. Complete este campo";
			} else if ($str_word_count_nombre_producto < 2) {
				$array_errores['nombre_producto'] = "Nombre producto debe tener al menos 2 palabras.";
			} else if ($strlen_nombre_producto < 3 || $strlen_nombre_producto > 120) {
				$array_errores['nombre_producto'] = "Nombre del producto debe tener entre 3 a 120 caracteres.";
			} else {
				// nombre producto validado
			}
			// validar marca
			if (empty($marca)) {
				$array_errores['marca'] = "Marca está vacío. Complete este campo.";
			} else if ($str_word_count_marca < 2) {
				$array_errores['marca'] = "Marca debe tener al menos 2 palabras.";
			} else if ($strlen_marca < 3 || $strlen_marca > 120) {
				$array_errores['marca'] = "Marca debe tener entre 3 a 120 caracteres.";
			} else {
				// marca validado
			}
			// validar catgoria
			if (empty($categoria)) {
				$array_errores['categoria'] = "Categoria está vacío. Seleccione una de las opciones que se muestran al hacer click en el selector 'Categoría'.";
			} else {
				// categoria validado
			}
			// validar precio compra
			if (empty($precio_compra)) {
				$array_errores['precio_compra'] = "Precio compra está vacío. Complete este campo";
			} else if ($precio_compra < 0.49) {
				$array_errores['precio_compra'] = "Ingrese un precio de compra mayor a $0.50.";
			} else {
				// precio compra validado
			}
			// validar precio venta
			if (empty($precio_venta)) {
				$array_errores['precio_venta'] = "Precio de venta está vacío. Complete este campo";
			} else if ($precio_venta < 0.49) {
				$array_errores['precio_venta'] = "Ingrese un precio de venta mayor a $0.50.";
			} else {
				// precio venta validado
			}
			// validar estado
			if (empty($estado)) {
				$array_errores['estado'] = "Estado está vacío. Seleccione una de las opciones que se muestran al hacer click en el selector 'Estado'.";
			} else {
				// categoria validado - asignar "Habilitado" o "Inhabilitado"
				if ($estado == 'Habilitado') {
					$estado = (int) 0;
				} else if ($estado == 'Inhabilitado') {
					$estado = (int) 1;
				}
			}
			// ultima validacion
			if (count($array_errores) == 0) {
				//insertar producto
				$_SESSION["turno_registrado"] = true;
			} else {
				echo $array_errores;
			}
		}
	}
	public function editarProduto() {

	}
	public function cambiarEstado() {
		require_once "../modelo/Producto.php";
		if (isset($_POST['frmProductoID']) && isset($_POST['frmProductoEstado'])) {
			$id = $this->test_input($_POST['frmProductoID']);
			$estado = $this->test_input($_POST['frmProductoEstado']);
			if ($estado == 'Habilitado') {
				$nuevo_estado = 0;
				$actualizar_estado = new Producto($id, NULL, NULL, NULL, NULL, $nuevo_estado);
				$actualizar_estado->updateEstadoProducto($id, $nuevo_estado);
			} else {
				$nuevo_estado = 1;
				$actualizar_estado = new Producto($id, NULL, NULL, NULL, NULL, $nuevo_estado);
				$actualizar_estado->updateEstadoProducto($id, $nuevo_estado);
			}
			$vista_productos = "../vista/productos-mostrar-vista.php";
			header('Location: ' . $vista_productos . '?succes_ok=1', true, 303);
		}
	}

	public function testPaginador() {
		require '../resources/include/conexion-bbdd-estockear.php';
		$respuesta = '';
		try {
			// Obtener el número total de productos
			$stmt = $conn->prepare("SELECT COUNT(*) AS total FROM productos");
			$stmt->execute();
			$totalProductos = $stmt->fetch(PDO::FETCH_ASSOC)['total'];
			
		} catch (Exception $e) {
			echo "Error: " . $e->getMessage();
		}

		// Calcular el número total de páginas
		$productosPorPagina = 2;
		$totalPaginas = ceil($totalProductos / $productosPorPagina);

		// Obtener el número de página actual
		if (isset($_GET['pagina'])) {
			$paginaActual = isset($_GET['pagina']);
		} else {
			$paginaActual = 1;
		}

		// Calcular el inicio y fin de la consulta
		$inicio = ($paginaActual - 1) * $productosPorPagina;

		try {
			// Consulta para obtener los productos según la página actual
			$stmt = $conn->prepare("SELECT * FROM productos LIMIT :inicio, :productosPorPagina");
			$stmt->bindParam(':inicio', $inicio, PDO::PARAM_INT);
			$stmt->bindParam(':productosPorPagina', $productosPorPagina, PDO::PARAM_INT);
			$stmt->execute();
			$resultados = $stmt->fetch(PDO::FETCH_ASSOC);
		} catch (Exception $e) {
			echo "Error: " . $e->getMessage();
		}

		// Mostrar los productos en una tabla
		$respuesta .= '<table border="1">';
		$respuesta .= '<thead>';
		$respuesta .= '<tr>';
		$respuesta .= '<th>ID</th>';
		$respuesta .= '<th>Nombre</th>';
		$respuesta .= '<th>Marca</th>';
		$respuesta .= '<th>Precio compra</th>';
		$respuesta .= '<th>Precio venta</th>';
		$respuesta .= '<th>Estado</th>';
		$respuesta .= '</tr>';
		$respuesta .= '</thead>';
		$respuesta .= '<tbody>';
		foreach ($resultados as $producto) {
			$respuesta .= '<tr>';
			$respuesta .= '<td>' . $producto['id_producto'] . '</td>';
			$respuesta .= '<td>' . $producto['nombre'] . '</td>';
			$respuesta .= '<td>' . $producto['marca'] . '</td>';
			$respuesta .= '<td>' . $producto['precio_compra'] . '</td>';
			$respuesta .= '<td>' . $producto['precio_venta'] . '</td>';
			$respuesta .= '<td>' . $producto['estado'] . '</td>';
			$respuesta .= '</tr>';
		}
		$respuesta .= '</tbody>';
		$respuesta .= '</table>';
		// Mostrar el paginador
		$respuesta .= '<div>';
		for ($i = 1; $i <= $totalPaginas; $i++) {
			$respuesta .= "<a href='?pagina=$i'>$i</a> ";
		}
		$respuesta .= '</div>';
		echo $respuesta;
	}
	// public function eliminarProducto() {}
	public function test_input($dato) {
	$dato = trim($dato);
	$dato = stripcslashes($dato);
	$dato = htmlspecialchars($dato);
	return $dato;
	}
}
?>