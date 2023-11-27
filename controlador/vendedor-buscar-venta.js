function inicio() {
    document.getElementById("buscarVenta").addEventListener("input", buscarVentaSelect, false);
    document.getElementById("buscarVenta").addEventListener("change", filtrarBusquedad, false);
}

//Lista de venta
let lista;

fetch("../modelo/select-lista-venta.php")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la solicitud. Código de estado: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        lista = data;
    })
    .catch(error => {
        console.error(error);
    });

function buscarVentaSelect() {

    const autocompletadoInput = document.getElementById("buscarVenta");
    const inputTexto = autocompletadoInput.value.toLowerCase();

    const listaVenta = document.getElementById("listadoVenta");

    if (inputTexto.trim() === "") {
        listaVenta.classList.add("d-none");
    } else {
        listaVenta.classList.remove("d-none");
        const palabraFiltrada = lista.filter(keyword => keyword.toLowerCase().includes(inputTexto));
        mostrarListadoProducto(palabraFiltrada);
    }
}

function mostrarListadoProducto(palabraFiltrada) {

    const autocompletadoInput = document.getElementById("buscarVenta");

    const listaVenta = document.getElementById("listadoVenta");

    // const smsErrorResultado = document.getElementById('smsResultadoProducto');

    listaVenta.innerHTML = '';

    if (palabraFiltrada.length === 0) {
        // smsErrorResultado.classList.remove("d-none")
        listaVenta.classList.add("d-none");
    } else {
        // smsErrorResultado.classList.add("d-none")
        listaVenta.classList.remove("d-none");

        palabraFiltrada.forEach(listado => {
            const li = document.createElement('li');
            li.textContent = listado;
            li.addEventListener('click', () => {
                autocompletadoInput.value = listado;
                listaVenta.innerHTML = '';
            });
            listaVenta.appendChild(li);
        });
    }
}

function filtrarBusquedad() {
    // nos traemos los radio button
    let flex_radio_fecha = document.getElementById("flexRadioFiltrarPorFecha");
    let flex_radio_total = document.getElementById("flexRadioFiltrarTotal");
    let flex_radio_ventas = document.getElementById("flexRadioFiltrarPorVentas");
    let input_busqueda = document.getElementById("buscarVenta");
    let input_filtrar = input_busqueda.value.toLowerCase();
    let tabla_ventas = document.getElementById("tablaVentas");
    let array_tr = tabla_ventas.querySelectorAll("tbody tr");
    for (let columna of array_tr) {
        if (flex_radio_total.checked) {
            let columna_venta_total = columna.cells[4];
            let columna_venta_total_valor = columna_venta_total.textContent;
            if (columna_venta_total_valor.toLowerCase().indexOf(input_filtrar) > -1) {
                columna.classList.remove("d-none");
            } else {
                columna.classList.add("d-none");
            }
        } else if (flex_radio_ventas.checked) {
            let columna_venta_ventas = columna.cells[5];
            let columna_venta_ventas_valor = columna_venta_ventas.textContent;
            if (columna_venta_ventas_valor.toLowerCase().indexOf(input_filtrar) > -1) {
                columna.classList.remove("d-none");
            } else {
                columna.classList.add("d-none");
            }
        } else {
            let columna_fecha = columna.cells[2];
            let columna_fecha_valor = columna_fecha.textContent;
            if (columna_fecha_valor.toLowerCase().indexOf(input_filtrar) > -1) {
                columna.classList.remove("d-none");
            } else {
                columna.classList.add("d-none");
            }
        }
    }
}

window.addEventListener("load", inicio, false);