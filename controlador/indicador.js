function inicio() {
    document.getElementById("configForm").addEventListener("submit", enviarIndicador, false);
    // ocultarAlert();
}

function enviarIndicador(evento) {
    evento.preventDefault();
    if (validarForm()) {
        document.getElementById("configForm").submit()
    }
}

function validarForm() {

    //Validacion Limite de Aviso
    let limiteAvisoInput = document.getElementById("limiteDeAviso");
    let limiteDeAviso = limiteAvisoInput.value;

    limiteAvisoInput.classList.remove("is-valid");
    limiteAvisoInput.classList.remove("is-invalid");

    let smsIndicadorAviso = document.getElementById("errorIndicadorAviso");
    let expresionRegularAviso = /^\d+$/;

    if (limiteDeAviso.trim() === "") {
        smsIndicadorAviso.innerHTML = "El Campo Limite se encentra vacio";

        limiteAvisoInput.classList.add("is-invalid");
        return false;
    } else {
        limiteAvisoInput.classList.add("is-valid");
    }

    if (!expresionRegularAviso.test(limiteDeAviso)) {
        smsIndicadorAviso.innerHTML = "El Campo Limite solo acepta caracteres numericos"
        limiteAvisoInput.classList.add("is-invalid");
        return false;
    } else {
        limiteAvisoInput.classList.add("is-valid");
    }
    // Validacion select Producto
    let selectProducto = document.getElementById("selectProducto");
    let selectP = selectProducto.value;
    console.log(selectP);

    selectProducto.classList.remove("is-valid");
    selectProducto.classList.remove("is-invalid");

    let smsIndicadorSelectProducto = document.getElementById("errorIndicadorSelectProducto");

    if (selectP === "Productos") {
        selectProducto.classList.add("is-invalid");
        smsIndicadorSelectProducto.innerHTML = "El select Productos es solo un campo de índice";
        return false;
    } else {
        selectProducto.classList.add("is-valid");
    }

    let selectCategoria = document.getElementById("selectCategoria");
    let selectC = selectCategoria.value;

    selectCategoria.classList.remove("is-valid");
    selectCategoria.classList.remove("is-invalid");

    let smsIndicadorSelectCategoria = document.getElementById("errorIndicadorSelectCategoria");

    if (selectC === "Categorias") {
        selectCategoria.classList.add("is-invalid");
        smsIndicadorSelectCategoria.innerHTML = "El select Categorias es solo un campo de índice";
        return false;
    } else {
        selectCategoria.classList.add("is-valid");
    }

    return true;
}

// function ocultarAlert() {
//     setTimeout(function() {
//         let mensajeExito = document.getElementById('smsExitoso');
//         if (mensajeExito.classList.contains("ok")) {
//             mensajeExito.classList.add("d-none");
//         }
//     }, 2000);

//     setTimeout(function() {
//         let mensajeError = document.getElementById('smsError');
//         if (mensajeError.classList.contains("problem")) {
//             mensajeError.classList.add("d-none");
//         }
//     }, 4000);
// }

window.addEventListener("load", inicio, false);