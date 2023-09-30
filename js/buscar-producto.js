function inicio() {
    document.getElementById("buscarBoton").addEventListener("click", buscarProducto, false);
}

// Lista de productos (ejemplo)
const productos = [
    { id: 1, producto: 'Camisa', marca: "Adidas", stock: 200, precio: 20 },
    { id: 2, producto: 'Pantalon', marca: "Louis Vuitton", stock: 100, precio: 30 },
    { id: 3, producto: 'Zapatos', marca: "Michael Kors", stock: 300, precio: 50 },
    // Agrega más productos aquí...
];

//Contador de filas
let NumFilas = 0;

function buscarProducto() {

    let productoInputValidacion = document.getElementById("buscarInput");

    let productoInput = document.getElementById("buscarInput").value.toLowerCase();

    let resultados = [];

    productoInputValidacion.classList.remove("is-invalid")
    productoInputValidacion.classList.remove("is-valid");
    expresionRegularBuscar = /^[a-zA-Z0-9\s]+$/;

    let smsErrorBuscar = document.getElementById("smsErrorBuscar");

    if (productoInput.trim() === "") {
        productoInputValidacion.classList.add("is-invalid");
        smsErrorBuscar.innerHTML = "El campo de busquedad se encuentra vacio";
    }
    else if (!expresionRegularBuscar.test(productoInput)) {
        productoInputValidacion.classList.add("is-invalid");
        smsErrorBuscar.innerHTML = "Solo se aceptan palabras alfabéticas y numéricas"
    }
    else {
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

    let smsErrorBuscar = document.getElementById("smsErrorBuscar");
    let productoInputValidacion = document.getElementById("buscarInput");

    let cantidadInputValidacion = document.getElementById("cantidadInput");
    let cantidadInput = document.getElementById("cantidadInput").value;
    let smsErrorCantidad = document.getElementById("smsErrorCantidad");

    cantidadInputValidacion.classList.remove("is-invalid");
    cantidadInputValidacion.classList.remove("is-valid");
    expresionRegularCantidad = /^[0-9]+$/;

    NumFilas++;
    let tbody = document.getElementById("tbody");
    let tr = document.createElement("tr");
    let tdNro = document.createElement("td");
    let tdID = document.createElement("td");
    let tdProducto = document.createElement("td");
    let tdMarca = document.createElement("td");
    let tdCantidad = document.createElement("td");
    let tdStock = document.createElement("td");
    let tdPrecio = document.createElement("td");
    let tdValoracion = document.createElement("td");
    let tdTotal = document.getElementById("total");


    if (cantidadInput === "") {
        cantidadInputValidacion.classList.add("is-invalid");
        smsErrorCantidad.innerHTML = "El campo se encuentra vacio"
    }
    else if (!expresionRegularCantidad.test(cantidadInput)) {
        productoInputValidacion.classList.add("is-invalid");
        smsErrorCantidad.innerHTML = "Solo se aceptan valores numéricos"
    }
    else {
        cantidadInputValidacion.classList.add("is-valid");
    }

    if (resultados.length > 0) {//Checkeamos si el array esta vacio
        tdNro.setAttribute("scope", "row");
        tdID.setAttribute("class", "text-center");
        tdProducto.setAttribute("class", "text-center");
        tdMarca.setAttribute("class", "text-center");
        tdCantidad.setAttribute("class", "text-center");
        tdStock.setAttribute("class", "text-center");
        tdPrecio.setAttribute("class", "text-center");
        tdValoracion.setAttribute("class", "text-center");
        tdValoracion.setAttribute("class", "valorTotal")
        tdTotal.setAttribute("class", "text-center");

        for (let producto of resultados) {

            //Seteamos los valores de productos a las columnas
            let sumaValoracion =

                tdNro.innerHTML = NumFilas;
            tdID.innerHTML = `${producto.id}`;
            tdProducto.innerHTML = `${producto.producto}`;//Agrego el nombre del producto
            tdMarca.innerHTML = `${producto.marca}`;
            tdCantidad.innerHTML = cantidadInput;
            tdStock.innerHTML = `${producto.stock}`;
            tdPrecio.innerHTML = `${producto.precio}`;
            sumaValoracion = parseFloat(cantidadInput * producto.precio);
            tdValoracion.innerHTML = sumaValoracion;
            


            //Agregamos las columnas a las filas
            tbody.appendChild(tr);
            tr.appendChild(tdNro);
            tr.appendChild(tdID);
            tr.appendChild(tdProducto);
            tr.appendChild(tdMarca);
            tr.appendChild(tdCantidad);
            tr.appendChild(tdStock);
            tr.appendChild(tdPrecio);
            tr.appendChild(tdValoracion);
        }

        let valorTotal=calcularTotal();//
        tdTotal.innerHTML =valorTotal;

    }
    else {
        smsErrorBuscar.innerHTML = 'No se encontraron resultados.';
        productoInputValidacion.classList.add("is-invalid");
    }

}

function calcularTotal() {
    let valorTotal=0;

    let tdValoracion = document.querySelectorAll("tr>.valorTotal");

    for (let valor of tdValoracion) {
        valorTotal +=parseInt(valor.innerHTML);
        console.log(valorTotal);
    }

    return valorTotal;
}

window.addEventListener("load", inicio, false);


//Falta corregir los input buscar y cantidad/
//Falta descontar el stock