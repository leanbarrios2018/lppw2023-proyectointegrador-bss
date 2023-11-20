function inicio() {
    document.getElementById("generarVentas").addEventListener("submit", generarVentas, false);
    document.getElementById("buscarBoton").addEventListener("click", buscarProducto, false);
}

// Lista de productos (ejemplo)
let productos = [
    { id: 1, producto: 'Camisa', marca: "Adidas", stock: 200, precio: 20 },
    { id: 2, producto: 'Pantalon', marca: "Louis Vuitton", stock: 100, precio: 30 },
    { id: 3, producto: 'Zapatos', marca: "Michael Kors", stock: 300, precio: 50 },
    // Agrega más productos aquí...
];

function generarVentas(evento) {

    evento.preventDefault();
    setTimeout(mostrar_modal, 1000);
    setTimeout(enviarFormulario, 2000);
}

function enviarFormulario() {
    document.getElementById("generarVentas").submit();
}

function mostrar_modal() {
    let modal_mensajes = new bootstrap.Modal(document.getElementById("modalMostrarMensajes"));
    let modal_texto = document.getElementById("modalTexto");
    modal_texto.innerHTML = "La venta ha sido generada exitosamente";
    modal_mensajes.show();
}

//Contador de filas
let NumFilas = 0;

function buscarProducto() {

    let productoInputValidacion = document.getElementById("buscarInput");

    let productoInput = document.getElementById("buscarInput").value.toLowerCase();

    let resultados = [];

    productoInputValidacion.classList.remove("is-invalid")
    productoInputValidacion.classList.remove("is-valid");

    expresionRegularBuscar = /^[a-zA-Z0-9\s]+$/;

    let smsError = document.getElementById("smsError");

    if (productoInput.trim() === "") {
        productoInputValidacion.classList.add("is-invalid");
        smsError.innerHTML = "El campo de busquedad se encuentra vacio";
    } else if (!expresionRegularBuscar.test(productoInput)) {
        productoInputValidacion.classList.add("is-invalid");
        smsError.innerHTML = "Solo se aceptan palabras alfabéticas y numéricas"
    } else {
        productoInputValidacion.classList.add("is-valid");

        for (let productoBuscado of productos) { //productos es la lista de productos (ejemplo)
            let nombreProducto = productoBuscado.producto.toLowerCase();

            if (nombreProducto.includes(productoInput)) { //El método includes () devuelve true si una matriz contiene un valor específico.
                resultados.push(productoBuscado); //El método push() agrega nuevos elementos al final de una matriz.
            }
        }
        mostrarResultados(resultados); //funcion 
    }
}

