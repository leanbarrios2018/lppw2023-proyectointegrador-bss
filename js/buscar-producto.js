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

    let productoInput = document.getElementById("buscarInput").value.toLowerCase();

    let resultados = [];

    for (let productoBuscado of productos) { //productos es la lista de productos (ejemplo)
        let nombreProducto = productoBuscado.producto.toLowerCase();

        if (nombreProducto.includes(productoInput)) { //El método includes () devuelve true si una matriz contiene un valor específico.
            resultados.push(productoBuscado); //El método push() agrega nuevos elementos al final de una matriz.
        }
    }

    mostrarResultados(resultados); //funcion 
}

function mostrarResultados(resultados) {
    NumFilas++;

    let tablaVenta = document.getElementById("myTablaVenta");
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

    if (resultados.length > 0) {
        tdNro.setAttribute("scope", "row");
        tdID.setAttribute("class", "text-center");
        tdProducto.setAttribute("class", "text-center");
        tdMarca.setAttribute("class", "text-center");
        tdCantidad.setAttribute("class", "text-center");
        tdStock.setAttribute("class", "text-center");
        tdPrecio.setAttribute("class", "text-center");
        tdValoracion.setAttribute("class", "text-center");
        tdTotal.setAttribute("class", "text-center");

        for (let producto of resultados) {//Checkeamos si el array esta vacio

            //Seteamos los valores de productos a las columnas
            tdNro.innerHTML = NumFilas;
            tdID.innerHTML = `${producto.id}`;
            tdProducto.innerHTML = `${producto.producto}`;//Agrego el nombre del producto
            tdMarca.innerHTML = `${producto.marca}`;
            tdCantidad.innerHTML = "5"//Corregir
            tdStock.innerHTML = `${producto.stock}`;
            tdPrecio.innerHTML = `${producto.precio}`;
            tdValoracion.innerHTML = "$100";//Corregir
            tdTotal.innerHTML = "100"//Corregir


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
    }
    // else {
    //     resultsContainer.textContent = 'No se encontraron resultados.'; //Corregir
    // }

}










window.addEventListener("load", inicio, false);