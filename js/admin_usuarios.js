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
  boton_modificar_usuario_desde_formulario.addEventListener("click", habilitar_modificacion_formulario);
  // "eliminar" usuarios
  const botones_eliminar_usuario = document.querySelectorAll("[data-btn-grupo='eliminar-usuario']");
  for (let boton_eliminar_usuario of botones_eliminar_usuario) {
    boton_eliminar_usuario.addEventListener("click", eliminar_usuario);
  }
  // boton para volver a ocultar el formulario y mostrar nuevamente la tabla
  let boton_cancelar_edicion_formulario = document.getElementById("btnOcultarFormulario");
  boton_cancelar_edicion_formulario.addEventListener("click", cancelar_edicion_formulario);

  // formulario agregar/editar usuario
  let formulario_modificar_datos_usuario = document.getElementById("frmModificarDatosUsuario");
  formulario_modificar_datos_usuario.addEventListener("submit", modificar_usuario_desde_formulario);
}
// mostrar detalles usuario
function mostrar_detalles_usuario(evento) {
  // empezando para mostrar los detalles del usuario seleccionado
  let boton_actual = evento.target;
  let fila_usuario = boton_actual.closest("tr");
  let usuario_id = fila_usuario.querySelector("td:nth-child(1)").textContent;
  let usuario_nombre = fila_usuario.querySelector("td:nth-child(2)").textContent;
  let usuario_rol = fila_usuario.querySelector("td:nth-child(3)").textContent;
  let usuario_tipo_documento = fila_usuario.querySelector("td:nth-child(4)").textContent;
  let usuario_numero_documento = fila_usuario.querySelector("td:nth-child(5)").textContent;
  let usuario_email = fila_usuario.querySelector("td:nth-child(6)").textContent;
  // ocultar tabla
  let ocultar_mostrar_tabla = document.getElementById("divOcultarMostrarTablaUsuarios");
  ocultar_mostrar_tabla.classList.add("d-none");
  // mostrar forumlario
  let mostrar_ocultar_formulario = document.getElementById("divMostrarOcultarDetallesUsuario");
  mostrar_ocultar_formulario.classList.remove("d-none");
  // volcando los datos de un usuario al formulario
  let titulo_ver_detalle_usuario = document.getElementById("infoUsuario");
  titulo_ver_detalle_usuario.innerHTML = "Información del usuario " + usuario_nombre;
  let formulario_usuario_id = document.getElementById("frmUsuarioID");
  let formulario_usuario_nombre = document.getElementById("frmUsuarioNombre");
  let formulario_usuario_rol = document.getElementById("frmUsuarioRol");
  let formulario_usuario_tipo_documento = document.getElementById("frmUsuarioTipoDocumento");
  let formulario_usuario_numero_documento = document.getElementById("frmUsuarioNroDocumento");
  let formulario_usuario_email = document.getElementById("frmUsuarioEmail");
  formulario_usuario_id.value = usuario_id;
  formulario_usuario_id.setAttribute("disabled", "");
  formulario_usuario_nombre.value = usuario_nombre;
  formulario_usuario_nombre.setAttribute("disabled", "");
  formulario_usuario_rol.value = usuario_rol;
  formulario_usuario_rol.setAttribute("disabled", "");
  formulario_usuario_tipo_documento.value = usuario_tipo_documento;
  formulario_usuario_tipo_documento.setAttribute("disabled", "");
  formulario_usuario_numero_documento.value = parseInt(usuario_numero_documento);
  formulario_usuario_numero_documento.setAttribute("disabled", "");
  formulario_usuario_email.value = usuario_email;
  formulario_usuario_email.setAttribute("disabled", "");
}
// modificar usuario desde tabla
function modificar_usuario_desde_tabla(evento) {
  // empezando para mostrar los detalles del usuario seleccionado
  let boton_actual = evento.target;
  let fila_usuario = boton_actual.closest("tr");
  let usuario_id = fila_usuario.querySelector("td:nth-child(1)").textContent;
  let usuario_nombre = fila_usuario.querySelector("td:nth-child(2)").textContent;
  let usuario_rol = fila_usuario.querySelector("td:nth-child(3)").textContent;
  let usuario_tipo_documento = fila_usuario.querySelector("td:nth-child(4)").textContent;
  let usuario_numero_documento = fila_usuario.querySelector("td:nth-child(5)").textContent;
  let usuario_email = fila_usuario.querySelector("td:nth-child(6)").textContent;
  // ocultar tabla
  let ocultar_mostrar_tabla = document.getElementById("divOcultarMostrarTablaUsuarios");
  ocultar_mostrar_tabla.classList.add("d-none");
  // mostrar forumlario
  let mostrar_ocultar_formulario = document.getElementById("divMostrarOcultarDetallesUsuario");
  mostrar_ocultar_formulario.classList.remove("d-none");
  // volcando los datos de un usuario al formulario
  let titulo_ver_detalle_usuario = document.getElementById("infoUsuario");
  titulo_ver_detalle_usuario.innerHTML = "Información del usuario " + usuario_nombre;
  let formulario_usuario_id = document.getElementById("frmUsuarioID");
  let formulario_usuario_nombre = document.getElementById("frmUsuarioNombre");
  let formulario_usuario_rol = document.getElementById("frmUsuarioRol");
  let formulario_usuario_tipo_documento = document.getElementById("frmUsuarioTipoDocumento");
  let formulario_usuario_numero_documento = document.getElementById("frmUsuarioNroDocumento");
  let formulario_usuario_email = document.getElementById("frmUsuarioEmail");
  formulario_usuario_id.value = usuario_id;
  formulario_usuario_id.setAttribute("disabled", "");
  formulario_usuario_nombre.value = usuario_nombre;
  formulario_usuario_nombre.setAttribute("disabled", "");
  formulario_usuario_rol.value = usuario_rol;
  formulario_usuario_rol.setAttribute("disabled", "");
  formulario_usuario_tipo_documento.value = usuario_tipo_documento;
  formulario_usuario_tipo_documento.setAttribute("disabled", "");
  formulario_usuario_numero_documento.value = parseInt(usuario_numero_documento);
  formulario_usuario_numero_documento.setAttribute("disabled", "");
  formulario_usuario_email.value = usuario_email;
  formulario_usuario_email.setAttribute("disabled", "");

  if (habilitar_modificacion_formulario()) {
    modificar_usuario_desde_formulario();
  }
}

