window.onload = inicio;

function inicio() {
  // alta usuario
  let boton_agregar_usuario = document.getElementById("btnAgregarUsuario");
  boton_agregar_usuario.addEventListener("click", mostrar_formulario_alta_usuario);
  let boton_cancelar_agregar_usuario = document.getElementById("btnCancelarNuevoUsuario");
  boton_cancelar_agregar_usuario.addEventListener("click", ocultar_formulario_alta_usuario);
  let formulario_alta_usuario = document.getElementById("frmNuevoUsuario");
  formulario_alta_usuario.addEventListener("submit", alta_usuario);
  // modificar datos de un usuario
  const botones_modificar_usuario_desde_tabla = document.querySelectorAll("[data-btn-grupo='modificar-usuario']");
  for (let boton_modificar_usuario_desde_tabla of botones_modificar_usuario_desde_tabla) {
    boton_modificar_usuario_desde_tabla.addEventListener("click", modificar_usuario_desde_tabla);
  }
  let boton_modificar_usuario_desde_formulario = document.getElementById("btnEditarFormulario");
  boton_modificar_usuario_desde_formulario.addEventListener("click", habilitar_modificacion_formulario);
  let boton_cancelar_edicion_formulario = document.getElementById("btnCancelarEdicionUsuario");
  boton_cancelar_edicion_formulario.addEventListener("click", ocultar_formulario_modificar_usuario);
  let formulario_modificar_usuario = document.getElementById("frmModificarUsuario");
  formulario_modificar_usuario.addEventListener("submit", modificar_usuario);
  // "eliminar" usuario
  const botones_eliminar_usuario = document.querySelectorAll("[data-btn-grupo='eliminar-usuario']");
  for (let boton_eliminar_usuario of botones_eliminar_usuario) {
    boton_eliminar_usuario.addEventListener("click", eliminar_usuario);
  }
  // ver detalles de un usuario
  const botones_mostrar_detalles_usuario = document.querySelectorAll("[data-btn-grupo='mostrar-detalles-usuario']");
  for (let boton_mostrar_detalles_usuario of botones_mostrar_detalles_usuario) {
    boton_mostrar_detalles_usuario.addEventListener("click", mostrar_detalles_usuario);
  }
}

