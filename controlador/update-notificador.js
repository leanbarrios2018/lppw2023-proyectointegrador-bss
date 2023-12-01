function inicio() {
    document.getElementById("formNotificadorUpdate").addEventListener("submit", formulario, false);

    //Boton Update
    let boton = document.querySelectorAll("button[data-btn-grupo='modificar-indicador']");
    for (let botonUpdate of boton) {
        botonUpdate.addEventListener("click", EditarNotificador, false);
    }
}

function formulario(evento) {
    evento.preventDefault();
    if (validarFormulario()) {
        mostrarModal();
        setTimeout(enviarFormulario, 2000);
    }
}

function enviarFormulario() {
    document.getElementById("formNotificadorUpdate").submit();
}

function EditarNotificador(evento) {
    const modalEditarCliente = new bootstrap.Modal(document.getElementById('modalUpdateNotificador'));
    modalEditarCliente.show();

    let botonActual = evento.target;

    let filaIndicador = botonActual.closest("tr");

    let IDIndicador = filaIndicador.querySelector("td:nth-child(2)").textContent;
    let IDUsuario = filaIndicador.querySelector("td:nth-child(3)").textContent;
    let IDUsuarioNivel = filaIndicador.querySelector("td:nth-child(4)").textContent;
    let IDProducto = filaIndicador.querySelector("td:nth-child(5)").textContent;
    let Producto = filaIndicador.querySelector("td:nth-child(6)").textContent;
    let marca = filaIndicador.querySelector("td:nth-child(7)").textContent;
    let cantidad = filaIndicador.querySelector("td:nth-child(8)").textContent;
    let IDCategoria = filaIndicador.querySelector("td:nth-child(9)").textContent;
    let Categoria = filaIndicador.querySelector("td:nth-child(10)").textContent;

    let tituloModal = document.getElementById("tituloModal");
    let inputIDIndicador = document.getElementById("IDIndicador");
    let inputIDUsuario = document.getElementById("IDUsuario");
    let inputIDUsuarioNivel = document.getElementById("Nivel");
    let inputIDProducto = document.getElementById("IDProducto");
    let inputProducto = document.getElementById("Producto");
    let inputMarca = document.getElementById("Marca");
    let inputCantidad = document.getElementById("Cantidad");
    let inputIDCategoria = document.getElementById("IDCategoria");
    let inputCategoria = document.getElementById("Categoria");

    tituloModal.textContent = "Editar Notificador";
    inputIDIndicador.value = IDIndicador;
    inputIDUsuario.value = IDUsuario;
    inputIDUsuarioNivel.value = IDUsuarioNivel;
    inputIDProducto.value = IDProducto;
    inputProducto.value = Producto;
    inputMarca.value = marca;
    inputCantidad.value = cantidad;
    inputIDCategoria.value = IDCategoria;
    inputCategoria.value = Categoria;
}

function validarFormulario() {
    //Validacion Nivel
    let nivelInput = document.getElementById("Nivel");
    let nivel = nivelInput.value;

    let smsErrorNivel = document.getElementById("errorUpdateNivel");
    let expresionRegularNivel = /^[0-9]+$/;

    nivelInput.classList.remove("is-invalid");
    nivelInput.classList.remove("is-valid");

    if (nivel.trim() === "") {
        nivelInput.classList.add("is-invalid");
        smsErrorNivel.innerHTML = "El campo Nivel se encuentra vacío";
        return false;
    }
    if (!expresionRegularNivel.test(nivel)) {
        nivelInput.classList.add("is-invalid");
        smsErrorNivel.innerHTML = "El campo Nivel solo acepta caracteres numéricos";
        return false;
    } else {
        nivelInput.classList.add("is-valid"); // Corregir aquí
    }
    return true;
}

function mostrarModal() {
    swal({
        title: "Indicador Modificado",
        icon: "success",
        button: "Cerrar",
    });
}
window.addEventListener("load", inicio, false);