function modificar_usuario_desde_formulario(evento) {
  evento.preventDefault();
  let modal_titulo = document.getElementById("modalTitulo");
  let modal_texto = document.getElementById("modalTexto");
  modal_titulo.innerHTML = "";
  modal_texto.innerHTML = "";
  let usuario = validar_formulario_usuarios(); 
  if (!usuario) {
    // errores en las validaciones
  }
  else {
    // no se como volcar los datos modificados a la tabla
    console.log("acá se modificaría el usuario seleccionado en la tabla");
    modal_titulo.innerHTML = "Modificación exitosa";
    modal_texto.innerHTML = "Los datos del usuario <b>" + usuario + "</b> se han modificado correctamente.";
    mostrar_modal();
    cancelar_edicion_formulario();
  }
}

// habilitar la modificacion del formulario
function habilitar_modificacion_formulario() {
  let boton_editar_usuario = document.getElementById("btnEditarFormulario");
  boton_editar_usuario.classList.add("d-none");
  let boton_guardar_cambios = document.getElementById("btnGuargarCambios");
  boton_guardar_cambios.classList.remove("d-none");
  let formulario_usuario_nombre = document.getElementById("frmUsuarioNombre");
  let formulario_usuario_rol = document.getElementById("frmUsuarioRol");
  let formulario_usuario_rol_valor = formulario_usuario_rol.value;
  let div_formulario_usuario_rol = document.getElementById("divFrmUsuarioRol");
  let div_selector_rol = document.getElementById("divSelectorUsuarioRol");
  let div_formulario_usuario_tipo_documento = document.getElementById("divFrmUsuarioTipoDocumento");
  let div_selector_tipo_documento = document.getElementById("divSelectorUsuarioTipoDocumento");
  let formulario_usuario_numero_documento = document.getElementById("frmUsuarioNroDocumento");
  let formulario_usuario_email = document.getElementById("frmUsuarioEmail");
  // si el usuario es distinto al rol "gerente", oculto el input de tipo text y lo cambio por un selector
  if (formulario_usuario_rol_valor != "gerente") {
    div_formulario_usuario_rol.classList.add("d-none");
    div_selector_rol.classList.remove("d-none");
  }
  // oculto el input de tipo text y lo cambio por un selector
  div_formulario_usuario_tipo_documento.classList.add("d-none");
  div_selector_tipo_documento.classList.remove("d-none");
  // quito el atributo "disabled" a los campos del formulario para poder editarlos
  formulario_usuario_nombre.removeAttribute("disabled");
  formulario_usuario_numero_documento.removeAttribute("disabled");
  formulario_usuario_email.removeAttribute("disabled");
  // el campo id no debería editarse, por lo que no se quita el atributo "disabled"
  // en caso de que el usuario a modificarse sea "gerente", tampoco se debería editar su rol
}

