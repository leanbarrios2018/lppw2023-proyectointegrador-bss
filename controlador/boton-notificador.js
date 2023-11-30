function inicio() {
    document.getElementById("botonIndicador").addEventListener("click", mostrarNotificacion, false);
}

function mostrarNotificacion() {
    let notificaciones = document.getElementById("divNotificaciones");

    if (notificaciones.classList.contains("d-none")) {
        notificaciones.classList.remove("d-none");
    } else {
        notificaciones.classList.add("d-none");
    }
}
window.addEventListener('load', inicio, false);