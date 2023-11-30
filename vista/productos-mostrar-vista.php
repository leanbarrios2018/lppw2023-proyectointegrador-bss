<!DOCTYPE html>
<html lang="en">
<head>
	 <?php
	 $title = 'Estockear: Visualizar productos.';
	 $header_php = '../resources/include/header.php';
   require_once $header_php;
	 ?>
   <link rel="stylesheet" type="text/css" href="../resources/css/style-redimensionar-tabla.css">
</head>
<body>
  <header class="">
    <div class="row">
      <div class="mx-auto col-12">
        <!-- navbar - inicio -->
        <nav class="navbar navbar-expand-lg bg-black">
          <div class="container-fluid">
            <a class="navbar-brand text-light fs-5" href="#">Estockear</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link text-light mt-1" href="#">Admin stock</a></li>
                <li class="nav-item"><a class="nav-link text-light mt-1 fs-6" href="#frmNuevoProducto" id="navBarBtnNuevoProducto">Nuevo producto</a></li>
                <li class="nav-item"><a class="nav-link text-light mt-1 fs-6" href="ingresos-mostrar-vista.php">Ingresos</a></li>
                <li class="nav-item"><a class="nav-link text-light mt-1 fs-6" href="egresos-mostrar-vista.php">Egresos</a></li>
                <li class="nav-item"><a class="nav-link text-light mt-1 fs-6" href="#">Combos</a></li>
              </ul>
            </div>
            <ul class="navbar-nav">
              <li class="nav-item text-end"><a class="nav-link" href="./index.html"><button class="btn btn-danger py-1" id="salir"><i class="bi bi-door-closed"></i> Cerrar sesion</button></a></li>
            </ul>
          </div>
        </nav>
        <!-- navbar - fin -->
      </div>
    </div>
  </header>

  <section class="container">
    <div class="row">
      <div class="mx-auto my-3 col-12">
        <div class="card bg-black text-light">
          <div class="card-body">
            <?php
            if (count($array_errores) == 0 && $_SESSION["alta_producto"] == true) {
              echo '<div class="alert alert-success alert-dismissible fade show" role="alert">';
              echo 'Producto registrado exitosamente.';
              echo '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
              echo '</div>';
            } else if (count($array_errores) > 0) {
              echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">';
              echo 'Se han detectado errores:' . '</br>';
              foreach ($array_errores as $str_campo => $str_error) {
                echo '<strong>' . $str_campo . '</strong>' . ': ' . $str_error . '</br>';
              }
              echo '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
              echo '</div>';
            }
            ?>
            <div id="divOcultarMostrarBusqueda" class="mx-auto mb-3 col-12">
              <div class="d-flex" role="search">
                <input class="form-control me-2" id="buscarProducto" type="text" placeholder="Buscar producto"
                aria-label="Buscar">
                <button class="btn btn-outline-success" type="button"><i class="bi bi-search"></i></button>
              </div>
            </div>
            <!-- tabla productos inicio -->
            <div id="divOcultarMostrarTablaProductos">
              <div class="card bg-dark text-light">
                <div class="card-header">
                  <h3>Productos.</h3>
                </div>
                <div class="card-body">
                  <!-- <div id="traerTablaConPaginador"></div> -->
                  <div class="table-responsive">
                    <table class="table table-dark table-stripped">
                      <thead>
                        <th class="ocultar-en-pantalla-xs ocultar-en-pantalla-sm">ID</th>
                        <th>Nombre</th>
                        <th class="ocultar-en-pantalla-xs ocultar-en-pantalla-sm ocultar-en-pantalla-md">Marca</th>
                        <th class="ocultar-en-pantalla-xs ocultar-en-pantalla-sm ocultar-en-pantalla-md">Categoria</th>
                        <th class="ocultar-en-pantalla-xs">Precio de compra</th>
                        <th class="ocultar-en-pantalla-xs">Precio de venta</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </thead>
                      <tbody id="cargarTbody"></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!-- tabla productos fin -->
            <!-- formulario alta productos inicio -->
            <div id="divMostrarOcultarFormularioNuevoProducto" class="mx-auto my-1 col-12 d-none">
              <form id="frmNuevoProducto" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
                <div class="card bg-dark text-light">
                  <div class="card-header text-light">
                    <h5>Nuevo producto.</h5>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="mx-auto mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <div class="form-group">
                          <label for="frmNuevoProductoNombre" class="form-label">Nombre</label>
                          <input type="text" class="form-control" id="frmNuevoProductoNombre" name="frmNuevoProductoNombre" />
                          <div class="invalid-feedback" id="errorNuevoProductoNombre"></div>
                        </div>
                      </div>
                      <div class="mx-auto mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <label for="frmNuevoNuevoProductoMarca" class="form-label">Marca</label>
                        <input type="text" class="form-control" id="frmNuevoNuevoProductoMarca" name="frmNuevoNuevoProductoMarca" />
                        <div class="invalid-feedback" id="errorNuevoProductoMarca"></div>
                      </div>
                      <div id="cargarSelectNuevoProductoCategoría" class="mx-auto mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-4"></div>
                      <div class="mx-auto mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <label for="frmNuevoProductoPrecioCompra" class="form-label">Precio de compra</label>
                        <input type="number" step="any" class="form-control" id="frmNuevoProductoPrecioCompra" name="frmNuevoProductoPrecioCompra" />
                        <div class="invalid-feedback" id="errorNuevoProductoPrecioCompra"></div>
                      </div>
                      <div class="mx-auto mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <label for="frmNuevoProductoPrecioVenta" class="form-label">Precio de venta</label>
                        <input type="number" step="any" class="form-control" id="frmNuevoProductoPrecioVenta" name="frmNuevoProductoPrecioVenta" />
                        <div class="invalid-feedback" id="errorNuevoProductoPrecioVenta"></div>
                      </div>
                      <div class="mx-auto mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <label for="frmSelectorNuevoProductoEstado" class="form-label">Estado</label>
                        <select class="form-select" id="frmSelectorNuevoProductoEstado" name="frmSelectorNuevoProductoEstado" aria-label="Seleccione estado del producto">
                          <option selected></option>
                          <option value="1" data-grupo-usuarios="Habilitado">Habilitado</option>
                          <option value="0" data-grupo-usuarios="Inhabilitado">Inhabilitado</option>
                        </select>
                        <div class="invalid-feedback" id="errorSelectorNuevoProductoEstado"></div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="d-grid gap-2">
                      <button id="btnNuevoProductoCrear" type="submit" class="btn btn-primary"><i class="bi bi-plus-circle"></i> Guardar cambios</button>
                      <button type="button" id="btnProductoCancelarCreacion" class="btn btn-secondary"><i
                            class="bi bi-x-circle"></i> Cancelar</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <!-- formulario alta productos fin -->
          </div>
        </div>
      </div>
    </div>
  </section>

  <?php 
  $footer_php = '../resources/include/footer.php';
  require_once $footer_php; 
  ?>
  <script defer type="text/javascript" src="../resources/js/productos.js"></script>
</body>
</html>