// cancelar edicion formulario
function cancelar_edicion_formulario() {
  let div_formulario_usuario_rol = document.getElementById("divFrmUsuarioRol");
  let div_selector_rol = document.getElementById("divSelectorUsuarioRol");
  let div_formulario_usuario_tipo_documento = document.getElementById("divFrmUsuarioTipoDocumento");
  let div_selector_tipo_documento = document.getElementById("divSelectorUsuarioTipoDocumento");
  let div_mostrar_ocultar_detalles_usuario = document.getElementById("divMostrarOcultarDetallesUsuario");
  let div_mostrar_ocultar_tabla_usuarios = document.getElementById("divOcultarMostrarTablaUsuarios");
  let formulario_modificar_datos_usuario = document.getElementById("frmModificarDatosUsuario");
  let boton_editar_usuario = document.getElementById("btnEditarFormulario");
  let boton_guardar_cambios = document.getElementById("btnGuargarCambios");
  div_mostrar_ocultar_detalles_usuario.classList.add("d-none");
  div_mostrar_ocultar_tabla_usuarios.classList.remove("d-none");
  div_formulario_usuario_rol.classList.remove("d-none");
  div_selector_rol.classList.add("d-none");
  div_formulario_usuario_tipo_documento.classList.remove("d-none");
  div_selector_tipo_documento.classList.add("d-none");
  boton_editar_usuario.classList.remove("d-none");
  boton_guardar_cambios.classList.add("d-none");
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

function validar_formulario_usuarios() {
  let contador = 0;
  let formulario_usuario_nombre = document.getElementById("frmUsuarioNombre");
  let formulario_usuario_nombre_valor = formulario_usuario_nombre.value;
  let array_palabras = formulario_usuario_nombre_valor.split(/ +/);
  let error_formulario_usuario_nombre = document.getElementById("errorUsuarioNombre");
  let formulario_usuario_selector_rol = document.getElementById("frmSelectorUsuarioRol");
  let formulario_usuario_selector_rol_valor = formulario_usuario_selector_rol.value;
  let error_formulario_usuario_selector_rol = document.getElementById("errorSelectorUsuarioRol");
  let formulario_usuario_selector_tipo_documento = document.getElementById("frmSelectorUsuarioTipoDocumento");
  let formulario_usuario_selector_tipo_documento_valor = formulario_usuario_selector_tipo_documento.value;
  let error_usuario_selector_tipo_documento = document.getElementById("errorSelectorUsuarioTipoDocumento"); 
  let formulario_usuario_numero_documento = document.getElementById("frmUsuarioNroDocumento");
  let formulario_usuario_numero_documento_valor = formulario_usuario_numero_documento.value;
  let int_formulario_usuario_numero_documento_valor = parseInt(formulario_usuario_numero_documento_valor);
  let error_formulario_usuario_numero_documento = document.getElementById("errorUsuarioNroDocumento");
  let formulario_usuario_email = document.getElementById("frmUsuarioEmail");
  let formulario_usuario_email_valor = formulario_usuario_email.value;
  let error_formulario_usuario_email = document.getElementById("errorUsuarioEmail");
  let expresionRegularEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  // limpiar errores viejos
  formulario_usuario_nombre.classList.remove("is-invalid");
  formulario_usuario_selector_rol.classList.remove("is-invalid");
  formulario_usuario_selector_tipo_documento.classList.remove("is-invalid");
  formulario_usuario_numero_documento.classList.remove("is-invalid");
  formulario_usuario_email.classList.remove("is-invalid");
  // validar nombre
  if (!formulario_usuario_nombre_valor) {
    formulario_usuario_nombre.classList.add("is-invalid");
    error_formulario_usuario_nombre.innerHTML = "Campo nombre no puede quedar vacío. Ingrese un nombre.";
    contador++;
  } else if (array_palabras.length != 2) {
    formulario_usuario_nombre.classList.add("is-invalid");
    error_formulario_usuario_nombre.innerHTML = "Ingrese 2 palabras.";
    contador++;
  } else {
    for (let palabra of array_palabras) {
      if (palabra.length < 3 || palabra.length > 15) {
        formulario_usuario_nombre.classList.add("is-invalid");
        error_formulario_usuario_nombre.innerHTML = "Nombre debe tener al menos 3 caracteres como mínimo y 30 caracteres como máximo (por cada palabra).";
        contador++;
      }
    }
  }
  // validar rol
  if (!formulario_usuario_selector_rol_valor) {
    formulario_usuario_selector_rol.classList.add("is-invalid");
    error_formulario_usuario_selector_rol.innerHTML = "Campo rol no puede quedar vacío. Seleccione un rol.";
    contador++;
  } else {
    // rol validado
  }
  // validar tipo documento
  if (!formulario_usuario_selector_tipo_documento_valor) {
    formulario_usuario_selector_tipo_documento.classList.add("is-invalid");
    error_usuario_selector_tipo_documento.innerHTML = "Campo rol no puede quedar vacío. Seleccione un rol.";
    contador++;
  } else {
    // tipo documento validado
  }
  // validar numero documento
  if (!formulario_usuario_numero_documento_valor) {
    formulario_usuario_numero_documento.classList.add("is-invalid");
    error_formulario_usuario_numero_documento.innerHTML = "Campo rol no puede quedar vacío. Ingrese un número documento.";
    contador++;
  } else if (int_formulario_usuario_numero_documento_valor < 100000 || int_formulario_usuario_numero_documento_valor > 99999999) {
    formulario_usuario_numero_documento.classList.add("is-invalid");
    error_formulario_usuario_numero_documento.innerHTML = "Ingrese un número de documento mayor a 100000 y menor a 99999999.";
    contador++;
  } else {
    // numero documento validado
  }
  // validar email
  if (!formulario_usuario_email_valor) {
    formulario_usuario_email.classList.add("is-invalid");
    error_formulario_usuario_email.innerHTML = "Campo email no puede quedar vacío. Ingrese un email.";
    contador++;
  } else if (!expresionRegularEmail.test(formulario_usuario_email_valor)) {
    formulario_usuario_email.classList.add('is-invalid');
    error_formulario_usuario_email.innerHTML = "Email inválido. Ingrese un email válido.";
    contador++;
  } else {
    // email validado
  }
  // Validacion final
  if (contador == 1) {
    console.log("se encontró " + contador + " error.");
    return false;
  } else if(contador > 1) {
    console.log("se encontraron " + contador + " errores.");
    return false;
  } else {
    return formulario_usuario_nombre_valor;
  }
}

function mostrar_modal() {
  let modal_mensajes = new bootstrap.Modal(document.getElementById("modalMostrarMensajes"));
  modal_mensajes.show();
}