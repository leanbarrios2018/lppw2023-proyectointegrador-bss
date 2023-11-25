window.onload = inicio;

function inicio() {
	generarTbody();
}

function generarTbody() {
	let json_productos = "../controlador/traer-productos.php";
	fetch(json_productos)
	.then(function (response) {
		if (!response.ok) {
			throw new Error('Error en la llamada a la API: ' + response.statusText);
		}
		return response.text();
	})
	.then(function (productos) {
		let tbody_productos = document.getElementById("tbodyProductos");
		// traer el tbody generado en el metodo generarTbody()
		tbody_productos.innerHTML = productos;
	})
	.catch(function (error) {
		console.error('Error:', error)
		// console.error("Ocurrio un problema con la solicitud fetch: " + error);
	});
}


function json_mostrar_productos() {
	let json_productos = "../controlador/traer-productos.php";
	fetch(json_productos)
	.then(function (response) {
		if (!response.ok) {
			throw new Error('Error en la llamada a la API: ' + response.statusText);
		}
		// return response.text();
		return response.json();
	})
	.then(function (productos) {
		let tbody_productos = document.getElementById("tbodyProductos");
		tbody_productos.innerHTML = productos;
		// generar el tbody con la lista de productos traidas por json
		for (producto of productos) {
			for (valor of producto) {
				let tr = document.createElement('tr');
				tr.innerHTML = `
				<td>${valor.id_producto}</td>
				<td>${valor.nombre}</td>
				<td>${valor.marca}</td>
				<td>${valor.precio_compra}</td>
				<td>${valor.precio_venta}</td>
				<td>
				<div class='btn-group' role='group' aria-label='Grupo botones'>
				<!-- enviar datos por POST a la página para editar productos -->
            <form action='./modificar-producto.php' method='post'>
            <input type='hidden' name='frmProductoID' value='${valor.id_producto}'>
            <input type='hidden' name='frmProductoNombre' value='${valor.nombre}'>
            <input type='hidden' name='frmProductoMarca' value='${valor.marca}'>
            <input type='hidden' name='frmProductoPrecioCompra' value='${valor.precio_compra}'>
            <input type='hidden' name='frmProductoPrcioVenta' value='${valor.precio_venta}'>
            <button type='submit' class='btn btn-primary btn-sm' name='tblBtnEditarProducto'>
            <i class='bi bi-pencil'></i>
            </button>
            </form>
            <!-- enviar datos por POST a la página para borrar productos -->
            <form action='./eliminar-producto.php' method='post'>
            <input type='hidden' name='frmProductoID' value='${valor.id_producto}'>
            <input type='hidden' name='frmProductoNombre' value='${valor.nombre}'>
            <input type='hidden' name='frmProductoMarca' value='${valor.marca}'>
            <input type='hidden' name='frmProductoPrecioCompra' value='${valor.precio_compra}'>
            <input type='hidden' name='frmProductoPrcioVenta' value='${valor.precio_venta}'>
            <button type='submit' class='btn btn-danger btn-sm' name='tblBtnEliminarProducto'>
            <i class='bi bi-trash'></i>
            </button>
            </form>
				</td>
				`;
				tbody_productos.appendChild(tr);
			}
		}
	})
	.catch(function (error) {
		console.error('Error:', error)
		// console.error("Ocurrio un problema con la solicitud fetch: " + error);
	});
}
