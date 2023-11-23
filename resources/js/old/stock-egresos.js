<<<<<<< HEAD
window.onload = inicio;

function inicio() {

  // "eliminar" egresos
  const botones_eliminar_egreso = document.querySelectorAll("[data-btn-grupo='eliminar-egreso']");
  for (let boton_eliminar_egreso of botones_eliminar_egreso) {
    boton_eliminar_egreso.addEventListener("click", eliminar_egreso);
  }

  // ver detalles de un egreso
  const botones_mostrar_detalles_egreso = document.querySelectorAll("[data-btn-grupo='mostrar-detalles-egreso']");
  for (let boton_mostrar_detalles_egreso of botones_mostrar_detalles_egreso) {
    boton_mostrar_detalles_egreso.addEventListener("click", mostrar_detalles_egreso);
  }

  // boton para volver a ocultar el formulario y mostrar nuevamente la tabla
  let boton_cancelar_vision_formulario = document.getElementById("btnOcultarFormulario");
  boton_cancelar_vision_formulario.addEventListener("click", cancelar_vision_formulario);

  //seleccionar motivo de egreso
  const botones_seleccionar_motivo = document.querySelectorAll("[data-btn-grupo='editar-egreso']");
  for (let boton_mostrar_select_egreso of botones_seleccionar_motivo) {
    boton_mostrar_select_egreso.addEventListener("click", mostrar_seleccion_motivo);
  }
  let boton_cancelar_editar_egreso = document.getElementById("btnCancelarEditarEgreso");
  boton_cancelar_editar_egreso.addEventListener("click", ocultar_formulario_egreso);


  // alta egreso
  let boton_agregar_egreso = document.getElementById("btnAgregarEgreso");
  boton_agregar_egreso.addEventListener("click", mostrar_formulario_alta_egreso);

  let boton_cancelar_agregar_egreso = document.getElementById("btnCancelarNuevoEgreso");
  boton_cancelar_agregar_egreso.addEventListener("click", ocultar_formulario_alta_egreso);

  //submit nuevo egreso
  let formulario_alta_egreso = document.getElementById("frmNuevoEgreso");
  formulario_alta_egreso.addEventListener("submit", alta_egreso);


  // buscar egreso
  let input_busqueda = document.getElementById("buscarEgreso");
  input_busqueda.addEventListener("keyup", filtrar_busqueda_egreso);

}
// *********************** motivo de egreso *********************** //
// mostrar formulario de modificar motivo de egreso
function mostrar_seleccion_motivo(evento) {
  // empezando para mostrar los detalles del egreso seleccionado

  let boton_actual = evento.target;
  let fila_egreso = boton_actual.closest("tr");
  let egreso_id = fila_egreso.querySelector("td:nth-child(1)").textContent;
  let egreso_marca = fila_egreso.querySelector("td:nth-child(2)").textContent;
  let egreso_nombre = fila_egreso.querySelector("td:nth-child(3)").textContent;
  let egreso_cantidad = fila_egreso.querySelector("td:nth-child(4)").textContent;
  let egreso_precio = fila_egreso.querySelector("td:nth-child(5)").textContent;
  let egreso_motivo = fila_egreso.querySelector("td:nth-child(6)").textContent;

  // ocultar tabla
  let ocultar_mostrar_tabla = document.getElementById("divOcultarMostrarTablaEgresos");
  ocultar_mostrar_tabla.classList.add("d-none");
  // mostrar formulario
  let mostrar_ocultar_formulario = document.getElementById("divMostrarOcultarFormularioEditarEgreso");
  mostrar_ocultar_formulario.classList.remove("d-none");


  // volcando los datos de un egreso al formulario
  let formulario_egreso_id = document.getElementById("frmEgresoId1");
  let formulario_egreso_marca = document.getElementById("frmEgresoMarca1");
  let formulario_egreso_nombre = document.getElementById("frmEgresoNombre1");
  let formulario_egreso_precio = document.getElementById("frmEgresoPrecio1");
  let formulario_egreso_cantidad = document.getElementById("frmEgresoCantidad1");
  let formulario_egreso_motivo = document.getElementById("frmActualizarEgresoMotivo1");

  formulario_egreso_id.value = egreso_id;
  formulario_egreso_marca.value = egreso_marca;
  formulario_egreso_nombre.value = egreso_nombre;
  formulario_egreso_precio.value = egreso_precio;
  formulario_egreso_cantidad.value = egreso_cantidad;
  formulario_egreso_motivo.value = egreso_motivo;

}


// *********************** alta de egresos *********************** //
// mostrar formulario de alta de egreso
function mostrar_formulario_alta_egreso() {
  let div_mostrar_ocultar_barra_busqueda = document.getElementById("divOcultarMostrarBusqueda");
  let div_mostrar_ocultar_tabla = document.getElementById("divOcultarMostrarTablaEgresos");
  let div_mostrar_ocultar_formulario_nuevo_egreso = document.getElementById("divMostrarOcultarFormularioNuevoEgreso");
  // ocultar tabla
  div_mostrar_ocultar_barra_busqueda.classList.add("d-none");
  div_mostrar_ocultar_tabla.classList.add("d-none");
  // mostrar forumlario
  div_mostrar_ocultar_formulario_nuevo_egreso.classList.remove("d-none");
}
// ocultar formulario de alta de egreso
function ocultar_formulario_alta_egreso() {
  let div_mostrar_ocultar_barra_busqueda = document.getElementById("divOcultarMostrarBusqueda");
  let div_mostrar_ocultar_tabla = document.getElementById("divOcultarMostrarTablaEgresos");
  let div_mostrar_ocultar_formulario_nuevo_egreso = document.getElementById("divMostrarOcultarFormularioNuevoEgreso");
  // ocultar formulario
  div_mostrar_ocultar_formulario_nuevo_egreso.classList.add("d-none");
  // mostrar barra de busqueda y tabla
  div_mostrar_ocultar_barra_busqueda.classList.remove("d-none");
  div_mostrar_ocultar_tabla.classList.remove("d-none");
  // reiniamos el formulario
  let formulario_agregar_egreso = document.getElementById("frmNuevoEgreso");
  formulario_agregar_egreso.reset();
}


