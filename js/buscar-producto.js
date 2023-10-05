function inicio() {
    document.getElementById("generarVentas").addEventListener("submit", generarVentas, false);
    document.getElementById("buscarBoton").addEventListener("click", buscarProducto, false);
    //localStorage.clear(); //Borra los datos almacenados
}

//variable gloables para localStorage
let idImprimible;
let totalImprimible;

function generarVentas(e) {
    e.preventDefault();

    const datosVenta = {
        id: 0,
        fecha: "",
        hora: "",
        total: 0,
        botones: "",
    };

    let MomentoActual = new Date;//El objeto Date trabaja con fechas y horas.

    let hora = MomentoActual.getHours();//Obtengo las horas:
    let minutos = MomentoActual.getMinutes()//Obtego los minutos
    let segundos = MomentoActual.getSeconds()//Obtengo los segundos

    let dia = MomentoActual.getDate();//Obtengo dia
    let mes = MomentoActual.getMonth() + 1;//Obtengo mes
    let año = MomentoActual.getFullYear();//Obtengo año
    let horaImprimible = hora + ":" + minutos + ":" + segundos;
    let fechaImprimible = dia + "/" + mes + "/" + año;

    datosVenta.id = idImprimible;
    datosVenta.fecha = fechaImprimible;
    datosVenta.hora = horaImprimible;
    datosVenta.total = totalImprimible;


    // Obtengo los datos existentes del localStorage o crear un nuevo arreglo si no existen
    let datosGuardados = JSON.parse(localStorage.getItem('datosGuardados')) || [];

    // Agrego los nuevos datos al arreglo
    datosGuardados.push(datosVenta);

    // Guardado el arreglo actualizado en localStorage/Esto es para que sean diferentes localStorage y los datos no se pisen
    localStorage.setItem('datosGuardados', JSON.stringify(datosGuardados));

    let modal_texto = document.getElementById("modalTexto");
    modal_texto.innerHTML = "La venta ha sido generada exitosamente";
    mostrar_modal();

    // Redirigir a la otra página HTML
    // window.location.href = 'index-vendedor.html';
}

// Lista de productos (ejemplo)
let productos = [
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

    let smsError = document.getElementById("smsError");

    if (productoInput.trim() === "") {
        productoInputValidacion.classList.add("is-invalid");
        smsError.innerHTML = "El campo de busquedad se encuentra vacio";
    }
    else if (!expresionRegularBuscar.test(productoInput)) {
        productoInputValidacion.classList.add("is-invalid");
        smsError.innerHTML = "Solo se aceptan palabras alfabéticas y numéricas"
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

    let smsError = document.getElementById("smsError");
    let productoInputValidacion = document.getElementById("buscarInput");

    let cantidadInputValidacion = document.getElementById("cantidadInput");
    let cantidadInput = document.getElementById("cantidadInput").value;

    cantidadInputValidacion.classList.remove("is-invalid");
    cantidadInputValidacion.classList.remove("is-valid");

    expresionRegularCantidad = /^[1-9][0-9]*$/;

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
        smsError.innerHTML = "El campo de cantidad se encuentra vacio"
    }
    else if (!expresionRegularCantidad.test(cantidadInput)) {
        cantidadInputValidacion.classList.add("is-invalid");
        smsError.innerHTML = "Solo se aceptan valores numéricos y positivos"
    }
    else {
        cantidadInputValidacion.classList.add("is-valid");

        if (resultados.length > 0) {//Checkeamos si el array esta vacio
            tdNro.setAttribute("scope", "row");
            tdID.setAttribute("class", "text-center");
            tdProducto.setAttribute("class", "text-center");
            tdMarca.setAttribute("class", "text-center ocultar-en-pantalla-xs");
            tdCantidad.setAttribute("class", "text-center ocultar-en-pantalla-xs");
            tdStock.setAttribute("class", "text-center ocultar-en-pantalla-xs");
            tdPrecio.setAttribute("class", "text-center ocultar-en-pantalla-xs");
            tdValoracion.setAttribute("class", "text-center");
            tdValoracion.setAttribute("valoracion", "valorTotal")
            tdTotal.setAttribute("class", "text-center");

            for (let producto of resultados) {

                //Seteamos los valores de productos a las columnas
                let sumaValoracion = 0;
                let descontarStock = 0;

                tdNro.innerHTML = NumFilas;
                tdID.innerHTML = `${producto.id}`;
                idImprimible = `${producto.id}`;
                tdProducto.innerHTML = `${producto.producto}`;//Agrego el nombre del producto
                tdMarca.innerHTML = `${producto.marca}`;
                tdCantidad.innerHTML = cantidadInput;

                if (cantidadInput <= producto.stock) {//Chekeamos si la cantidad es menor a stock.

                    descontarStock = parseInt(`${producto.stock}` - cantidadInput);
                    producto.stock = descontarStock;
                    tdStock.innerHTML = descontarStock;

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
                else if (producto.stock === 0) {//Chekeamos si hay stock
                    cantidadInputValidacion.classList.add("is-invalid");
                    smsError.innerHTML = "No hay stock"
                }
                else {
                    cantidadInputValidacion.classList.add("is-invalid");
                    smsError.innerHTML = "Cantidad es superior a stock"
                }

                tdPrecio.innerHTML = `${producto.precio}`;

                sumaValoracion = parseFloat(cantidadInput * producto.precio);
                tdValoracion.innerHTML = sumaValoracion;
            }

            let valorTotal = calcularTotal();//Llamamos a la funcion
            tdTotal.innerHTML = "$" + valorTotal;
            totalImprimible = "$" + valorTotal;

        }
        else {
            smsError.innerHTML = 'No se encontraron resultados.';
            productoInputValidacion.classList.add("is-invalid");
        }
    }
}

function calcularTotal() {
    let valorTotal = 0;
    let tdValoracion = document.querySelectorAll("tr>td[valoracion='valorTotal']");

    for (let valor of tdValoracion) {
        valorTotal += parseInt(valor.innerHTML);
    }
    return valorTotal;
}

function mostrar_modal() {
    let modal_mensajes = new bootstrap.Modal(document.getElementById("modalMostrarMensajes"));
    modal_mensajes.show();
}

window.addEventListener("load", inicio, false);
