function inicio() {

    URL = "../modelo/select-notificador-productos.php";

    fetch(URL)
        .then(Response => {
            if (!Response.ok) {
                throw new Error("Error en la solicitud. Código de estado: " + Response.status);
            }
            return Response.json();
        })
        .then(data => {
            for (let productos of data) {
                let op = document.createElement("option");
                let select = document.getElementById("selectProducto");

                op.innerHTML = productos.nombre
                op.setAttribute("value", productos.id_producto);
                select.appendChild(op);
            }
        })
        .catch(error => {
            console.error(error);
        })

}

window.addEventListener("load", inicio, false);