// *********************** validaciones en formularios *********************** //
// validar campos del formulario alta de egreso
function validar_formulario_alta_egreso() {
  let contador = 0;
  let array_salida = [];

  //marca
  let formulario_nuevo_egreso_marca = document.getElementById("frmNuevoEgresoMarca");
  let formulario_nuevo_egreso_marca_valor = formulario_nuevo_egreso_marca.value;
  let array_palabras_marca = formulario_nuevo_egreso_marca_valor.split(/ +/);
  let error_formulario_nuevo_egreso_marca = document.getElementById("errorNuevoEgresoMarca");

  //nombre
  let formulario_nuevo_egreso_nombre = document.getElementById("frmNuevoEgresoNombre");
  let formulario_nuevo_egreso_nombre_valor = formulario_nuevo_egreso_nombre.value;
  let array_palabras = formulario_nuevo_egreso_nombre_valor.split(/ +/);
  let error_formulario_nuevo_egreso_nombre = document.getElementById("errorNuevoEgresoNombre");

  //motivo
  let formulario_nuevo_egreso_selector_motivo = document.getElementById("frmSelectorNuevoEgresoMotivo");
  let formulario_nuevo_egreso_selector_motivo_valor = formulario_nuevo_egreso_selector_motivo.value;
  let error_formulario_nuevo_egreso_selector_motivo = document.getElementById("errorSelectorNuevoMotivo");

  //cantidad
  let formulario_nuevo_egreso_cantidad = document.getElementById("frmNuevoEgresoCantidad");
  let formulario_nuevo_egreso_cantidad_valor = formulario_nuevo_egreso_cantidad.value;
  let int_formulario_nuevo_egreso_cantidad_valor = parseInt(formulario_nuevo_egreso_cantidad_valor);
  let error_formulario_nuevo_egreso_cantidad = document.getElementById("errorNuevoEgresoCantidad");

  //precio
  let formulario_nuevo_egreso_precio = document.getElementById("frmNuevoEgresoPrecio");
  let formulario_nuevo_egreso_precio_valor = formulario_nuevo_egreso_precio.value;
  let int_formulario_nuevo_egreso_precio_valor = parseInt(formulario_nuevo_egreso_precio_valor);
  let error_formulario_nuevo_egreso_precio = document.getElementById("errorNuevoEgresoPrecio");

  // limpiar errores viejos
  formulario_nuevo_egreso_marca.classList.remove("is-invalid");
  formulario_nuevo_egreso_nombre.classList.remove("is-invalid");
  formulario_nuevo_egreso_cantidad.classList.remove("is-invalid");
  formulario_nuevo_egreso_precio.classList.remove("is-invalid");
  formulario_nuevo_egreso_selector_motivo.classList.remove("is-invalid");



  //validar marca
  if (!formulario_nuevo_egreso_marca_valor) {
    formulario_nuevo_egreso_marca.classList.add("is-invalid");
    error_formulario_nuevo_egreso_marca.innerHTML = "Campo marca no puede quedar vacío. Ingrese una marca.";
    contador++;
  } else {
    for (let marca of array_palabras_marca) {
      if (marca.length < 3 || marca.length > 15) {
        formulario_nuevo_egreso_marca.classList.add("is-invalid");
        error_formulario_nuevo_egreso_marca.innerHTML = "Marca debe tener al menos 5 caracteres como mínimo y 30 caracteres como máximo (por cada palabra).";
        contador++;
      }
      else {
        array_salida.push(formulario_nuevo_egreso_marca_valor);
      }
    }
  }

  // // validar nombre
  if (!formulario_nuevo_egreso_nombre_valor) {
    formulario_nuevo_egreso_nombre.classList.add("is-invalid");
    error_formulario_nuevo_egreso_nombre.innerHTML = "Campo nombre no puede quedar vacío. Ingrese un nombre.";
    contador++;
  } else {
    for (let palabra of array_palabras) {
      if (palabra.length < 3 || palabra.length > 15) {
        formulario_nuevo_egreso_nombre.classList.add("is-invalid");
        error_formulario_nuevo_egreso_nombre.innerHTML = "Nombre debe tener al menos 3 caracteres como mínimo y 30 caracteres como máximo (por cada palabra).";
        contador++;
      }
      else {
        array_salida.push(formulario_nuevo_egreso_nombre_valor);
      }
    }
  }


  // validar numero cantidad
  if (!formulario_nuevo_egreso_cantidad_valor) {
    formulario_nuevo_egreso_cantidad.classList.add("is-invalid");
    error_formulario_nuevo_egreso_cantidad.innerHTML = "Campo cantidad no puede quedar vacío. Ingrese una cantidad.";
    contador++;
  } else if (int_formulario_nuevo_egreso_cantidad_valor < 10 || int_formulario_nuevo_egreso_cantidad_valor > 9999) {
    formulario_nuevo_egreso_cantidad.classList.add("is-invalid");
    error_formulario_nuevo_egreso_cantidad.innerHTML = "Ingrese una cantidad mayor a 10 y menor a 9999.";
    contador++;
  } else {
    // numero cantidad validado
    array_salida.push(formulario_nuevo_egreso_cantidad_valor);
  }


  //validar Precio
  if (!formulario_nuevo_egreso_precio_valor) {
    formulario_nuevo_egreso_precio.classList.add("is-invalid");
    error_formulario_nuevo_egreso_precio.innerHTML = "Campo precio no puede quedar vacío. Ingrese una precio.";
    contador++;
  } else if (int_formulario_nuevo_egreso_precio_valor < 1000 || int_formulario_nuevo_egreso_precio_valor > 999999999) {
    formulario_nuevo_egreso_precio.classList.add("is-invalid");
    error_formulario_nuevo_egreso_precio.innerHTML = "Ingrese una precio mayor a 1000 y menor a 99999999.";
    contador++;
  } else {
    // precio validado
    array_salida.push(formulario_nuevo_egreso_precio_valor);
  }


  // validar motivo
  if (!formulario_nuevo_egreso_selector_motivo_valor) {
    formulario_nuevo_egreso_selector_motivo.classList.add("is-invalid");
    error_formulario_nuevo_egreso_selector_motivo.innerHTML = "Campo motivo no puede quedar vacío. Seleccione un motivo de egreso.";
    contador++;
  } else {
    // motivo validado
    array_salida.push(formulario_nuevo_egreso_selector_motivo.options[formulario_nuevo_egreso_selector_motivo.selectedIndex].text);
  }


  // // Validacion final
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


// agregar nuevo egreso
function alta_egreso(evento) {
  evento.preventDefault();
  let modal_titulo = document.getElementById("modalTitulo");
  let modal_texto = document.getElementById("modalTexto");
  modal_titulo.innerHTML = "";
  modal_texto.innerHTML = "";
  let array_egreso = validar_formulario_alta_egreso();
  if (!array_egreso) {
    // error
  }
  else {
    let tabla_egresos = document.getElementById("tblEgresos");
    // como id de egreso no lo guardo en el array de egresos, hago el conteo de las filas en la tabla y capturo ese valor
    let id_egreso = agregar_valor_id_egreso();
    // agregando nuevo egreso a la ultima fila
    let fila = tabla_egresos.insertRow(-1);
    let columna_id_egreso = fila.insertCell(0);
    columna_id_egreso.innerHTML = id_egreso;
    // agregando clases al campo id del egreso para que no se rompa el responsive
    columna_id_egreso.setAttribute("class", "ocultar-en-pantalla-xs ocultar-en-pantalla-sm ocultar-en-pantalla-md");

    for (let i = 0; i < array_egreso.length; i++) {

      let columna_actual = fila.insertCell(i + 1);//con el +1 corri el array 
      columna_actual.innerHTML = array_egreso[i]
      if (i == 1) {
        // agregando clases al campo nombre del egreso para que no se rompa el responsive
        columna_actual.setAttribute("class", "ocultar-en-pantalla-xs ocultar-en-pantalla-sm")

      } else
        if (i == 2) {
          // agregando clases al campo cantidad del egreso para que no se rompa el responsive
          columna_actual.setAttribute("class", "ocultar-en-pantalla-xs ocultar-en-pantalla-sm ocultar-en-pantalla-md")
        } else if (i == 3) {
          // agregando clases al campo precio del egreso para que no se rompa el responsive
          columna_actual.setAttribute("class", "ocultar-en-pantalla-xs ocultar-en-pantalla-sm ocultar-en-pantalla-md");
        } else if (i == 4) {
          // agregando clases al campo motivo del egreso para que no se rompa el responsive
          columna_actual.setAttribute("class", "ocultar-en-pantalla-xs");
        }
      // else if (i == 5) {
      //   // agregando clases al campo marca del egreso para que no se rompa el responsive
      //   columna_actual.setAttribute("class", "ocultar-en-pantalla-xs ocultar-en-pantalla-sm ");
      // } 

    }

    // los botones tambien se los agrego manualmente
    let ultima_columna = fila.insertCell(-1);
    ultima_columna.innerHTML = "<div class='btn-group' role='group' aria-label='Grupo botones'><button class='btn btn-success btn-sm' data-btn-grupo='mostrar-detalles-egreso'><i class='bi bi-eye'></i></button><button class='btn btn-primary btn-sm' data-btn-grupo='modificar-egreso'><i class='bi bi-pencil'></i></button><button class='btn btn-danger btn-sm' data-btn-grupo='eliminar-egreso'><i class='bi bi-trash'></i></button></div>";
    modal_titulo.innerHTML = "Creación egreso exitosa";
    modal_texto.innerHTML = "El egreso de <b>" + array_egreso[0] + "</b> a sido registrado correctamente.";
    mostrar_modal();
    ocultar_formulario_alta_egreso();

    // **** probando si el nuevo egreso le puedo dar comportamiento a ver detalles de egreso. modificacion y eliminacion *** //
    // modificar datos de un egreso
    const botones_modificar_egreso_desde_tabla = document.querySelectorAll("[data-btn-grupo='modificar-egreso']");
    for (let boton_modificar_egreso_desde_tabla of botones_modificar_egreso_desde_tabla) {
      boton_modificar_egreso_desde_tabla.addEventListener("click", mostrar_seleccion_motivo);
    }

    //pendiente
    // let boton_modificar_egreso_desde_formulario = document.getElementById("btnEditarFormulario");
    // boton_modificar_egreso_desde_formulario.addEventListener("click", habilitar_modificacion_formulario);
    // let boton_cancelar_edicion_formulario = document.getElementById("btnCancelarEdicionEgreso");
    // boton_cancelar_edicion_formulario.addEventListener("click", ocultar_formulario_modificar_egreso);
    // let formulario_modificar_egreso = document.getElementById("frmModificarEgreso");
    // formulario_modificar_egreso.addEventListener("submit", modificar_egreso);

    // "eliminar" egreso
    const botones_eliminar_egreso = document.querySelectorAll("[data-btn-grupo='eliminar-egreso']");
    for (let boton_eliminar_egreso of botones_eliminar_egreso) {
      boton_eliminar_egreso.addEventListener("click", eliminar_egreso);
    }
    // ver detalles de un egreso
    const botones_mostrar_detalles_egreso = document.querySelectorAll("[data-btn-grupo='mostrar-detalles-egreso']");
    for (let boton_mostrar_detalles_egreso of botones_mostrar_detalles_egreso) {
      boton_mostrar_detalles_egreso.addEventListener("click", mostrar_detalles_egreso);
    }
    // buscar egreso
    let input_busqueda = document.getElementById("buscarEgreso");
    input_busqueda.addEventListener("keyup", filtrar_busqueda_egreso);
    // **** fin de pruebas *** //
  }
}


// ocultar formulario de alta de egreso
function ocultar_formulario_egreso() {
  // ocultar formulario
  let mostrar_ocultar_formulario = document.getElementById("divMostrarOcultarFormularioEditarEgreso");
  mostrar_ocultar_formulario.classList.add("d-none");
  // mostrar tabla
  let ocultar_mostrar_tabla = document.getElementById("divOcultarMostrarTablaEgresos");
  ocultar_mostrar_tabla.classList.remove("d-none");
  // reiniamos el formulario
  let div_mostrar_ocultar_tabla_egresos = document.getElementById("divOcultarMostrarTablaEgresos");
  let formulario_modificar_datos_egreso = document.getElementById("frmModificarDatosEgreso");

  div_mostrar_ocultar_tabla_egresos.classList.remove("d-none");
  formulario_modificar_datos_egreso.reset();
}


// mostrar detalles egreso
function mostrar_detalles_egreso(evento) {
  // empezando para mostrar los detalles del egreso seleccionado

  let boton_actual = evento.target;
  let fila_egreso = boton_actual.closest("tr");
  let egreso_id = fila_egreso.querySelector("td:nth-child(1)").textContent;
  let egreso_marca = fila_egreso.querySelector("td:nth-child(2)").textContent;
  let egreso_nombre = fila_egreso.querySelector("td:nth-child(3)").textContent;
  let egreso_cantidad = fila_egreso.querySelector("td:nth-child(4)").textContent;
  let egreso_motivo = fila_egreso.querySelector("td:nth-child(6)").textContent;
  // ocultar tabla
  let ocultar_mostrar_tabla = document.getElementById("divOcultarMostrarTablaEgresos");
  ocultar_mostrar_tabla.classList.add("d-none");

  // mostrar formulario

  let mostrar_ocultar_formulario = document.getElementById("divMostrarOcultarDetallesEgreso");
  mostrar_ocultar_formulario.classList.remove("d-none");
  // volcando los datos de un egreso al formulario
  let titulo_ver_detalle_egreso = document.getElementById("infoEgreso");
  titulo_ver_detalle_egreso.innerHTML = "Motivo de egreso: " + egreso_motivo;
  let formulario_egreso_id = document.getElementById("frmEgresoId");
  let formulario_egreso_marca = document.getElementById("frmEgresoMarca");
  let formulario_egreso_nombre = document.getElementById("frmEgresoNombre");
  let formulario_egreso_cantidad = document.getElementById("frmEgresoCantidad");
  formulario_egreso_id.value = egreso_id;
  formulario_egreso_marca.value = egreso_marca;
  formulario_egreso_nombre.value = egreso_nombre;
  formulario_egreso_cantidad.value = egreso_cantidad;
}



// cancelar edicion formulario
function cancelar_vision_formulario() {
  let div_mostrar_ocultar_detalles_egreso = document.getElementById("divMostrarOcultarDetallesEgreso");
  let div_mostrar_ocultar_tabla_egresos = document.getElementById("divOcultarMostrarTablaEgresos");
  let formulario_modificar_datos_egreso = document.getElementById("frmModificarDatosEgreso");

  div_mostrar_ocultar_detalles_egreso.classList.add("d-none");

  div_mostrar_ocultar_tabla_egresos.classList.remove("d-none");

  formulario_modificar_datos_egreso.reset();
}

// eliminar egresos
function eliminar_egreso(evento) {
  // ocultando los datos del egreso seleccionado de la pantalla
  // (tener en cuenta a futuro) --> como no haremos borrado "fisico" de los datos en la BBDD, con ocultar los datos (sea de egresos, como de productos, combos, etc.) bastará
  let ocultar_egreso = evento.target.closest("tr");
  ocultar_egreso.classList.add("d-none");
  // otro modo de hacerlo
  // let ocultar_egreso = this.parentNode.parentNode.parentNode;
  // ocultar_egreso.classList.add("d-none");
}

// *********************** buscar egresos *********************** //
function filtrar_busqueda_egreso() {
  // nos traemos los radio button
  let flex_radio_marca = document.getElementById("flexRadioFiltrarPorMarca");
  let flex_radio_motivo = document.getElementById("flexRadioFiltrarPorMotivo");

  let input_busqueda = document.getElementById("buscarEgreso");
  let input_filtrar = input_busqueda.value.toLowerCase();
  let tabla_egresos = document.getElementById("tblEgresos");
  let array_tr = tabla_egresos.querySelectorAll("tbody tr");

  for (let columna of array_tr) {
    if (flex_radio_motivo.checked) {
      // por motivo
      // obtener todos los td correspondientes a motivo
      let columna_egreso_motivo = columna.cells[5];
      let columna_egreso_motivo_valor = columna_egreso_motivo.textContent;
      // mostrar en la tabla los datos que coincincidan con el rol escrito
      if (columna_egreso_motivo_valor.toLowerCase().indexOf(input_filtrar) > -1) {
        columna.classList.remove("d-none");
      } else {
        columna.classList.add("d-none");
      }
    } else {
      // por marca (por defecto)
      // obtener todos los td correspondientes a marca
      let columna_egreso_marca = columna.cells[1];
      let columna_egreso_marca_valor = columna_egreso_marca.textContent;
      // mostrar en la tabla los datos que coincincidan con el marca escrito
      if (columna_egreso_marca_valor.toLowerCase().indexOf(input_filtrar) > -1) {
        columna.classList.remove("d-none");
      } else {
        columna.classList.add("d-none");
      }
    }
  }
}





// asignar el id para el nuevo egreso
function agregar_valor_id_egreso() {
  let c = 0;
  let tabla_egresos = document.getElementById("tblEgresos");
  for (let fila_actual of tabla_egresos.rows) {
    if (fila_actual.cells[0]) {
      c++;
    }
  }
  return c;
}

// mostrar modal
function mostrar_modal() {
  let modal_mensajes = new bootstrap.Modal(document.getElementById("modalMostrarMensajes"));
  modal_mensajes.show();
=======
window.onload = inicio;

function inicio() {

  // "eliminar" egresos
  const botones_eliminar_egreso = document.querySelectorAll("[data-btn-grupo='eliminar-egreso']");
  for (let boton_eliminar_egreso of botones_eliminar_egreso) {
    boton_eliminar_egreso.addEventListener("click", eliminar_egreso);
  }

  // ver detalles de un egreso
  const botones_mostrar_detalles_egreso = document.querySelectorAll("[data-btn-grupo='mostrar-detalles-egreso']");
  for (let boton_mostrar_detalles_egreso of botones_mostrar_detalles_egreso) {
    boton_mostrar_detalles_egreso.addEventListener("click", mostrar_detalles_egreso);
  }

  // boton para volver a ocultar el formulario y mostrar nuevamente la tabla
  let boton_cancelar_vision_formulario = document.getElementById("btnOcultarFormulario");
  boton_cancelar_vision_formulario.addEventListener("click", cancelar_vision_formulario);

  //seleccionar motivo de egreso
  const botones_seleccionar_motivo = document.querySelectorAll("[data-btn-grupo='editar-egreso']");
  for (let boton_mostrar_select_egreso of botones_seleccionar_motivo) {
    boton_mostrar_select_egreso.addEventListener("click", mostrar_seleccion_motivo);
  }
  let boton_cancelar_editar_egreso = document.getElementById("btnCancelarEditarEgreso");
  boton_cancelar_editar_egreso.addEventListener("click", ocultar_formulario_egreso);


  // alta egreso
  let boton_agregar_egreso = document.getElementById("btnAgregarEgreso");
  boton_agregar_egreso.addEventListener("click", mostrar_formulario_alta_egreso);

  let boton_cancelar_agregar_egreso = document.getElementById("btnCancelarNuevoEgreso");
  boton_cancelar_agregar_egreso.addEventListener("click", ocultar_formulario_alta_egreso);

  //submit nuevo egreso
  let formulario_alta_egreso = document.getElementById("frmNuevoEgreso");
  formulario_alta_egreso.addEventListener("submit", alta_egreso);


  // buscar egreso
  let input_busqueda = document.getElementById("buscarEgreso");
  input_busqueda.addEventListener("keyup", filtrar_busqueda_egreso);

}
// *********************** motivo de egreso *********************** //
// mostrar formulario de modificar motivo de egreso
function mostrar_seleccion_motivo(evento) {
  // empezando para mostrar los detalles del egreso seleccionado

  let boton_actual = evento.target;
  let fila_egreso = boton_actual.closest("tr");
  let egreso_id = fila_egreso.querySelector("td:nth-child(1)").textContent;
  let egreso_marca = fila_egreso.querySelector("td:nth-child(2)").textContent;
  let egreso_nombre = fila_egreso.querySelector("td:nth-child(3)").textContent;
  let egreso_cantidad = fila_egreso.querySelector("td:nth-child(4)").textContent;
  let egreso_precio = fila_egreso.querySelector("td:nth-child(5)").textContent;
  let egreso_motivo = fila_egreso.querySelector("td:nth-child(6)").textContent;

  // ocultar tabla
  let ocultar_mostrar_tabla = document.getElementById("divOcultarMostrarTablaEgresos");
  ocultar_mostrar_tabla.classList.add("d-none");
  // mostrar formulario
  let mostrar_ocultar_formulario = document.getElementById("divMostrarOcultarFormularioEditarEgreso");
  mostrar_ocultar_formulario.classList.remove("d-none");


  // volcando los datos de un egreso al formulario
  let formulario_egreso_id = document.getElementById("frmEgresoId1");
  let formulario_egreso_marca = document.getElementById("frmEgresoMarca1");
  let formulario_egreso_nombre = document.getElementById("frmEgresoNombre1");
  let formulario_egreso_precio = document.getElementById("frmEgresoPrecio1");
  let formulario_egreso_cantidad = document.getElementById("frmEgresoCantidad1");
  let formulario_egreso_motivo = document.getElementById("frmActualizarEgresoMotivo1");

  formulario_egreso_id.value = egreso_id;
  formulario_egreso_marca.value = egreso_marca;
  formulario_egreso_nombre.value = egreso_nombre;
  formulario_egreso_precio.value = egreso_precio;
  formulario_egreso_cantidad.value = egreso_cantidad;
  formulario_egreso_motivo.value = egreso_motivo;

}


// *********************** alta de egresos *********************** //
// mostrar formulario de alta de egreso
function mostrar_formulario_alta_egreso() {
  let div_mostrar_ocultar_barra_busqueda = document.getElementById("divOcultarMostrarBusqueda");
  let div_mostrar_ocultar_tabla = document.getElementById("divOcultarMostrarTablaEgresos");
  let div_mostrar_ocultar_formulario_nuevo_egreso = document.getElementById("divMostrarOcultarFormularioNuevoEgreso");
  // ocultar tabla
  div_mostrar_ocultar_barra_busqueda.classList.add("d-none");
  div_mostrar_ocultar_tabla.classList.add("d-none");
  // mostrar forumlario
  div_mostrar_ocultar_formulario_nuevo_egreso.classList.remove("d-none");
}
// ocultar formulario de alta de egreso
function ocultar_formulario_alta_egreso() {
  let div_mostrar_ocultar_barra_busqueda = document.getElementById("divOcultarMostrarBusqueda");
  let div_mostrar_ocultar_tabla = document.getElementById("divOcultarMostrarTablaEgresos");
  let div_mostrar_ocultar_formulario_nuevo_egreso = document.getElementById("divMostrarOcultarFormularioNuevoEgreso");
  // ocultar formulario
  div_mostrar_ocultar_formulario_nuevo_egreso.classList.add("d-none");
  // mostrar barra de busqueda y tabla
  div_mostrar_ocultar_barra_busqueda.classList.remove("d-none");
  div_mostrar_ocultar_tabla.classList.remove("d-none");
  // reiniamos el formulario
  let formulario_agregar_egreso = document.getElementById("frmNuevoEgreso");
  formulario_agregar_egreso.reset();
}


// *********************** validaciones en formularios *********************** //
// validar campos del formulario alta de egreso
function validar_formulario_alta_egreso() {
  let contador = 0;
  let array_salida = [];

  //marca
  let formulario_nuevo_egreso_marca = document.getElementById("frmNuevoEgresoMarca");
  let formulario_nuevo_egreso_marca_valor = formulario_nuevo_egreso_marca.value;
  let array_palabras_marca = formulario_nuevo_egreso_marca_valor.split(/ +/);
  let error_formulario_nuevo_egreso_marca = document.getElementById("errorNuevoEgresoMarca");

  //nombre
  let formulario_nuevo_egreso_nombre = document.getElementById("frmNuevoEgresoNombre");
  let formulario_nuevo_egreso_nombre_valor = formulario_nuevo_egreso_nombre.value;
  let array_palabras = formulario_nuevo_egreso_nombre_valor.split(/ +/);
  let error_formulario_nuevo_egreso_nombre = document.getElementById("errorNuevoEgresoNombre");

  //motivo
  let formulario_nuevo_egreso_selector_motivo = document.getElementById("frmSelectorNuevoEgresoMotivo");
  let formulario_nuevo_egreso_selector_motivo_valor = formulario_nuevo_egreso_selector_motivo.value;
  let error_formulario_nuevo_egreso_selector_motivo = document.getElementById("errorSelectorNuevoMotivo");

  //cantidad
  let formulario_nuevo_egreso_cantidad = document.getElementById("frmNuevoEgresoCantidad");
  let formulario_nuevo_egreso_cantidad_valor = formulario_nuevo_egreso_cantidad.value;
  let int_formulario_nuevo_egreso_cantidad_valor = parseInt(formulario_nuevo_egreso_cantidad_valor);
  let error_formulario_nuevo_egreso_cantidad = document.getElementById("errorNuevoEgresoCantidad");

  //precio
  let formulario_nuevo_egreso_precio = document.getElementById("frmNuevoEgresoPrecio");
  let formulario_nuevo_egreso_precio_valor = formulario_nuevo_egreso_precio.value;
  let int_formulario_nuevo_egreso_precio_valor = parseInt(formulario_nuevo_egreso_precio_valor);
  let error_formulario_nuevo_egreso_precio = document.getElementById("errorNuevoEgresoPrecio");

  // limpiar errores viejos
  formulario_nuevo_egreso_marca.classList.remove("is-invalid");
  formulario_nuevo_egreso_nombre.classList.remove("is-invalid");
  formulario_nuevo_egreso_cantidad.classList.remove("is-invalid");
  formulario_nuevo_egreso_precio.classList.remove("is-invalid");
  formulario_nuevo_egreso_selector_motivo.classList.remove("is-invalid");



  //validar marca
  if (!formulario_nuevo_egreso_marca_valor) {
    formulario_nuevo_egreso_marca.classList.add("is-invalid");
    error_formulario_nuevo_egreso_marca.innerHTML = "Campo marca no puede quedar vacío. Ingrese una marca.";
    contador++;
  } else {
    for (let marca of array_palabras_marca) {
      if (marca.length < 3 || marca.length > 15) {
        formulario_nuevo_egreso_marca.classList.add("is-invalid");
        error_formulario_nuevo_egreso_marca.innerHTML = "Marca debe tener al menos 5 caracteres como mínimo y 30 caracteres como máximo (por cada palabra).";
        contador++;
      }
      else {
        array_salida.push(formulario_nuevo_egreso_marca_valor);
      }
    }
  }

  // // validar nombre
  if (!formulario_nuevo_egreso_nombre_valor) {
    formulario_nuevo_egreso_nombre.classList.add("is-invalid");
    error_formulario_nuevo_egreso_nombre.innerHTML = "Campo nombre no puede quedar vacío. Ingrese un nombre.";
    contador++;
  } else {
    for (let palabra of array_palabras) {
      if (palabra.length < 3 || palabra.length > 15) {
        formulario_nuevo_egreso_nombre.classList.add("is-invalid");
        error_formulario_nuevo_egreso_nombre.innerHTML = "Nombre debe tener al menos 3 caracteres como mínimo y 30 caracteres como máximo (por cada palabra).";
        contador++;
      }
      else {
        array_salida.push(formulario_nuevo_egreso_nombre_valor);
      }
    }
  }


  // validar numero cantidad
  if (!formulario_nuevo_egreso_cantidad_valor) {
    formulario_nuevo_egreso_cantidad.classList.add("is-invalid");
    error_formulario_nuevo_egreso_cantidad.innerHTML = "Campo cantidad no puede quedar vacío. Ingrese una cantidad.";
    contador++;
  } else if (int_formulario_nuevo_egreso_cantidad_valor < 10 || int_formulario_nuevo_egreso_cantidad_valor > 9999) {
    formulario_nuevo_egreso_cantidad.classList.add("is-invalid");
    error_formulario_nuevo_egreso_cantidad.innerHTML = "Ingrese una cantidad mayor a 10 y menor a 9999.";
    contador++;
  } else {
    // numero cantidad validado
    array_salida.push(formulario_nuevo_egreso_cantidad_valor);
  }


  //validar Precio
  if (!formulario_nuevo_egreso_precio_valor) {
    formulario_nuevo_egreso_precio.classList.add("is-invalid");
    error_formulario_nuevo_egreso_precio.innerHTML = "Campo precio no puede quedar vacío. Ingrese una precio.";
    contador++;
  } else if (int_formulario_nuevo_egreso_precio_valor < 1000 || int_formulario_nuevo_egreso_precio_valor > 999999999) {
    formulario_nuevo_egreso_precio.classList.add("is-invalid");
    error_formulario_nuevo_egreso_precio.innerHTML = "Ingrese una precio mayor a 1000 y menor a 99999999.";
    contador++;
  } else {
    // precio validado
    array_salida.push(formulario_nuevo_egreso_precio_valor);
  }


  // validar motivo
  if (!formulario_nuevo_egreso_selector_motivo_valor) {
    formulario_nuevo_egreso_selector_motivo.classList.add("is-invalid");
    error_formulario_nuevo_egreso_selector_motivo.innerHTML = "Campo motivo no puede quedar vacío. Seleccione un motivo de egreso.";
    contador++;
  } else {
    // motivo validado
    array_salida.push(formulario_nuevo_egreso_selector_motivo.options[formulario_nuevo_egreso_selector_motivo.selectedIndex].text);
  }


  // // Validacion final
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


// agregar nuevo egreso
function alta_egreso(evento) {
  evento.preventDefault();
  let modal_titulo = document.getElementById("modalTitulo");
  let modal_texto = document.getElementById("modalTexto");
  modal_titulo.innerHTML = "";
  modal_texto.innerHTML = "";
  let array_egreso = validar_formulario_alta_egreso();
  if (!array_egreso) {
    // error
  }
  else {
    let tabla_egresos = document.getElementById("tblEgresos");
    // como id de egreso no lo guardo en el array de egresos, hago el conteo de las filas en la tabla y capturo ese valor
    let id_egreso = agregar_valor_id_egreso();
    // agregando nuevo egreso a la ultima fila
    let fila = tabla_egresos.insertRow(-1);
    let columna_id_egreso = fila.insertCell(0);
    columna_id_egreso.innerHTML = id_egreso;
    // agregando clases al campo id del egreso para que no se rompa el responsive
    columna_id_egreso.setAttribute("class", "ocultar-en-pantalla-xs ocultar-en-pantalla-sm ocultar-en-pantalla-md");

    for (let i = 0; i < array_egreso.length; i++) {

      let columna_actual = fila.insertCell(i + 1);//con el +1 corri el array 
      columna_actual.innerHTML = array_egreso[i]
      if (i == 1) {
        // agregando clases al campo nombre del egreso para que no se rompa el responsive
        columna_actual.setAttribute("class", "ocultar-en-pantalla-xs ocultar-en-pantalla-sm")

      } else
        if (i == 2) {
          // agregando clases al campo cantidad del egreso para que no se rompa el responsive
          columna_actual.setAttribute("class", "ocultar-en-pantalla-xs ocultar-en-pantalla-sm ocultar-en-pantalla-md")
        } else if (i == 3) {
          // agregando clases al campo precio del egreso para que no se rompa el responsive
          columna_actual.setAttribute("class", "ocultar-en-pantalla-xs ocultar-en-pantalla-sm ocultar-en-pantalla-md");
        } else if (i == 4) {
          // agregando clases al campo motivo del egreso para que no se rompa el responsive
          columna_actual.setAttribute("class", "ocultar-en-pantalla-xs");
        }
      // else if (i == 5) {
      //   // agregando clases al campo marca del egreso para que no se rompa el responsive
      //   columna_actual.setAttribute("class", "ocultar-en-pantalla-xs ocultar-en-pantalla-sm ");
      // } 

    }

    // los botones tambien se los agrego manualmente
    let ultima_columna = fila.insertCell(-1);
    ultima_columna.innerHTML = "<div class='btn-group' role='group' aria-label='Grupo botones'><button class='btn btn-success btn-sm' data-btn-grupo='mostrar-detalles-egreso'><i class='bi bi-eye'></i></button><button class='btn btn-primary btn-sm' data-btn-grupo='modificar-egreso'><i class='bi bi-pencil'></i></button><button class='btn btn-danger btn-sm' data-btn-grupo='eliminar-egreso'><i class='bi bi-trash'></i></button></div>";
    modal_titulo.innerHTML = "Creación egreso exitosa";
    modal_texto.innerHTML = "El egreso de <b>" + array_egreso[0] + "</b> a sido registrado correctamente.";
    mostrar_modal();
    ocultar_formulario_alta_egreso();

    // **** probando si el nuevo egreso le puedo dar comportamiento a ver detalles de egreso. modificacion y eliminacion *** //
    // modificar datos de un egreso
    const botones_modificar_egreso_desde_tabla = document.querySelectorAll("[data-btn-grupo='modificar-egreso']");
    for (let boton_modificar_egreso_desde_tabla of botones_modificar_egreso_desde_tabla) {
      boton_modificar_egreso_desde_tabla.addEventListener("click", mostrar_seleccion_motivo);
    }

    //pendiente
    // let boton_modificar_egreso_desde_formulario = document.getElementById("btnEditarFormulario");
    // boton_modificar_egreso_desde_formulario.addEventListener("click", habilitar_modificacion_formulario);
    // let boton_cancelar_edicion_formulario = document.getElementById("btnCancelarEdicionEgreso");
    // boton_cancelar_edicion_formulario.addEventListener("click", ocultar_formulario_modificar_egreso);
    // let formulario_modificar_egreso = document.getElementById("frmModificarEgreso");
    // formulario_modificar_egreso.addEventListener("submit", modificar_egreso);

    // "eliminar" egreso
    const botones_eliminar_egreso = document.querySelectorAll("[data-btn-grupo='eliminar-egreso']");
    for (let boton_eliminar_egreso of botones_eliminar_egreso) {
      boton_eliminar_egreso.addEventListener("click", eliminar_egreso);
    }
    // ver detalles de un egreso
    const botones_mostrar_detalles_egreso = document.querySelectorAll("[data-btn-grupo='mostrar-detalles-egreso']");
    for (let boton_mostrar_detalles_egreso of botones_mostrar_detalles_egreso) {
      boton_mostrar_detalles_egreso.addEventListener("click", mostrar_detalles_egreso);
    }
    // buscar egreso
    let input_busqueda = document.getElementById("buscarEgreso");
    input_busqueda.addEventListener("keyup", filtrar_busqueda_egreso);
    // **** fin de pruebas *** //
  }
}


// ocultar formulario de alta de egreso
function ocultar_formulario_egreso() {
  // ocultar formulario
  let mostrar_ocultar_formulario = document.getElementById("divMostrarOcultarFormularioEditarEgreso");
  mostrar_ocultar_formulario.classList.add("d-none");
  // mostrar tabla
  let ocultar_mostrar_tabla = document.getElementById("divOcultarMostrarTablaEgresos");
  ocultar_mostrar_tabla.classList.remove("d-none");
  // reiniamos el formulario
  let div_mostrar_ocultar_tabla_egresos = document.getElementById("divOcultarMostrarTablaEgresos");
  let formulario_modificar_datos_egreso = document.getElementById("frmModificarDatosEgreso");

  div_mostrar_ocultar_tabla_egresos.classList.remove("d-none");
  formulario_modificar_datos_egreso.reset();
}


// mostrar detalles egreso
function mostrar_detalles_egreso(evento) {
  // empezando para mostrar los detalles del egreso seleccionado

  let boton_actual = evento.target;
  let fila_egreso = boton_actual.closest("tr");
  let egreso_id = fila_egreso.querySelector("td:nth-child(1)").textContent;
  let egreso_marca = fila_egreso.querySelector("td:nth-child(2)").textContent;
  let egreso_nombre = fila_egreso.querySelector("td:nth-child(3)").textContent;
  let egreso_cantidad = fila_egreso.querySelector("td:nth-child(4)").textContent;
  let egreso_motivo = fila_egreso.querySelector("td:nth-child(6)").textContent;
  // ocultar tabla
  let ocultar_mostrar_tabla = document.getElementById("divOcultarMostrarTablaEgresos");
  ocultar_mostrar_tabla.classList.add("d-none");

  // mostrar formulario

  let mostrar_ocultar_formulario = document.getElementById("divMostrarOcultarDetallesEgreso");
  mostrar_ocultar_formulario.classList.remove("d-none");
  // volcando los datos de un egreso al formulario
  let titulo_ver_detalle_egreso = document.getElementById("infoEgreso");
  titulo_ver_detalle_egreso.innerHTML = "Motivo de egreso: " + egreso_motivo;
  let formulario_egreso_id = document.getElementById("frmEgresoId");
  let formulario_egreso_marca = document.getElementById("frmEgresoMarca");
  let formulario_egreso_nombre = document.getElementById("frmEgresoNombre");
  let formulario_egreso_cantidad = document.getElementById("frmEgresoCantidad");
  formulario_egreso_id.value = egreso_id;
  formulario_egreso_marca.value = egreso_marca;
  formulario_egreso_nombre.value = egreso_nombre;
  formulario_egreso_cantidad.value = egreso_cantidad;
}



// cancelar edicion formulario
function cancelar_vision_formulario() {
  let div_mostrar_ocultar_detalles_egreso = document.getElementById("divMostrarOcultarDetallesEgreso");
  let div_mostrar_ocultar_tabla_egresos = document.getElementById("divOcultarMostrarTablaEgresos");
  let formulario_modificar_datos_egreso = document.getElementById("frmModificarDatosEgreso");

  div_mostrar_ocultar_detalles_egreso.classList.add("d-none");

  div_mostrar_ocultar_tabla_egresos.classList.remove("d-none");

  formulario_modificar_datos_egreso.reset();
}

// eliminar egresos
function eliminar_egreso(evento) {
  // ocultando los datos del egreso seleccionado de la pantalla
  // (tener en cuenta a futuro) --> como no haremos borrado "fisico" de los datos en la BBDD, con ocultar los datos (sea de egresos, como de productos, combos, etc.) bastará
  let ocultar_egreso = evento.target.closest("tr");
  ocultar_egreso.classList.add("d-none");
  // otro modo de hacerlo
  // let ocultar_egreso = this.parentNode.parentNode.parentNode;
  // ocultar_egreso.classList.add("d-none");
}

// *********************** buscar egresos *********************** //
function filtrar_busqueda_egreso() {
  // nos traemos los radio button
  let flex_radio_marca = document.getElementById("flexRadioFiltrarPorMarca");
  let flex_radio_motivo = document.getElementById("flexRadioFiltrarPorMotivo");

  let input_busqueda = document.getElementById("buscarEgreso");
  let input_filtrar = input_busqueda.value.toLowerCase();
  let tabla_egresos = document.getElementById("tblEgresos");
  let array_tr = tabla_egresos.querySelectorAll("tbody tr");

  for (let columna of array_tr) {
    if (flex_radio_motivo.checked) {
      // por motivo
      // obtener todos los td correspondientes a motivo
      let columna_egreso_motivo = columna.cells[5];
      let columna_egreso_motivo_valor = columna_egreso_motivo.textContent;
      // mostrar en la tabla los datos que coincincidan con el rol escrito
      if (columna_egreso_motivo_valor.toLowerCase().indexOf(input_filtrar) > -1) {
        columna.classList.remove("d-none");
      } else {
        columna.classList.add("d-none");
      }
    } else {
      // por marca (por defecto)
      // obtener todos los td correspondientes a marca
      let columna_egreso_marca = columna.cells[1];
      let columna_egreso_marca_valor = columna_egreso_marca.textContent;
      // mostrar en la tabla los datos que coincincidan con el marca escrito
      if (columna_egreso_marca_valor.toLowerCase().indexOf(input_filtrar) > -1) {
        columna.classList.remove("d-none");
      } else {
        columna.classList.add("d-none");
      }
    }
  }
}





// asignar el id para el nuevo egreso
function agregar_valor_id_egreso() {
  let c = 0;
  let tabla_egresos = document.getElementById("tblEgresos");
  for (let fila_actual of tabla_egresos.rows) {
    if (fila_actual.cells[0]) {
      c++;
    }
  }
  return c;
}

// mostrar modal
function mostrar_modal() {
  let modal_mensajes = new bootstrap.Modal(document.getElementById("modalMostrarMensajes"));
  modal_mensajes.show();
>>>>>>> 4f7ba50 (Moviendo todo a OLD. Usando patrón MVC)
}