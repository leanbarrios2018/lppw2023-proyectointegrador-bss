window.onload = inicio;

function inicio() {
  // ver detalles de un usuario
  const botones_mostrar_detalles_usuario = document.querySelectorAll("[data-btn-grupo='mostrar-detalles-usuario']");
  for (let boton_mostrar_detalles_usuario of botones_mostrar_detalles_usuario) {
    boton_mostrar_detalles_usuario.addEventListener("click", mostrar_detalles_usuario);
  }
  // modificar datos de un usuario desde la tabla
  const botones_modificar_usuario_desde_tabla = document.querySelectorAll("[data-btn-grupo='modificar-usuario']");
  for (let boton_modificar_usuario_desde_tabla of botones_modificar_usuario_desde_tabla) {
    boton_modificar_usuario_desde_tabla.addEventListener("click", modificar_usuario_desde_tabla);
  }
  // modificar datos de un usuario desde el formulario
  let boton_modificar_usuario_desde_formulario = document.getElementById("btnEditarFormulario");
  boton_modificar_usuario_desde_formulario.addEventListener("click", modificar_usuario_desde_formulario);
  // "eliminar" usuarios
  const botones_eliminar_usuario = document.querySelectorAll("[data-btn-grupo='eliminar-usuario']");
  for (let boton_eliminar_usuario of botones_eliminar_usuario) {
    boton_eliminar_usuario.addEventListener("click", eliminar_usuario);
  }
  // boton para volver a ocultar el formulario y mostrar nuevamente la tabla
  let boton_cancelar_edicion_formulario = document.getElementById("btnOcultarFormulario");
  boton_cancelar_edicion_formulario.addEventListener("click", cancelar_edicion_formulario);
}
// mostrar detalles usuario
function mostrar_detalles_usuario(evento) {
  // empezando para mostrar los detalles del usuario seleccionado
  let boton_actual = evento.target;
  let fila_usuario = boton_actual.closest("tr");
  let usuario_nombre = fila_usuario.querySelector("td:nth-child(1)").textContent;
  let usuario_rol = fila_usuario.querySelector("td:nth-child(2)").textContent;
  let usuario_numero_documento = fila_usuario.querySelector("td:nth-child(3)").textContent;
  let usuario_email = fila_usuario.querySelector("td:nth-child(4)").textContent;
  // ocultar tabla
  let ocultar_mostrar_tabla = document.getElementById("divOcultarMostrarTablaUsuarios");
  ocultar_mostrar_tabla.classList.add("d-none");
  // mostrar forumlario
  let mostrar_ocultar_formulario = document.getElementById("divMostrarOcultarDetallesUsuario");
  mostrar_ocultar_formulario.classList.remove("d-none");
  // volcando los datos de un usuario al formulario
  let titulo_ver_detalle_usuario = document.getElementById("infoUsuario");
  titulo_ver_detalle_usuario.innerHTML = "Información de " + usuario_nombre;
  let formulario_usuario_nombre = document.getElementById("frmUsuarioNombre");
  let formulario_usuario_rol = document.getElementById("frmUsuarioRol");
  let formulario_usuario_numero_documento = document.getElementById("frmUsuarioNroDocumento");
  let formulario_usuario_email = document.getElementById("frmUsuarioEmail"); 
  formulario_usuario_nombre.value = usuario_nombre;
  formulario_usuario_rol.value = usuario_rol;
  formulario_usuario_numero_documento.value = parseInt(usuario_numero_documento);
  formulario_usuario_email.value = usuario_email;
}
// modificar usuario desde tabla
function modificar_usuario_desde_tabla() {
  console.log("En modificar_usuario_desde_tabla");
}
// modificar usuario desde formulario
function modificar_usuario_desde_formulario() {
  console.log("En modificar_usuario_desde_formulario");
}

// cancelar edicion formulario
function cancelar_edicion_formulario() {
  let div_mostrar_ocultar_detalles_usuario = document.getElementById("divMostrarOcultarDetallesUsuario");
  let div_mostrar_ocultar_tabla_usuarios = document.getElementById("divOcultarMostrarTablaUsuarios");
  let formulario_modificar_datos_usuario = document.getElementById("frmModificarDatosUsuario");
  div_mostrar_ocultar_detalles_usuario.classList.add("d-none");
  div_mostrar_ocultar_tabla_usuarios.classList.remove("d-none");
  formulario_modificar_datos_usuario.reset();
}

// eliminar usuarios
function eliminar_usuario(evento) {
  // ocultando los datos del usuario seleccionado de la pantalla
  // (tener en cuenta a futuro) --> como no haremos borrado "fisico" de los datos en la BBDD, con ocultar los datos (sea de usuarios, como de productos, combos, etc.) bastará
  let ocultar_usuario = evento.target.closest("tr");
  ocultar_usuario.classList.add("d-none");
  // otro modo de hacerlo
  // let ocultar_usuario = this.parentNode.parentNode.parentNode;
  // ocultar_usuario.classList.add("d-none");
}