function mostrarResultados(resultados) {

    let smsError = document.getElementById("smsError");
    let productoInputValidacion = document.getElementById("buscarInput");

    let cantidadInputValidacion = document.getElementById("cantidadInput");
    let cantidadInput = document.getElementById("cantidadInput").value;

    cantidadInputValidacion.classList.remove("is-invalid");
    cantidadInputValidacion.classList.remove("is-valid");

    expresionRegularCantidad = /^[1-9][0-9]*$/;

    NumFilas++;

    let tbody = document.getElementById("tbody");

    //Creo las Tablas
    let tr = document.createElement("tr"); //[X]
    let tdNro = document.createElement("td"); //[X]
    let tdIDProducto = document.createElement("td");
    let tdProducto = document.createElement("td");
    let tdMarca = document.createElement("td");
    let tdCantidad = document.createElement("td");
    let tdStock = document.createElement("td");
    let tdPrecio = document.createElement("td");
    let tdSubTotal = document.createElement("td");
    let tdAcciones = document.createElement("td"); //[X]


    //Creo los input
    let inputTdIDProducto = document.createElement("input");
    let inputTdProducto = document.createElement("input");
    let inputTdMarca = document.createElement("input");
    let inputTdCantidad = document.createElement("input");
    let inputTdStock = document.createElement("input");
    let inputTdPrecio = document.createElement("input");
    let inputTdSubTotal = document.createElement("input");

    //Seteo los atributos de tipo name en los input
    inputTdIDProducto.setAttribute("name", "idProducto");
    inputTdProducto.setAttribute("name", "producto");
    inputTdMarca.setAttribute("name", "marca");
    inputTdCantidad.setAttribute("name", "cantidad");
    inputTdStock.setAttribute("name", "stock");
    inputTdPrecio.setAttribute("name", "precio");
    inputTdSubTotal.setAttribute("name", "subTotal");

    //otros seteo
    inputTdSubTotal.setAttribute("type", "number");
    inputTdCantidad.setAttribute("type", "number");

    //Seteo los atributos de tipo form-control en los input
    inputTdIDProducto.setAttribute("class", "form-control");
    inputTdProducto.setAttribute("class", "form-control");
    inputTdMarca.setAttribute("class", "form-control");
    inputTdCantidad.setAttribute("class", "form-control");
    inputTdStock.setAttribute("class", "form-control");
    inputTdPrecio.setAttribute("class", "form-control");
    inputTdSubTotal.setAttribute("class", "form-control");

    //Seteo los atributos de tipo readonly en los inputs
    inputTdIDProducto.setAttribute("readonly", " ");
    inputTdProducto.setAttribute("readonly", " ");
    inputTdMarca.setAttribute("readonly", " ");
    inputTdCantidad.setAttribute("readonly", " ");
    inputTdStock.setAttribute("readonly", " ");
    inputTdPrecio.setAttribute("readonly", " ");
    inputTdSubTotal.setAttribute("readonly", " ");

    if (cantidadInput === "") {
        cantidadInputValidacion.classList.add("is-invalid");
        smsError.innerHTML = "El campo de cantidad se encuentra vacio"
    } else if (!expresionRegularCantidad.test(cantidadInput)) {
        cantidadInputValidacion.classList.add("is-invalid");
        smsError.innerHTML = "Solo se aceptan valores numéricos y positivos"
    } else {
        cantidadInputValidacion.classList.add("is-valid");

        if (resultados.length > 0) { //Checkea si el array esta vacio

            tdNro.setAttribute("scope", "row");
            tdIDProducto.setAttribute("class", "text-center");
            tdProducto.setAttribute("class", "text-center");
            tdMarca.setAttribute("class", "text-center ocultar-en-pantalla-xs");
            tdCantidad.setAttribute("class", "text-center ocultar-en-pantalla-xs");
            tdCantidad.setAttribute("valoracion", "valorTotalCantidad");
            tdStock.setAttribute("class", "text-center ocultar-en-pantalla-xs");
            tdPrecio.setAttribute("class", "text-center ocultar-en-pantalla-xs");
            tdSubTotal.setAttribute("class", "text-center");
            tdSubTotal.setAttribute("valoracion", "valorTotal")
            tdAcciones.setAttribute("class", "text-center");
            tdTotal.setAttribute("class", "text-center");

            for (let producto of resultados) {

                //Seteamos los valores de productos a las columnas
                let sumaSubTotal = 0;
                let descontarStock = 0;

                //Seteamos los valores en los inputs
                tdNro.innerHTML = NumFilas;
                inputTdIDProducto.value = `${producto.id}`;
                inputTdProducto.value = `${producto.producto}`;
                inputTdMarca.value = `${producto.marca}`;
                inputTdCantidad.value = cantidadInput;

                if (cantidadInput <= producto.stock) { //Chekeamos si la cantidad es menor a stock.

                    descontarStock = parseInt(`${producto.stock}` - cantidadInput); //Resto la cantidad de stock que hay
                    producto.stock = descontarStock; //Agrego el esto que quedo
                    inputTdStock.value = descontarStock;

                    //Agrego los datos del input a las tablas
                    tdIDProducto.innerHTML = inputTdIDProducto.value;
                    tdProducto.innerHTML = inputTdProducto.value;
                    tdMarca.innerHTML = inputTdMarca.value
                    tdCantidad.innerHTML = inputTdCantidad.value;
                    tdStock.innerHTML = inputTdStock.value;

                    //Agrego las columnas a la fila
                    tr.appendChild(tdNro);
                    tr.appendChild(tdIDProducto);
                    tr.appendChild(tdProducto);
                    tr.appendChild(tdMarca);
                    tr.appendChild(tdCantidad);
                    tr.appendChild(tdStock);
                    tr.appendChild(tdPrecio);
                    tr.appendChild(tdSubTotal);
                    tr.appendChild(tdAcciones);

                    //Agrego las fila a la tabla
                    tbody.appendChild(tr);

                } else if (producto.stock === 0) { //Chekeamos si hay stock
                    cantidadInputValidacion.classList.add("is-invalid");
                    smsError.innerHTML = "No hay stock"
                } else {
                    cantidadInputValidacion.classList.add("is-invalid");
                    smsError.innerHTML = "Cantidad es superior a stock"
                }

                inputTdPrecio.value = `${producto.precio}`;

                //Agrego los datos del input a la tabla
                tdPrecio.innerHTML = inputTdPrecio.value;

                sumaSubTotal = parseFloat(cantidadInput * producto.precio); //Multiplico la cantidad por el precio unitario
                inputTdSubTotal.value = sumaSubTotal;

                //Agrego los datos del input a la tabla
                tdSubTotal.innerHTML = inputTdSubTotal.value;

                tdAcciones.innerHTML = "<div class='btn-group' role='group' aria-label='Grupo botones'><button type='button' class='btn btn-danger btn-sm' data-btn-grupo='eliminar-producto'><i class='bi bi-trash'></i></button></div>";
                document.getElementById("thAcciones").classList.remove("d-none");
                document.getElementById("tdOcultar").classList.remove("d-none");
            }

            let valorTotal = calcularTotal(); //Llamo  a la funcion para calcular el total de los subtotales
            document.getElementById("total").value = valorTotal;
            document.getElementById("tdTotal").innerHTML = valorTotal;

            let valorTotalCantidad = calcularTotalCantidad(); //Llamo  a la funcion para calcular el totalCantidad de las cantidades
            document.getElementById("cantidadTotal").value = valorTotalCantidad;
            document.getElementById("tdCantidadTotal").innerHTML = valorTotalCantidad;

        } else {
            smsError.innerHTML = 'No se encontraron resultados.';
            productoInputValidacion.classList.add("is-invalid");
        }
    }
}

