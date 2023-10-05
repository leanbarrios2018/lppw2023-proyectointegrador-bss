document.addEventListener('DOMContentLoaded', function () {
    // Obtengo los datos guardados en localStorage
    const datosGuardados = JSON.parse(localStorage.getItem('datosGuardados'));

    if (datosGuardados && datosGuardados.length > 0) {
        // Obtengo la referencia a la tabla donde deseo mostrar los datos
        const tabla = document.getElementById('tablaVentas');

        // Itero a través de los datos y creo las filas de la tabla
        datosGuardados.forEach(function (datos) {
            const fila = document.createElement('tr');

            // Creo las celdas de la tabla (td) y agrego los datos correspondientes
            for (const key in datos) {
                const celda = document.createElement('td');
                celda.textContent = datos[key];
                celda.setAttribute("class", "text-center")
                fila.appendChild(celda);
            }
            // Agrego la fila a la tabla
            tabla.appendChild(fila);
            //Agrego los botones
            insertarBoton();
        });
    }
});
function insertarBoton() {
    let td = document.querySelectorAll("tr>td");
    for (let filas of td) {
        if (filas === td[td.length - 1]) {//la longitud del td menos 1 (debido a que los índices en JavaScript comienzan en 0)
            filas.innerHTML = "<div class='btn-group' role='group' aria-label='Grupo botones'><button class='btn btn-success btn-sm' data-btn-grupo='mostrar-detalles-usuario'><i class='bi bi-eye'></i></button><button class='btn btn-primary btn-sm' data-btn-grupo='modificar-usuario'><i class='bi bi-pencil'></i></button><button class='btn btn-danger btn-sm' data-btn-grupo='eliminar-usuario'><i class='bi bi-trash'></i></button></div>";
        }
        else {
            console.log("Error")
        }
    }
}
