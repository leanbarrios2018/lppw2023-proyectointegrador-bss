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
	// generar tbody aca
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
				foreach($producto as $valor) {
					if($valor['estado'] == 1) {
						$valor['estado'] = 'Habilitado';
						$respuesta .= '<tr>';
						$respuesta .= '<td>' . $valor["id_producto"] . '</td>';
						$respuesta .= '<td>' . $valor["nombre"] . '</td>';
						$respuesta .= '<td>' . $valor["marca"] . '</td>';
						$respuesta .= '<td>' . $valor['precio_compra'] . '</td>';
						$respuesta .= '<td>' . $valor["precio_venta"] . '</td>';
						$respuesta .= '<td class="text-success">' . $valor['estado'] . '</td>';
						// mostrar grupo de botones
						$respuesta .= '<td>';
						$respuesta .= '<div class="btn-group" role="group" aria-label="Grupo botones">';
						// enviar datos por POST a la página para editar productos
		            $respuesta .= '<form id="frmEditarProducto" action="./modificar-producto.php" method="post">';
		            $respuesta .= '<input type="hidden" name="frmProductoID" value="' . $valor["id_producto"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoNombre" value="' . $valor["nombre"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoMarca" value="' . $valor["marca"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoPrecioCompra" value="' . $valor["precio_compra"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoPrecioVenta" value="' . $valor["precio_venta"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoEstado" value="' . $valor["estado"] . '">';
		            $respuesta .= '<button type="submit" class="btn btn-primary btn-sm" id="tblBtnEditarProducto" name="tblBtnEditarProducto">' . '<i class="bi bi-pencil"></i></button>';
		            $respuesta .= '</form>';
		            // inhabilitar producto seleccionado
		            $respuesta .= '<form action="../controlador/productos-op-cambiar-estado.php" id="frmInhabilitarProducto" method="POST">';
		            $respuesta .= '<input type="hidden" name="frmProductoID" value="' . $valor["id_producto"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoEstado" value="' . $valor["estado"] . '">';
		            $respuesta .= '<button type="submit" class="btn btn-danger btn-sm" id="tblBtnInhabilitarProducto" name="tblBtnInhabilitarProducto">';
		            $respuesta .= '<i class="bi bi-lock"></i>';
		            $respuesta .= '</button>';
		            $respuesta .= '</form>';
						$respuesta .= '</tr>';
					} else {
						$valor['estado'] = 'Inabilitado';
						$respuesta .= '<tr>';
						$respuesta .= '<td>' . $valor["id_producto"] . '</td>';
						$respuesta .= '<td>' . $valor["nombre"] . '</td>';
						$respuesta .= '<td>' . $valor["marca"] . '</td>';
						$respuesta .= '<td>' . $valor["precio_compra"] . '</td>';
						$respuesta .= '<td>' . $valor["precio_venta"] . '</td>';
						$respuesta .= '<td class="text-danger">' . $valor['estado'] . '</td>';
						// mostrar grupo de botones
						$respuesta .= '<td>';
						$respuesta .= '<div class="btn-group" role="group" aria-label="Grupo botones">';
						// enviar datos por POST a la página para editar productos
		            $respuesta .= '<form action="#" method="">';
		            $respuesta .= '<input type="hidden" name="frmProductoID" value="' . $valor["id_producto"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoNombre" value="' . $valor["nombre"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoMarca" value="' . $valor["marca"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoPrecioCompra" value="' . $valor["precio_compra"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoPrecioVenta" value="' . $valor["precio_venta"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoEstado" value="' . $valor["estado"] . '">';
		            $respuesta .= '<button type="submit" class="btn btn-primary btn-sm" id="tblBtnEditarProducto" name="tblBtnEditarProducto">';
		            $respuesta .= '<i class="bi bi-pencil"></i>';
		            $respuesta .= '</button>';
		            $respuesta .= "</form>";
		            // habilitar producto seleccionado
		            $respuesta .= '<form id="frmHabilitarProducto" action="../controlador/productos-op-cambiar-estado.php" method="POST">';
		            $respuesta .= '<input type="hidden" name="frmProductoID" id="frmProductoID" value="' . $valor["id_producto"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoEstado" id="frmProductoEstado" value="' . $valor["estado"] . '">';
		            $respuesta .= '<button type="submit" class="btn btn-secondary btn-sm" id="tblBtnHabilitarProducto" name="tblBtnHabilitarProducto">';
		            $respuesta .= '<i class="bi bi-unlock"></i>';
		            $respuesta .= '</button>';
		            $respuesta .= '</form>';
						$respuesta .= '</tr>';
					}
				}
			}
		}
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
	// public function eliminarProducto() {}
	public function test_input($dato) {
	$dato = trim($dato);
	$dato = stripcslashes($dato);
	$dato = htmlspecialchars($dato);
	return $dato;
	}
}
?>