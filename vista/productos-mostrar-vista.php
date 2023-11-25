<!DOCTYPE html>
<html lang="en">
<head>
	 <?php
	 $title = 'Estockear: Visualizar productos.';
	 $header_php = '../resources/include/header.php';
	 require_once $header_php;
	 ?>
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
                  <li class="nav-item">
                      <a class="nav-link text-light mt-1" href="#">Admin stock</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link text-light mt-1 fs-6" href="ingresos-mostrar-vista.php">Ingresos</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link text-light mt-1 fs-6" href="egresos-mostrar-vista.php">Egresos</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link text-light mt-1 fs-6" href="#">Combos</a>
                  </li>
                </ul>
              </div>
              <ul class="navbar-nav">
                <li class="nav-item text-end">
                    <a class="nav-link" href="./index.html"><button class="btn btn-danger py-1" id="salir"><i class="bi bi-door-closed"></i> Cerrar sesion</button></a>
                </li>
              </ul>
            </div>
          </nav>
          <!-- navbar - fin -->
        </div>
	    </div>
    </header>
 <div class="container">
 	<div class="row">
 		<div class="mx-auto my-3 col-xs-12 col-sm-12 col-md-9 col-lg-9">
 			<div class="card bg-black text-light">
 				<div class="card-body">
 					<div class="card bg-dark text-light">
 						<div class="card-header">
 							<h3>Listado productos.</h3>
 						</div>
 						<div class="card-body">
 							<div class="table-responsive">
 								<table class="table table-dark table-stripped">
 									<thead>
 										<th>ID Producto</th>
 										<th>Nombre</th>
 										<th>Marca</th>
 										<th>Precio de compra</th>
 										<th>Precio de venta</th>
 										<th>&nbsp;</th>
 									</thead>
 									<tbody id="tbodyProductos"></tbody>
 								</table>
 							</div>
 						</div>
 					</div>
 				</div>
 			</div>
 		</div>
 	</div>
 </div>
 <script src="../resources/js/productos.js" defer></script>
</body>
</html>

