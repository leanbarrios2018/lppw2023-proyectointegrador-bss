window.onload = inicio;

function inicio() {
  // ver detalles de un usuario
  const botones_mostrar_detalles_usuario = document.querySelectorAll("[data-btn-grupo='mostrar-detalles-usuario']");
  for (let boton_mostrar_detalles_usuario of botones_mostrar_detalles_usuario) {
    boton_mostrar_detalles_usuario.addEventListener("click", mostrar_detalles_usuario);
  }
  // modificar datos de un usuario
  // "eliminar" usuarios
  const botones_eliminar_usuario = document.querySelectorAll("[data-btn-grupo='eliminar-usuario']");
  for (let boton_eliminar_usuario of botones_eliminar_usuario) {
    boton_eliminar_usuario.addEventListener("click", eliminar_usuario);
  }
}
// mostrar detalles usuario
function mostrar_detalles_usuario() {
  // empezando para mostrar los detalles del usuario seleccionado
}
// eliminar usuarios
function eliminar_usuario() {
  // ocultando los datos del usuario seleccionado de la pantalla
  // (tener en cuenta a futuro) --> como no haremos borrado "fisico" de los datos en la BBDD, con ocultar los datos (sea de usuarios, como de productos, combos, etc.) bastará
  let ocultar_usuario = this.parentNode.parentNode.parentNode;
  ocultar_usuario.classList.add("d-none");
}