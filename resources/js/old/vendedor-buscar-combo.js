function inicio() {
    document.getElementById("autocompletadoBuscarCombo").addEventListener("input", buscarCombo, false);
    document.getElementById("autocompletadoBuscarCombo").addEventListener("input", filtrar_busqueda_usuario, false);
}
const keywords = [
    "Huevos",
    "Verdura",
];

function buscarCombo() {

    const autocompletadoInput = document.getElementById("autocompletadoBuscarCombo");
    const inputTexto = autocompletadoInput.value.toLowerCase();

    const listaVenta = document.getElementById("listaVenta");

    if (inputTexto.trim() === "") {
        listaVenta.classList.add("d-none");
    }
    else {
        listaVenta.classList.remove("d-none");
        const palabraFiltrada = keywords.filter(keyword => keyword.toLowerCase().includes(inputTexto));
        mostrarListadoVenta(palabraFiltrada);
    }
}

function mostrarListadoVenta(palabraFiltrada) {

    const autocompletadoInput = document.getElementById("autocompletadoBuscarCombo");

    const listaVenta = document.getElementById("listaVenta");

    const smsErrorResultado = document.getElementById('smsResultado');

    listaVenta.innerHTML = '';

    if (palabraFiltrada.length === 0) {
        smsErrorResultado.classList.remove("d-none")
    } else {
        smsErrorResultado.classList.add("d-none")

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

function filtrar_busqueda_usuario() {
    // nos traemos los radio button
    let flex_radio_nombre = document.getElementById("flexRadioFiltrarPorCombo");
    let flex_radio_precio = document.getElementById("flexRadioFiltrarPorPrecio");
    let flex_radio_id = document.getElementById("flexRadioFiltrarPorId");
    let input_busqueda = document.getElementById("autocompletadoBuscarCombo");
    let input_filtrar = input_busqueda.value.toLowerCase();
    let tabla_usuarios = document.getElementById("tablaCombos");
    let array_tr = tabla_usuarios.querySelectorAll("tbody tr");
    for (let columna of array_tr) {
        if (flex_radio_precio.checked) {
            // por precio
            // obtener todos los td correspondientes a precio
            let columna_combo_precio = columna.cells[4];
            let columna_combo_precio_valor = columna_combo_precio.textContent;
            // mostrar en la tabla los datos que coincincidan con el precio escrito
            if (columna_combo_precio_valor.toLowerCase().indexOf(input_filtrar) > -1) {
                columna.classList.remove("d-none");
            } else {
                columna.classList.add("d-none");
            }
        } else if (flex_radio_id.checked) {
            // por id
            // obtener todos los td correspondientes a id
            let columna_combo_id = columna.cells[1];
            let columna_combo_id_valor = columna_combo_id.textContent;
            // mostrar en la tabla los datos que coincincidan con el id escrito
            if (columna_combo_id_valor.toLowerCase().indexOf(input_filtrar) > -1) {
                columna.classList.remove("d-none");
            } else {
                columna.classList.add("d-none");
            }
        } else {
            // por combo (por defecto)
            // obtener todos los td correspondientes a combo
            let columna_combo = columna.cells[2];
            let columna_combo_valor = columna_combo.textContent;
            // mostrar en la tabla los datos que coincincidan con el nombre escrito
            if (columna_combo_valor.toLowerCase().indexOf(input_filtrar) > -1) {
                columna.classList.remove("d-none");
            } else {
                columna.classList.add("d-none");
            }
        }
    }
}
window.addEventListener("load", inicio, false);