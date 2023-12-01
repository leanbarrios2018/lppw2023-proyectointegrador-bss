<!DOCTYPE html>
<html lang="en">

<head>
  <?php
  $title = 'Estockear: Visualizar ingresos.';
  $header_php = '../resources/include/header.php';
  require_once $header_php;
  ?>
  <script defer src="../resources/js/ingresos.js"></script>
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
                  <a class="nav-link text-light mt-1 fs-6" href="productos-mostrar-vista.php">Productos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light mt-1 fs-6" href="egresos-mostrar-vista.php">Egresos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light mt-1 fs-6" href="#">Combos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light mt-1 fs-6" href="notificador.php">Notificador</a>
                </li>
              </ul>
            </div>
            <ul class="navbar-nav pe-2" id="divMainNotificaciones">
              <li class="nav-item text-end">
                <button type="button" class="btn btn-primary position-relative btn-sm" id="botonIndicador">
                  <span><i class="bi bi-bell-fill"></i></span>
                  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle d-md-none d-lg-block" id="indicadorColor">
                    <span class="visually-hidden"></span>
                  </span>
                </button>
                <div class="bg-white rounded-3 d-none" id="divNotificaciones">
                  <div class="card">
                    <div class="card-header border-bottom border-1 border-secondary py-1 ps-1 bg-black text-light">
                      <h5 class="">Notificaciones</h5>
                    </div>
                    <div id="divNoNotificacion" class="d-none">
                      <h6 class="py-2 px-2">No tiene ninguna notificacion</h6>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item text-end">
                <a class="nav-link" href="#"><button class="btn btn-danger py-1" id="salir"><i class="bi bi-door-closed"></i> Cerrar sesion</button></a>
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
                <h3>Listado ingresos.</h3>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-dark table-stripped">
                    <thead>
                      <th>ID ingreso</th>
                      <th>Nombre</th>
                      <th>Fecha ingreso</th>
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
</body>

</html>