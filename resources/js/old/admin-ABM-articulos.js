// Funcion para agregar productos a la lista
function formProductos(){
    let form = document.getElementById('addProductos')

    //Condicional de la funcion validarForm
    if(validarForm()){

        let idProducto = document.getElementById('idProducto').value 
        let marcaProducto = document.getElementById('marcaProducto').value
        let nombreProducto = document.getElementById('nombreProducto').value
        let cantidadProducto = document.getElementById('cantidadProducto').value
        let precioProducto = document.getElementById('precioProducto').value
        let vtoProducto = document.getElementById('vtoProducto').value

        let tbody = document.getElementById('tbody')

        let fila = document.createElement('tr')

        let tdId = document.createElement('td')
        tdId.innerHTML=idProducto
        fila.appendChild(tdId)

        let tdMarca = document.createElement('td')
        tdMarca.innerHTML = marcaProducto
        fila.appendChild(tdMarca)
        
        let tdNombre = document.createElement('td')
        tdNombre.innerHTML = nombreProducto
        fila.appendChild(tdNombre)

        let tdCantidad = document.createElement('td')
        tdCantidad.innerHTML = cantidadProducto
        fila.appendChild(tdCantidad)

        let tdPrecio = document.createElement('td')
        tdPrecio.innerHTML = precioProducto
        fila.appendChild(tdPrecio)
        
        let tdFecha = document.createElement('td')
        tdFecha.innerHTML = vtoProducto
        fila.appendChild(tdFecha)

        let tdBtn = document.createElement('td')
        tdBtn.innerHTML = `<div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button class="btn btn-success btn-sm"><i class="bi bi-eye"></i></button>
                                <button class="btn btn-primary  btn-sm" onclick="editarProducto('${idProducto}','${marcaProducto}','${nombreProducto}','${cantidadProducto}','${precioProducto}','${vtoProducto}')"><i class="bi bi-pencil"></i></button>
                                <button class="btn btn-danger btn-sm" id="btnDelete" onclick="deleteProductos()"><i class="bi bi-trash"></i></button>
                            </div>`
        fila.appendChild(tdBtn)

        tbody.appendChild(fila)
        modalOk()
    }else{
        modalError()
        console.log('error')
    }    
 
    form.reset()
}
// Muestra el formulario desde el menu/barra
function showFormProductos(){
    let habilitarForm = document.getElementById('mostrarForm')
    habilitarForm.addEventListener('click',function(){
        let form = document.getElementById('formProductos')
        form.classList.toggle('d-none')
    })
}
///Funcion para editar los productos, se cargan en los input para poder editar lo necesario
function editarProducto(id,marca,nombre,cantidad,precio,vto){
    let form = document.getElementById('addProductos')
    let btn = document.getElementById('btn')
    let datoId = id 
    let datoMarca = marca
    let datoNombre = nombre
    let datoCantidad = cantidad
    let datoPrecio = precio
    let datoVto = vto
    document.getElementById('idProducto').value = datoId
    document.getElementById('marcaProducto').value = datoMarca
    document.getElementById('nombreProducto').value = datoNombre
    document.getElementById('cantidadProducto').value = datoCantidad
    document.getElementById('precioProducto').value = datoPrecio
    document.getElementById('vtoProducto').value = datoVto
    btn.innerHTML='Editar'
    btn.onclick = function(){
        
        
        document.getElementById('idProducto').value = datoId
        document.getElementById('marcaProducto').value = datoMarca
        document.getElementById('nombreProducto').value = datoNombre
        document.getElementById('cantidadProducto').value = datoCantidad
        document.getElementById('precioProducto').value = datoPrecio
        document.getElementById('vtoProducto').value = datoVto
        
        form.reset()
        btn.innerHTML="Guardar"
    
    }
    

}

// Funcion para eliminar los productos, se borran de la tabla
function deleteProductos(){

    document.getElementById('tbody').remove(this)


}

// Funcion para validar los campos, si todo es correcto retorno true si no retoro false
function validarForm(){
    
    let idProducto = document.getElementById('idProducto').value 
    let marcaProducto = document.getElementById('marcaProducto').value
    let nombreProducto = document.getElementById('nombreProducto').value
    let cantidadProducto = document.getElementById('cantidadProducto').value
    let precioProducto = document.getElementById('precioProducto').value
    let vtoProducto = document.getElementById('vtoProducto').value
    if(marcaProducto == ""|| nombreProducto == "" || vtoProducto == "" || cantidadProducto == "" || precioProducto == ""){
        
        return false
    }else{
        return true
    }

}

//Funcion para mostrar modal de error
function modalError(){
    let modalError = new bootstrap.Modal(document.getElementById('modalError'));
    modalError.show();
    
}

function modalOk(){
    let modalOK = new bootstrap.Modal(document.getElementById('modalOk'));
    modalOK.show();
}

window.onload = showFormProductos