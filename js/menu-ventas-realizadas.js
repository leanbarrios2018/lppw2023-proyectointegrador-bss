window.onload = inicio;

function inicio() {
 // ver detalles de una venta realizada
 const botones_mostrar_detalles_ventas_realizadas = document.querySelectorAll("[data-btn-grupo='mostrar-detalles-ventas-realizadas']");
 for (let boton_mostrar_detalles_ventas_realizadas of botones_mostrar_detalles_ventas_realizadas) {
  boton_mostrar_detalles_ventas_realizadas.addEventListener("click", mostrar_detalles_producto_vendido);
 }
 // ocultar detalles usuario y mostrar tabla
 let boton_ocultar_detalles_producto_vendido = document.getElementById("btnOcultarDetallesProductoVendido");
 boton_ocultar_detalles_producto_vendido.addEventListener("click", ocultar_detalles_producto_vendido);
}

function mostrar_detalles_producto_vendido(evento) {
 // capturo los valores dentro de las columnas correspondientes
 let boton_actual = evento.target;
 let fila_venta_realizada = boton_actual.closest("tr");
 let venta_realizada_id = fila_venta_realizada.querySelector("td:nth-child(2)").textContent;
 let venta_realizada_marca = fila_venta_realizada.querySelector("td:nth-child(3)").textContent;
 let venta_realizada_nombre = fila_venta_realizada.querySelector("td:nth-child(4)").textContent;
 let venta_realizada_fecha = fila_venta_realizada.querySelector("td:nth-child(5)").textContent;
 let venta_realizada_cantidad = fila_venta_realizada.querySelector("td:nth-child(6)").textContent;
 let venta_realizada_precio = fila_venta_realizada.querySelector("td:nth-child(7)").textContent;
 // capturo los divs que enapsulan la barra de busqueda, graficas, la tabla y formuario
 let mostrar_ocultar_barra_busqueda = document.getElementById("divOcultarMostrarBusqueda");
 let mostrar_ocultar_grafico_barra = document.getElementById("divOcultarMostrarGraficaBarra");
 let mostrar_ocultar_grafico_dona = document.getElementById("divOcultarMostrarGraficaDona");
 let mostrar_ocultar_tabla = document.getElementById("divOcultarMostrarTablaVentasRealizadasPorDia");
 let mostrar_ocultar_formulario = document.getElementById("divMostrarOcultarDetallesProductoVendido");
 // ocultar barra de busqueda, graficas y tabla
 mostrar_ocultar_barra_busqueda.classList.add("d-none");
 mostrar_ocultar_grafico_barra.classList.add("d-none");
 mostrar_ocultar_grafico_dona.classList.add("d-none");
 mostrar_ocultar_tabla.classList.add("d-none");
 // mostrar forumlario
 mostrar_ocultar_formulario.classList.remove("d-none");
 // volcando los datos de un usuario al formulario
 let titulo_ver_detalle_producto_vendido = document.getElementById("tituloProductoVendido");
 let producto_vendido_id = document.getElementById("inputProductoVendidoID");
 let producto_vendido_marca = document.getElementById("inputProductoVendidoMarca");
 let producto_vendido_nombre = document.getElementById("inputProductoVendidoNombre");
 let producto_vendido_fecha = document.getElementById("inputUsuarioTipoDocumento");
 let producto_vendido_cantidad = document.getElementById("inputProductoVendidoCantidad");
 let producto_vendido_precio = document.getElementById("inputProductoVendidoPrecio");
 titulo_ver_detalle_producto_vendido.innerHTML = 'Detalles del producto vendido ' + venta_realizada_nombre + ' "' + venta_realizada_marca + '".';
 producto_vendido_id.value = venta_realizada_id;
 producto_vendido_marca.value = venta_realizada_marca;
 producto_vendido_nombre.value = venta_realizada_nombre;
 producto_vendido_fecha.value = parsear_fecha(venta_realizada_fecha);
 producto_vendido_cantidad.value = venta_realizada_cantidad;
 producto_vendido_precio.value = venta_realizada_precio;
}

function ocultar_detalles_producto_vendido() {
 let mostrar_ocultar_barra_busqueda = document.getElementById("divOcultarMostrarBusqueda");
 let mostrar_ocultar_grafico_barra = document.getElementById("divOcultarMostrarGraficaBarra");
 let mostrar_ocultar_grafico_dona = document.getElementById("divOcultarMostrarGraficaDona");
 let mostrar_ocultar_tabla = document.getElementById("divOcultarMostrarTablaVentasRealizadasPorDia");
 let mostrar_ocultar_formulario = document.getElementById("divMostrarOcultarDetallesProductoVendido");
 // ocultar forumlario
 mostrar_ocultar_formulario.classList.add("d-none");
 // mostrar tabla
 mostrar_ocultar_barra_busqueda.classList.remove("d-none");
 mostrar_ocultar_grafico_barra.classList.remove("d-none");
 mostrar_ocultar_grafico_dona.classList.remove("d-none");
 mostrar_ocultar_tabla.classList.remove("d-none");
}

function parsear_fecha(fecha) {
 let fecha_parseada = fecha.split('/').reverse().join('-');
 return fecha_parseada;
}