function calcularTotal() {
    let valorTotal = 0;
    let subTotal = document.querySelectorAll("tr>td[valoracion='valorTotal']");

    for (let valor of subTotal) {
        valorTotal += parseInt(valor.innerHTML);
    }
    return valorTotal;
}

function calcularTotalCantidad() {
    let valorTotalCantidad = 0;
    let cantidadProducto = document.querySelectorAll("tr>td[valoracion='valorTotalCantidad']");

    for (let valorCantidad of cantidadProducto) {
        valorTotalCantidad += parseInt(valorCantidad.innerHTML);
    }

    return valorTotalCantidad;
}

// "eliminar producto
const botonesEliminarProducto = document.querySelectorAll("td>div>button[data-btn-grupo='eliminar-producto']");
for (let botonEliminarProducto of botonesEliminarProducto) {
    botonEliminarProducto.addEventListener("click", eliminarProducto);
}

function eliminarProducto(evento) {
    let ocultarProducto = evento.target.closest("tr");

    ocultarProducto.remove();

    let total = calcularTotal();
    let cantidadTotal = calcularTotalCantidad();

    document.getElementById("tdTotal").innerHTML = total;
    document.getElementById("total").value = total;

    document.getElementById("tdCantidadTotal").innerHTML = cantidadTotal;
    document.getElementById("cantidadTotal").value = cantidadTotal;
}

window.addEventListener("load", inicio, false);