// mostrar formulario de alta de usuario
function mostrar_formulario_alta_usuario() {
  // ocultar tabla
  let ocultar_mostrar_tabla = document.getElementById("divOcultarMostrarTablaUsuarios");
  ocultar_mostrar_tabla.classList.add("d-none");
  // mostrar forumlario
  let mostrar_ocultar_formulario = document.getElementById("divMostrarOcultarFormularioNuevoUsuario");
  mostrar_ocultar_formulario.classList.remove("d-none");
}
// ocultar formulario de alta de usuario
function ocultar_formulario_alta_usuario() {
  // ocultar forumlario
  let mostrar_ocultar_formulario = document.getElementById("divMostrarOcultarFormularioNuevoUsuario");
  mostrar_ocultar_formulario.classList.add("d-none");
  // mostrar tabla
  let ocultar_mostrar_tabla = document.getElementById("divOcultarMostrarTablaUsuarios");
  ocultar_mostrar_tabla.classList.remove("d-none");
  // reiniamos el formulario
  let formulario_agregar_usuario = document.getElementById("frmNuevoUsuario");
  formulario_agregar_usuario.reset();
}
// agregar nuevo usuario
function alta_usuario(evento) {
  evento.preventDefault();
  let modal_titulo = document.getElementById("modalTitulo");
  let modal_texto = document.getElementById("modalTexto");
  modal_titulo.innerHTML = "";
  modal_texto.innerHTML = "";
  let array_usuario = validar_formulario_alta_usuarios();
  if (!array_usuario) {
    // error
  }
  else {
    let tabla_usuarios = document.getElementById("tblUsuarios");
    // como id de usuario no lo guardo en el array de usuarios, hago el conteo de las filas en la tabla y capturo ese valor
    let id_usuario = agregar_valor_id_usuario();
    // agregando nuevo usuario a la ultima fila
    let fila = tabla_usuarios.insertRow(-1);
    let columna_id_usuario = fila.insertCell(0);
    columna_id_usuario.innerHTML = id_usuario;
    // agregando clases al campo id del usuario para que no se rompa el responsive
    columna_id_usuario.classList.add("ocultar-en-pantalla-xs");
    columna_id_usuario.classList.add("ocultar-en-pantalla-sm");
    columna_id_usuario.classList.add("ocultar-en-pantalla-md");
    for (let i = 0; i < array_usuario.length; i++) {
      if (i != 0) {
        let columna_actual = fila.insertCell(i);
        columna_actual.innerHTML = array_usuario[i];
        if (i == 2) {
          // agregando clases al campo rol del usuario para que no se rompa el responsive
          columna_actual.classList.add("ocultar-en-pantalla-xs")
        } else if (i == 3) {
          // agregando clases al campo tipo documento del usuario para que no se rompa el responsive
          columna_actual.classList.add("ocultar-en-pantalla-xs");
          columna_actual.classList.add("ocultar-en-pantalla-sm");
          columna_actual.classList.add("ocultar-en-pantalla-md");
        } else if (i == 4) {
          // agregando clases al campo numero documento del usuario para que no se rompa el responsive
          columna_actual.classList.add("ocultar-en-pantalla-xs");
          columna_actual.classList.add("ocultar-en-pantalla-sm");
          columna_actual.classList.add("ocultar-en-pantalla-md");
        } else if (i == 5) {
          // agregando clases al campo email del usuario para que no se rompa el responsive
          columna_actual.classList.add("ocultar-en-pantalla-xs");
          columna_actual.classList.add("ocultar-en-pantalla-sm");
        }
      }
    }
    // los botones tambien se los agrego manualmente
    let ultima_columna = fila.insertCell(-1);
    ultima_columna.innerHTML = "<div class='btn-group' role='group' aria-label='Grupo botones'><button class='btn btn-success btn-sm' data-btn-grupo='mostrar-detalles-usuario'><i class='bi bi-eye'></i></button><button class='btn btn-primary btn-sm' data-btn-grupo='modificar-usuario'><i class='bi bi-pencil'></i></button><button class='btn btn-danger btn-sm' data-btn-grupo='eliminar-usuario'><i class='bi bi-trash'></i></button></div>";
    modal_titulo.innerHTML = "Creación usuario exitosa";
    modal_texto.innerHTML = "El usuario <b>" + array_usuario[0] + "</b> se ha creado correctamente.";
    mostrar_modal();
    ocultar_formulario_alta_usuario();

    // **** probando si el nuevo usuario le puedo dar comportamiento a ver desalles de usuario. modificacion y eliminacion *** //
    // modificar datos de un usuario
    const botones_modificar_usuario_desde_tabla = document.querySelectorAll("[data-btn-grupo='modificar-usuario']");
    for (let boton_modificar_usuario_desde_tabla of botones_modificar_usuario_desde_tabla) {
      boton_modificar_usuario_desde_tabla.addEventListener("click", modificar_usuario_desde_tabla);
    }
    let boton_modificar_usuario_desde_formulario = document.getElementById("btnEditarFormulario");
    boton_modificar_usuario_desde_formulario.addEventListener("click", habilitar_modificacion_formulario);
    let boton_cancelar_edicion_formulario = document.getElementById("btnCancelarEdicionUsuario");
    boton_cancelar_edicion_formulario.addEventListener("click", ocultar_formulario_modificar_usuario);
    let formulario_modificar_usuario = document.getElementById("frmModificarUsuario");
    formulario_modificar_usuario.addEventListener("submit", modificar_usuario);
    // "eliminar" usuario
    const botones_eliminar_usuario = document.querySelectorAll("[data-btn-grupo='eliminar-usuario']");
    for (let boton_eliminar_usuario of botones_eliminar_usuario) {
      boton_eliminar_usuario.addEventListener("click", eliminar_usuario);
    }
    // ver detalles de un usuario
    const botones_mostrar_detalles_usuario = document.querySelectorAll("[data-btn-grupo='mostrar-detalles-usuario']");
    for (let boton_mostrar_detalles_usuario of botones_mostrar_detalles_usuario) {
      boton_mostrar_detalles_usuario.addEventListener("click", mostrar_detalles_usuario);
    }
    // **** fin de pruebas *** //
  }
}
// modificar usuario desde tabla
function modificar_usuario_desde_tabla(evento) {
  // ver formulario - inicio
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
  // ver formulario - fin
  // habilito la modificacion
  if (habilitar_modificacion_formulario()) {
    // llama a funcion "modificar_usuario()"
    modificar_usuario();
  }
}
// modificar datos de un usuario
function modificar_usuario(evento) {
  evento.preventDefault();
  let modal_titulo = document.getElementById("modalTitulo");
  let modal_texto = document.getElementById("modalTexto");
  modal_titulo.innerHTML = "";
  modal_texto.innerHTML = "";
  let array_usuario = validar_formulario_modificar_usuarios();
  if (array_usuario) {
    // pendiente volcar los datos modificados a la tabla
    modal_titulo.innerHTML = "Modificación exitosa";
    modal_texto.innerHTML = "Los datos del usuario <b>" + array_usuario[0] + "</b> se han modificado correctamente.";
    mostrar_modal();
    ocultar_formulario_modificar_usuario();
  }
  else {
    // errores en la validacion de formulario
  }
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
function ocultar_formulario_modificar_usuario() {
  let div_formulario_usuario_rol = document.getElementById("divFrmUsuarioRol");
  let div_selector_rol = document.getElementById("divSelectorUsuarioRol");
  let div_formulario_usuario_tipo_documento = document.getElementById("divFrmUsuarioTipoDocumento");
  let div_selector_tipo_documento = document.getElementById("divSelectorUsuarioTipoDocumento");
  let div_mostrar_ocultar_detalles_usuario = document.getElementById("divMostrarOcultarDetallesUsuario");
  let div_mostrar_ocultar_tabla_usuarios = document.getElementById("divOcultarMostrarTablaUsuarios");
  let formulario_modificar_datos_usuario = document.getElementById("frmModificarUsuario");
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
}

function validar_formulario_alta_usuarios() {
  let contador = 0;
  let array_salida = [];
  let formulario_nuevo_usuario_nombre = document.getElementById("frmNuevoUsuarioNombre");
  let formulario_nuevo_usuario_nombre_valor = formulario_nuevo_usuario_nombre.value;
  let array_palabras = formulario_nuevo_usuario_nombre_valor.split(/ +/);
  let error_formulario_nuevo_usuario_nombre = document.getElementById("errorNuevoUsuarioNombre");
  let formulario_nuevo_usuario_selector_rol = document.getElementById("frmSelectorNuevoUsuarioRol");
  let formulario_nuevo_usuario_selector_rol_valor = formulario_nuevo_usuario_selector_rol.value;
  let error_formulario_nuevo_usuario_selector_rol = document.getElementById("errorSelectorNuevoUsuarioRol");
  let formulario_nuevo_usuario_selector_tipo_documento = document.getElementById("frmSelectorNuevoUsuarioTipoDocumento");
  let formulario_nuevo_usuario_selector_tipo_documento_valor = formulario_nuevo_usuario_selector_tipo_documento.value;
  let error_nuevo_usuario_selector_tipo_documento = document.getElementById("errorSelectorNuevoUsuarioTipoDocumento");
  let formulario_nuevo_usuario_numero_documento = document.getElementById("frmNuevoUsuarioNroDocumento");
  let formulario_nuevo_usuario_numero_documento_valor = formulario_nuevo_usuario_numero_documento.value;
  let int_formulario_nuevo_usuario_numero_documento_valor = parseInt(formulario_nuevo_usuario_numero_documento_valor);
  let error_formulario_nuevo_usuario_numero_documento = document.getElementById("errorNuevoUsuarioNroDocumento");
  let formulario_nuevo_usuario_email = document.getElementById("frmNuevoUsuarioEmail");
  let formulario_nuevo_usuario_email_valor = formulario_nuevo_usuario_email.value;
  let error_formulario_nuevo_usuario_email = document.getElementById("errorNuevoUsuarioEmail");
  let expresionRegularEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  // limpiar errores viejos
  formulario_nuevo_usuario_nombre.classList.remove("is-invalid");
  formulario_nuevo_usuario_selector_rol.classList.remove("is-invalid");
  formulario_nuevo_usuario_selector_tipo_documento.classList.remove("is-invalid");
  formulario_nuevo_usuario_numero_documento.classList.remove("is-invalid");
  formulario_nuevo_usuario_email.classList.remove("is-invalid");
  // validar nombre
  if (!formulario_nuevo_usuario_nombre_valor) {
    formulario_nuevo_usuario_nombre.classList.add("is-invalid");
    error_formulario_nuevo_usuario_nombre.innerHTML = "Campo nombre no puede quedar vacío. Ingrese un nombre.";
    contador++;
  } else if (array_palabras.length != 2) {
    formulario_nuevo_usuario_nombre.classList.add("is-invalid");
    error_formulario_nuevo_usuario_nombre.innerHTML = "Ingrese 2 palabras.";
    contador++;
  } else {
    for (let palabra of array_palabras) {
      if (palabra.length < 3 || palabra.length > 15) {
        formulario_nuevo_usuario_nombre.classList.add("is-invalid");
        error_formulario_nuevo_usuario_nombre.innerHTML = "Nombre debe tener al menos 3 caracteres como mínimo y 30 caracteres como máximo (por cada palabra).";
        contador++;
      }
      else {
        array_salida.push(formulario_nuevo_usuario_nombre_valor);
      }
    }
  }
  // validar rol
  if (!formulario_nuevo_usuario_selector_rol_valor) {
    formulario_nuevo_usuario_selector_rol.classList.add("is-invalid");
    error_formulario_nuevo_usuario_selector_rol.innerHTML = "Campo rol no puede quedar vacío. Seleccione un rol.";
    contador++;
  } else {
    // rol validado
    array_salida.push(formulario_nuevo_usuario_selector_rol.options[formulario_nuevo_usuario_selector_rol.selectedIndex].text);
  }
  // validar tipo documento
  if (!formulario_nuevo_usuario_selector_tipo_documento_valor) {
    formulario_nuevo_usuario_selector_tipo_documento.classList.add("is-invalid");
    error_nuevo_usuario_selector_tipo_documento.innerHTML = "Campo tipo de documento no puede quedar vacío. Seleccione un rol.";
    contador++;
  } else {
    // tipo documento validado
    array_salida.push(formulario_nuevo_usuario_selector_tipo_documento.options[formulario_nuevo_usuario_selector_tipo_documento.selectedIndex].text);
  }
  // validar numero documento
  if (!formulario_nuevo_usuario_numero_documento_valor) {
    formulario_nuevo_usuario_numero_documento.classList.add("is-invalid");
    error_formulario_nuevo_usuario_numero_documento.innerHTML = "Campo número de documento no puede quedar vacío. Ingrese un número documento.";
    contador++;
  } else if (int_formulario_nuevo_usuario_numero_documento_valor < 100000 || int_formulario_nuevo_usuario_numero_documento_valor > 99999999) {
    formulario_nuevo_usuario_numero_documento.classList.add("is-invalid");
    error_formulario_nuevo_usuario_numero_documento.innerHTML = "Ingrese un número de documento mayor a 100000 y menor a 99999999.";
    contador++;
  } else {
    // numero documento validado
    array_salida.push(formulario_nuevo_usuario_numero_documento_valor);
  }
  // validar email
  if (!formulario_nuevo_usuario_email_valor) {
    formulario_nuevo_usuario_email.classList.add("is-invalid");
    error_formulario_nuevo_usuario_email.innerHTML = "Campo email no puede quedar vacío. Ingrese un email.";
    contador++;
  } else if (!expresionRegularEmail.test(formulario_nuevo_usuario_email_valor)) {
    formulario_nuevo_usuario_email.classList.add('is-invalid');
    error_formulario_nuevo_usuario_email.innerHTML = "Email inválido. Ingrese un email válido.";
    contador++;
  } else {
    // email validado
    array_salida.push(formulario_nuevo_usuario_email_valor);
  }
  // Validacion final
  if (contador == 1) {
    console.log("se encontró " + contador + " error.");
    return false;
  } else if (contador > 1) {
    console.log("se encontraron " + contador + " errores.");
    return false;
  } else {
    return array_salida;
  }
}

function validar_formulario_modificar_usuarios() {
  let contador = 0;
  let array_salida = [];
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
      else {
        array_salida.push(formulario_usuario_nombre_valor);
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
    array_salida.push(formulario_usuario_selector_rol_valor);
  }
  // validar tipo documento
  if (!formulario_usuario_selector_tipo_documento_valor) {
    formulario_usuario_selector_tipo_documento.classList.add("is-invalid");
    error_usuario_selector_tipo_documento.innerHTML = "Campo tipo de documento no puede quedar vacío. Seleccione un rol.";
    contador++;
  } else {
    // tipo documento validado
    array_salida.push(formulario_usuario_selector_tipo_documento_valor);
  }
  // validar numero documento
  if (!formulario_usuario_numero_documento_valor) {
    formulario_usuario_numero_documento.classList.add("is-invalid");
    error_formulario_usuario_numero_documento.innerHTML = "Campo número de documento no puede quedar vacío. Ingrese un número documento.";
    contador++;
  } else if (int_formulario_usuario_numero_documento_valor < 100000 || int_formulario_usuario_numero_documento_valor > 99999999) {
    formulario_usuario_numero_documento.classList.add("is-invalid");
    error_formulario_usuario_numero_documento.innerHTML = "Ingrese un número de documento mayor a 100000 y menor a 99999999.";
    contador++;
  } else {
    // numero documento validado
    array_salida.push(formulario_usuario_numero_documento_valor);
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
    array_salida.push(formulario_usuario_email_valor);
  }
  // Validacion final
  if (contador == 1) {
    console.log("se encontró " + contador + " error.");
    return false;
  } else if (contador > 1) {
    console.log("se encontraron " + contador + " errores.");
    return false;
  } else {
    return array_salida;
  }
}

function agregar_valor_id_usuario() {
  let c = 0;
  let tabla_usuarios = document.getElementById("tblUsuarios");
  for (let fila_actual of tabla_usuarios.rows) {
    if (fila_actual.cells[0]) {
      c++;
    }
  }
  return c;
}

function agregar_botones_a_ultima_columna_fila_actual() {
  let tabla_usuarios = document.getElementById("tblUsuarios");
  let ultima_fila = tabla_usuarios.rows.length - 1;
  let ultima_columna = tabla_usuarios.rows[ultima_fila].cells - 1;
  console.log(ultima_columna.innerText);
}

function mostrar_modal() {
  let modal_mensajes = new bootstrap.Modal(document.getElementById("modalMostrarMensajes"));
  modal_mensajes.show();
}