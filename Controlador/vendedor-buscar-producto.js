function inicio() {
    document.getElementById("buscarInput").addEventListener("input", buscarProducto, false);
}

let inventario;

fetch("../Modelo/select-productos.php")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la solicitud. Código de estado: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        inventario = data;
    })
    .catch(error => {
        console.error(error);
    });

function buscarProducto() {

    const autocompletadoInput = document.getElementById("buscarInput");
    const inputTexto = autocompletadoInput.value.toLowerCase();

    const listaProducto = document.getElementById("listaVentaProducto");

    if (inputTexto.trim() === "") {
        listaProducto.classList.add("d-none");
    } else {
        listaProducto.classList.remove("d-none");
        const palabraFiltrada = inventario.filter(keyword => keyword.toLowerCase().includes(inputTexto));
        mostrarListadoCliente(palabraFiltrada);
    }
}

function mostrarListadoCliente(palabraFiltrada) {

    const autocompletadoInput = document.getElementById("buscarInput");

    const listaProducto = document.getElementById("listaVentaProducto");

    const smsErrorResultado = document.getElementById('smsResultadoProducto');

    listaProducto.innerHTML = '';

    if (palabraFiltrada.length === 0) {
        smsErrorResultado.classList.remove("d-none")
    } else {
        smsErrorResultado.classList.add("d-none")

        palabraFiltrada.forEach(listado => {
            const li = document.createElement('li');
            li.textContent = listado;
            li.addEventListener('click', () => {
                autocompletadoInput.value = listado;
                listaProducto.innerHTML = '';
            });
            listaProducto.appendChild(li);
        });
    }
}

window.addEventListener("load", inicio, false);