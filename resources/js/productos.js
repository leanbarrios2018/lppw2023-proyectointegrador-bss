window.onload = inicio;

function inicio() {
	mostrarSelectCategoriaParaFormulario();
	mostrarTbody();
	// alta producto //
	// mostrar formulario
	let boton_agregar_producto = document.getElementById("navBarBtnNuevoProducto");
	boton_agregar_producto.addEventListener("click", mostrar_formulario_alta_productos);
	// cancelar alta y ocultar formulario
	let boton_cancelar_agregar_producto = document.getElementById("btnProductoCancelarCreacion");
	boton_cancelar_agregar_producto.addEventListener("click", ocultar_formulario_alta_productos);
	// crear nuevo producto
	let formulario_alta_producto = document.getElementById("frmNuevoProducto");
	formulario_alta_producto.addEventListener("submit", alta_producto);
	// ver detalles producto especifico //
	const botones_mostrar_detalles_productos = document.querySelectorAll("[data-btn-grupo='mostrar-detalles-productos']");
	for (let boton_mostrar_detalles_producto of botones_mostrar_detalles_productos) {
		boton_mostrar_detalles_producto.addEventListener("click", mostrar_detalles_producto);
	}
}

// ***************************************************************** //
// ********************** AJAX OPERACIONES INCIO ******************** //
// ***************************************************************** //
function mostrarTbody() {
	let tbody_productos_url = "../controlador/productos-op-traer-tabla-con-paginador.php";
	fetch(tbody_productos_url)
	.then(function (response) {
		if (!response.ok) {
			throw new Error('Error en la llamada a la API: ' + response.statusText);
		}
		return response.text();
	})
	.then(function (productos) {
		let tbody_productos = document.getElementById("cargarTbody");
		// traer el tbody generado en el metodo generarTbody()
		tbody_productos.innerHTML = productos;
	})
	.catch(function (error) {
		console.error('Error en fetch de la funcion mostrarTbody: ', error)
	});
}
function mostrarSelectCategoriaParaFormulario() {
	let select_categoria_productos_url = "../controlador/productos-op-traer-select-categoria-para-formulario.php";
	fetch(select_categoria_productos_url)
	.then(function (response) {
		if (!response.ok) {
			throw new Error('Error en la llamada a la API: ' + response.statusText);
		}
		return response.text();
	})
	.then(function (select) {
		let select_categoria_formulario = document.getElementById("cargarSelectNuevoProductoCategoría");
		// traer el select generado en el metodo generarSelectorFormulario()
		select_categoria_formulario.innerHTML = select;
	})
	.catch(function (error) {
		console.error('Error en fetch de la funcion mostrarSelectCategoriaParaFormulario: ', error)
	});
}
// En caso de querer hacerlo por JSON
function jsonMostrarProductos() {
	let json_productos = "../controlador/productos-op-traer-tabla-productos.php";
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
            <form action='./productos.js?id=${valor.id_producto}' method='post'>
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
            <form action='./productos.js?id=${valor.id_producto}' method='post'>
            <input type='hidden' name='frmProductoID' value='${valor.id_producto}'>
            <input type='hidden' name='frmProductoNombre' value='${valor.nombre}'>
            <input type='hidden' name='frmProductoMarca' value='${valor.marca}'>
            <input type='hidden' name='frmProductoPrecioCompra' value='${valor.precio_compra}'>
            <input type='hidden' name='frmProductoPrcioVenta' value='${valor.precio_venta}'>
            <button type='submit' class='btn btn-danger btn-sm' name='tblBtnEliminarProducto'>
            <i class="bi bi-lock"></i>
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
function generarTablaConPaginador() {
	let tbody_productos_url = "../controlador/productos-op-traer-tabla-con-paginador.php";
	fetch(tbody_productos_url)
	.then(function (response) {
		if (!response.ok) {
			throw new Error('Error en la llamada a la API: ' + response.statusText);
		}
		return response.text();
	})
	.then(function (productos) {
		// let tbody_productos = document.getElementById("cargarTbody");
		// traer el tbody generado en el metodo generarTbody()
		// tbody_productos.innerHTML = productos;
		let tabla_productos = document.getElementById("traerTablaConPaginador");
		tabla_productos.innerHTML = productos;
	})
	.catch(function (error) {
		console.error('Error:', error)
		// console.error("Ocurrio un problema con la solicitud fetch: " + error);
	});
}
// ***************************************************************** //
// *********************** AJAX OPERACIONES FIN ******************** //
// ***************************************************************** //

// ***************************************************************** //
// ********************** OPERACIONES INICIO *********************** //
// ***************************************************************** //

// *********************** alta de productos *********************** //
// mostrar formulario de alta de productos
function mostrar_formulario_alta_productos() {
  let div_mostrar_ocultar_barra_busqueda = document.getElementById("divOcultarMostrarBusqueda");
  let div_mostrar_oultar_tabla = document.getElementById("divOcultarMostrarTablaProductos");
  let div_mostrar_ocultar_formulario_nuevo_producto = document.getElementById("divMostrarOcultarFormularioNuevoProducto");
  // ocultar tabla
  div_mostrar_ocultar_barra_busqueda.classList.add("d-none");
  div_mostrar_oultar_tabla.classList.add("d-none");
  // mostrar forumlario
  div_mostrar_ocultar_formulario_nuevo_producto.classList.remove("d-none");
}
// ocultar formulario de alta de producto
function ocultar_formulario_alta_productos() {
  let div_mostrar_ocultar_barra_busqueda = document.getElementById("divOcultarMostrarBusqueda");
  let div_mostrar_oultar_tabla = document.getElementById("divOcultarMostrarTablaProductos");
  let div_mostrar_ocultar_formulario_nuevo_producto = document.getElementById("divMostrarOcultarFormularioNuevoProducto");
  // ocultar forumlario
  div_mostrar_ocultar_formulario_nuevo_producto.classList.add("d-none");
  // mostrar barra de busqueda y tabla
  div_mostrar_ocultar_barra_busqueda.classList.remove("d-none");
  div_mostrar_oultar_tabla.classList.remove("d-none");
  // reiniamos el formulario
  let formulario_agregar_producto = document.getElementById("frmNuevoProducto");
  formulario_agregar_producto.reset();
}
// agregar nuevo usuario
function alta_producto(evento) {
  evento.preventDefault();
  formulario_alta = evento.target;
  let validar_formulario = validar_formulario_alta_producto();
  if (!validar_formulario) {
    // error
  }
  else {
    formulario_alta.submit();
  }
}
// *********************** ver datos especificos de un producto *********************** //
// mostrar detalles usuario
function mostrar_detalles_producto(evento) {
  // empezando para mostrar los detalles del usuario seleccionado
  let boton_actual = evento.target;
  // console.log(boton_actual);
  let fila_producto = boton_actual.closest("tr");
  let producto_id = fila_producto.querySelector("td:nth-child(1)").textContent;
  let producto_nombre = fila_producto.querySelector("td:nth-child(2)").textContent;
  let producto_marca = fila_producto.querySelector("td:nth-child(3)").textContent;
  let producto_precio_compra = fila_producto.querySelector("td:nth-child(4)").textContent;
  let producto_precio_venta = fila_producto.querySelector("td:nth-child(5)").textContent;
  let producto_estado = fila_producto.querySelector("td:nth-child(6)").textContent;
  // capturo los divs que encapsulan la barra de busqueda, tabla y formulario
  let div_mostrar_ocultar_barra_busqueda = document.getElementById("divOcultarMostrarBusqueda");
  let div_mostrar_oultar_tabla = document.getElementById("divOcultarMostrarTablaProductos");
  let div_mostrar_ocultar_detalles_producto = document.getElementById("divMostrarOcultarDetallesProducto");
  // ocultar barra de busqueda y tabla
  div_mostrar_ocultar_barra_busqueda.classList.add("d-none");
  div_mostrar_oultar_tabla.classList.add("d-none");
  // // mostrar forumlario
  // div_mostrar_ocultar_detalles_producto.classList.remove("d-none");
  // volcando los datos de un usuario al formulario
  // let titulo_ver_detalle_usuario = document.getElementById("infoUsuario");
  // let formulario_usuario_id = document.getElementById("frmUsuarioID");
  // let formulario_usuario_nombre = document.getElementById("frmUsuarioNombre");
  // let formulario_usuario_rol = document.getElementById("frmUsuarioRol");
  // let formulario_usuario_tipo_documento = document.getElementById("frmUsuarioTipoDocumento");
  // let formulario_usuario_numero_documento = document.getElementById("frmUsuarioNroDocumento");
  // let formulario_usuario_email = document.getElementById("frmUsuarioEmail");
  // titulo_ver_detalle_usuario.innerHTML = "Información del usuario " + usuario_nombre;
  // formulario_usuario_id.value = usuario_id;
  // formulario_usuario_id.setAttribute("disabled", "");
  // formulario_usuario_nombre.value = usuario_nombre;
  // formulario_usuario_nombre.setAttribute("disabled", "");
  // formulario_usuario_rol.value = usuario_rol;
  // formulario_usuario_rol.setAttribute("disabled", "");
  // formulario_usuario_tipo_documento.value = usuario_tipo_documento;
  // formulario_usuario_tipo_documento.setAttribute("disabled", "");
  // formulario_usuario_numero_documento.value = parseInt(usuario_numero_documento);
  // formulario_usuario_numero_documento.setAttribute("disabled", "");
  // formulario_usuario_email.value = usuario_email;
  // formulario_usuario_email.setAttribute("disabled", "");
}

// *********************** validaciones en formularios *********************** //
// validar campos del formulario alta de usuario
function validar_formulario_alta_producto() {
	let contador = 0;
  let array_salida = [];
  // nombre
  let formulario_nuevo_producto_nombre = document.getElementById("frmNuevoProductoNombre");
  let formulario_nuevo_producto_nombre_valor = formulario_nuevo_producto_nombre.value;
  let array_palabras_nombre = formulario_nuevo_producto_nombre_valor.split(/ +/);
  let error_formulario_nuevo_producto_nombre = document.getElementById("errorNuevoProductoNombre");
  // marca
  let formulario_nuevo_producto_marca = document.getElementById("frmNuevoNuevoProductoMarca");
  let formulario_nuevo_producto_marca_valor = formulario_nuevo_producto_marca.value;
  let array_palabras_marca = formulario_nuevo_producto_marca_valor.split(/ +/);
  let error_formulario_nuevo_producto_marca = document.getElementById("errorNuevoProductoMarca");
  // categoria
  let formulario_select_nuevo_producto_categoria = document.getElementById("frmSelectNuevoProductoCategoria");
  let formulario_select_nuevo_producto_categoria_valor = formulario_select_nuevo_producto_categoria.value;
  let error_formulario_select_nuevo_producto_categoria = document.getElementById("errorSelectNuevoProductoCategoria");
  // precio compra
  let formulario_nuevo_producto_precio_compra = document.getElementById("frmNuevoProductoPrecioCompra");
  let formulario_nuevo_producto_precio_compra_valor = formulario_nuevo_producto_precio_compra.value;
  let float_formulario_nuevo_producto_precio_compra = parseFloat(formulario_nuevo_producto_precio_compra_valor);
  let error_formulario_nuevo_producto_precio_compra = document.getElementById("errorNuevoProductoPrecioCompra");
  // precio venta
  let formulario_nuevo_producto_precio_venta = document.getElementById("frmNuevoProductoPrecioVenta");
  let formulario_nuevo_producto_precio_venta_valor = formulario_nuevo_producto_precio_venta.value;
  let float_formulario_nuevo_producto_precio_venta = parseFloat(formulario_nuevo_producto_precio_venta_valor);
  let error_formulario_nuevo_producto_precio_venta = document.getElementById("errorNuevoProductoPrecioVenta");
  // estado
  let formulario_select_nuevo_producto_estado = document.getElementById("frmSelectorNuevoProductoEstado");
  let formulario_select_nuevo_producto_estado_valor = formulario_select_nuevo_producto_estado.value;
  let error_formulario_select_nuevo_producto_estado = document.getElementById("errorSelectorNuevoProductoEstado");
  // limpiar errores viejos
  formulario_nuevo_producto_nombre.classList.remove("is-invalid");
  formulario_nuevo_producto_marca.classList.remove("is-invalid");
  formulario_select_nuevo_producto_categoria.classList.remove("is-invalid");
  formulario_nuevo_producto_precio_compra.classList.remove("is-invalid");
  formulario_nuevo_producto_precio_venta.classList.remove("is-invalid");
  formulario_select_nuevo_producto_estado.classList.remove("is-invalid");
  // validar nombre
  if (!formulario_nuevo_producto_nombre_valor) {
    formulario_nuevo_producto_nombre.classList.add("is-invalid");
    error_formulario_nuevo_producto_nombre.innerHTML = "Campo nombre no puede quedar vacío. Ingrese un nombre.";
    contador++;
  } else if (array_palabras_nombre.length < 2) {
    formulario_nuevo_producto_nombre.classList.add("is-invalid");
    error_formulario_nuevo_producto_nombre.innerHTML = "Ingrese al menos 2 palabras.";
    contador++;
  } else {
  	for (let palabra of array_palabras_nombre) {
  		if (palabra.length < 3 || palabra.length > 120) {
  			formulario_nuevo_producto_nombre.classList.add("is-invalid");
  			error_formulario_nuevo_producto_nombre.innerHTML = "Nombre debe tener al menos 3 caracteres como mínimo y 120 caracteres como máximo.";
  			contador++;
  		}
    }
  }
  // validar marca
  if (!formulario_nuevo_producto_marca_valor) {
    formulario_nuevo_producto_marca.classList.add("is-invalid");
    error_formulario_nuevo_producto_marca.innerHTML = "Campo marca no puede quedar vacío. Ingrese una marca.";
    contador++;
  } else if (array_palabras_marca.length < 2) {
    formulario_nuevo_producto_marca.classList.add("is-invalid");
    error_formulario_nuevo_producto_marca.innerHTML = "Ingrese al menos 2 palabras.";
    contador++;
  } else {
    for (let palabra of array_palabras_marca) {
      if (palabra.length < 3 || palabra.length > 120) {
        formulario_nuevo_producto_marca.classList.add("is-invalid");
        error_formulario_nuevo_producto_marca.innerHTML = "Marca debe tener al menos 3 caracteres como mínimo y 120 caracteres como máximo.";
        contador++;
      }
    }
  }
  // validar categoria
  if (!formulario_select_nuevo_producto_categoria_valor) {
    formulario_select_nuevo_producto_categoria.classList.add("is-invalid");
    error_formulario_select_nuevo_producto_categoria.innerHTML = "Seleccione una categoria.";
    contador++;
  } else {
  	console.log("categoria validado");
    // categoria validado
    // array_salida.push(formulario_select_nuevo_producto_categoria.options[formulario_select_nuevo_producto_categoria.selectedIndex].text);
  }
  // validar precio compra
  if (!formulario_nuevo_producto_precio_compra_valor) {
    formulario_nuevo_producto_precio_compra.classList.add("is-invalid");
    error_formulario_nuevo_producto_precio_compra.innerHTML = "Campo producto compra no puede quedar vacío. Ingrese un precio.";
    contador++;
  } else if (float_formulario_nuevo_producto_precio_compra < 0.49) {
    formulario_nuevo_producto_precio_compra.classList.add("is-invalid");
    error_formulario_nuevo_producto_precio_compra.innerHTML = "Ingrese precio a partir de $0.50 en adelante.";
    contador++;
  } else {
  	console.log("precio de compra validado");
    // precio de compra validado
  }
  // validar precio compra
  if (!formulario_nuevo_producto_precio_venta_valor) {
    formulario_nuevo_producto_precio_venta.classList.add("is-invalid");
    error_formulario_nuevo_producto_precio_venta.innerHTML = "Campo producto venta no puede quedar vacío. Ingrese un precio.";
    contador++;
  } else if (float_formulario_nuevo_producto_precio_venta < 0.49) {
    formulario_nuevo_producto_precio_venta.classList.add("is-invalid");
    error_formulario_nuevo_producto_precio_venta.innerHTML = "Ingrese precio a partir de $0.50 en adelante.";
    contador++;
  } else {
  	console.log("precio de venta validado");
    // precio de venta validado
  }
  // validar estado
  if (!formulario_select_nuevo_producto_estado_valor) {
    formulario_select_nuevo_producto_estado.classList.add("is-invalid");
    error_formulario_select_nuevo_producto_estado.innerHTML = "Seleccione una categoria.";
    contador++;
  } else {
  	console.log("estado validado");
    // categoria validado
    // array_salida.push(formulario_select_nuevo_producto_estado.options[formulario_select_nuevo_producto_estado.selectedIndex].text);
  }
  // Validacion final
  if (contador == 1) {
    console.log("se encontró " + contador + " error.");
    return false;
  } else if (contador > 1) {
    console.log("se encontraron " + contador + " errores.");
    return false;
  } else {
    return true;
  }
}
  
// ***************************************************************** //
// ************************* OPERACIONES FIN *********************** //
// ***************************************************************** //