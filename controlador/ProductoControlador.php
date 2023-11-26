<?php
require_once "../modelo/Producto.php";
class ProductoControlador
{
	public function traerProductos() {
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
						$respuesta .= '<tr>';
						$respuesta .= '<td>' . $valor["id_producto"] . '</td>';
						$respuesta .= '<td>' . $valor["nombre"] . '</td>';
						$respuesta .= '<td>' . $valor["marca"] . '</td>';
						$respuesta .= '<td>' . $valor['precio_compra'] . '</td>';
						$respuesta .= '<td>' . $valor["precio_venta"] . '</td>';
						$respuesta .= '<td class="text-success">Habilitado</td>';
						// mostrar grupo de botones
						$respuesta .= '<td>';
						$respuesta .= '<div class="btn-group" role="group" aria-label="Grupo botones">';
						// enviar datos por POST a la página para editar productos
		            $respuesta .= '<form action="./modificar-producto.php" method="post">';
		            $respuesta .= '<input type="hidden" name="frmProductoID" value="' . $valor["id_producto"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoNombre" value="' . $valor["nombre"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoMarca" value="' . $valor["marca"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoPrecioCompra" value="' . $valor["precio_compra"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoPrecioVenta" value="' . $valor["precio_venta"] . '">';
		            $respuesta .= '<button type="submit" class="btn btn-primary btn-sm" id="tblBtnEditarProducto" name="tblBtnEditarProducto">' . '<i class="bi bi-pencil"></i></button>';
		            $respuesta .= '</form>';
		            // elimina .=r producto seleccionado
		            $respuesta .= '<form action="../productos-mostrar-vista.php?id="' . $valor["id_producto"] . '&action=inhabilitar" method="post">';
		            $respuesta .= '<input type="hidden" name="frmProductoID" value="' . $valor["id_producto"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoEstado" value="' . $valor["estado"] . '">';
		            $respuesta .= '<button type="submit" class="btn btn-danger btn-sm" id="tblBtnInhabilitarProducto" name="tblBtnInhabilitarProducto">';
		            $respuesta .= '<i class="bi bi-lock"></i>';
		            $respuesta .= '</button>';
		            $respuesta .= '</form>';
						$respuesta .= '</tr>';
					} else {
						$respuesta .= '<tr>';
						$respuesta .= '<td>' . $valor["id_producto"] . '</td>';
						$respuesta .= '<td>' . $valor["nombre"] . '</td>';
						$respuesta .= '<td>' . $valor["marca"] . '</td>';
						$respuesta .= '<td>' . $valor["precio_compra"] . '</td>';
						$respuesta .= '<td>' . $valor["precio_venta"] . '</td>';
						$respuesta .= '<td class="text-danger">Inhabilitado</td>';
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
		            $respuesta .= '<button type="submit" class="btn btn-primary btn-sm" id="tblBtnEditarProducto" name="tblBtnEditarProducto">';
		            $respuesta .= '<i class="bi bi-pencil"></i>';
		            $respuesta .= '</button>';
		            $respuesta .= "</form>";
		            // elimina .=r producto seleccionado
		            // $respuesta .= '<form action="../productos-mostrar-vista.php?id="' . $valor["id_producto"] . '&action=habilitar" method="post">';
		            $respuesta .= '<form id="frmCambiarEstadoProducto" action="../productos-mostrar-vista.php?id="' . $valor["id_producto"] . '&op=habilitarProducto" method="post">';
		            $respuesta .= '<input type="hidden" name="frmProductoID" value="' . $valor["id_producto"] . '">';
		            $respuesta .= '<input type="hidden" name="frmProductoEstado" value="' . $valor["estado"] . '">';
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
		$productos = Producto::getProductosByJSON();
		// Convertir el resultado a formato JSON para enviarlo al js
		echo $productos;
	}
	public function agregarProducto() {

	}
	public function editarProduto() {

	}
	public function cambiarEstado() {
		if (isset($_POST['id']) && isset($_POST['op'])) {
			$id = $this->test_input($_POST['id']);
			$operacion = $this->test_input($_POST['op']);
			// pendiente hacer el cambio de estado del producto
		}
	}
	public function eliminarProducto() {

	}

	public function test_input($dato) {
	$dato = trim($dato);
	$dato = stripcslashes($dato);
	$dato = htmlspecialchars($dato);
	return $dato;
	}
}
?>