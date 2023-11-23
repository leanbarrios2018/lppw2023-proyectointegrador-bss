window.onload = main;

function main() {
	let buscar_usuarios = document.getElementById("frmBuscarUsuario");
	buscar_usuarios.addEventListener("keyup", mostrar_usuario);
}


// Nuevo metodo
function mostrar_usuario() {
	let nombre = this.value;
	let div_info = document.getElementById("divInfo");
	let url = "mostrar-usuario.php?nombre=" + encodeURIComponent(nombre);
	fetch(url)
	.then(function (response) {
		if (!response.ok) {
			throw new Error("response not ok");
		}
		return response.text();
	})
	.then(function (data) {
		if (nombre === "") {
			div_info.innerHTML = "";
		} else {
			div_info.innerHTML = data;
		}
	})
	.catch(function (error) {
		console.error("Ocurrio un problema con la solicitud fetch: " + error);
	});
}