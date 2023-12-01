function inicio() {
    // Boton modal Detalles de Ventas
    let botonMostrarDetalle = document.querySelectorAll("button[data-btn-grupo='mostrar-detalles-ventas']");
    for (let botones of botonMostrarDetalle) {
        botones.addEventListener("click", mostrarDetalle, false);
    }

    document.getElementById("formDetallesVentas").addEventListener("submit", enviarFormulario, false);
}

function mostrarDetalle(evento) {
    const modalDetallesVentas = new bootstrap.Modal(document.getElementById('ModalDetallesVentas'));
    modalDetallesVentas.show();

    let botonActual = evento.target;
    let ListaDetallesVentas = botonActual.closest("tr");

    let IDPV = ListaDetallesVentas.querySelector("td:nth-child(2)").textContent;
    let IDP = ListaDetallesVentas.querySelector("td:nth-child(3)").textContent;
    let IDV = ListaDetallesVentas.querySelector("td:nth-child(4)").textContent;

    let inputIDPV = document.getElementById("IDPV");
    let inputIDP = document.getElementById("IDP");
    let inputIDV = document.getElementById("IDV");

    inputIDPV.value = IDPV;
    inputIDP.value = IDP;
    inputIDV.value = IDV;
}

window.addEventListener("load", inicio, false);