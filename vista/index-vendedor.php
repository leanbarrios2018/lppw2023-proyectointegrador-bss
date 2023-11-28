<?php include "../modelo/dbTwo.php"; ?>
<?php include "../modelo/select-ventas.php" ?>
<?php $tabla = new selectVentas($conn); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--styles-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="../resources/css/style-body.css">
    <link rel="stylesheet" href="../resources/css/style-redimensionar-tabla.css">
    <link rel="stylesheet" href="../resources/css/style-vendedor-buscar-venta.css">

    <!--Icon-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

    <!--My JavaScript-->
    <script src="../controlador/vendedor-buscar-venta.js"></script>

    <!--Javascript-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous" defer></script>
    <title>Estockear: Index administrador stock</title>
</head>

<body class="d-flex flex-column min-vh-100">

    <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
        <a class="navbar-brand text-light fs-5" href="#">Estockear</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active text-warning mt-1 fs-6" aria-current="page" href="index-vendedor.php">Vendedor</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-warning mt-1 fs-6" href="vendedor-generar-ventas.php">Generar venta</a>
                </li>
                <li class="nav-item"><a class="nav-link text-warning mt-1 fs-6" href="VendedorProductoBuscarCargarStock.html">Combos</a>
                </li>
            </ul>
        </div>
        <ul class="navbar-nav">
            <li class="nav-item text-end">
                <a class="nav-link" href="../Controlador/Logout.php"><button class="btn btn-danger btn-sm py-1" id="salir">Cerrar sesion</button></a>
            </li>
        </ul>
    </nav>
    <section class="container mt-6 flex-grow-1 mb-5">
        <div class="mx-auto my-3 col-12">
            <div class="card bg-black text-light rounded-1">
                <div class="card-body">
                    <nav class="input-group  mt-4">
                        <input type="search" name="buscarVenta" id="buscarVenta" class="form-control" placeholder="Buscar producto" autocomplete="off" required>
                        <button class="input-group-text btn btn-danger rounded-1" type="button" id="buscarBoton"><i class="bi bi-search"></i></button>
                    </nav>
                    <ul id="listadoVenta" class="list-unstyled" class="d-none">
                    </ul>
                    <div id="smsResultadoVenta" class="d-none text-danger">No se encontraron resultados</div>
                    <div class="mx-auto mt-3 ms-2">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioFiltro" id="flexRadioFiltrarPorFecha" checked>
                                    <label class="form-check-label" for="flexRadioFiltrarPorFecha">Fecha</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioFiltro" id="flexRadioFiltrarTotal">
                                    <label class="form-check-label" for="flexRadioFiltrarTotal">Total</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioFiltro" id="flexRadioFiltrarPorVentas">
                                    <label class="form-check-label" for="flexRadioFiltrarPorVentas">Ventas</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive mt-2">
                        <table id="tablaVentas" class="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" class="text-center d-none">ID Venta</th>
                                    <th scope="col" class="text-center">Fecha</th>
                                    <th scope="col" class="text-center">Hora</th>
                                    <th scope="col" class="text-center">Total</th>
                                    <th scope="col" class="text-center">Ventas</th>
                                </tr>
                            </thead>
                            <tbody id="tbodyVenta">
                                <?php $tabla->getDatosVentas(); ?>
                            </tbody>
                        </table>
                    </div>
                    <nav aria-label="Ejemplo paginador">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link bg-dark text-light" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item active"><a class="page-link bg-dark text-light" href="index-vendedor.php">1</a></li>
                            <li class="page-item"><a class="page-link bg-dark text-light" href="#">2</a></li>
                            <li class="page-item"><a class="page-link bg-dark text-light" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link bg-dark text-light" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
    <footer class="bg-black text-center text-white mt-2">
        <!-- Grid container -->
        <div class="container p-4 pb-0">
            <!-- Section: Social media -->
            <section class="mb-4">
                <!-- Facebook -->
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-facebook"></i></a>

                <!-- Twitter -->
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-twitter-x"></i></a>

                <!-- Linkedin -->
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-linkedin"></i></a>

                <!-- Github -->
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-github"></i></a>
            </section>
            <!-- Section: Social media -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2023 Copyright:
            <a class="text-white">Estockear</a>
        </div>
        <!-- Copyright -->
    </footer>
</body>

</html>

<?php $tabla->cerrarConexion(); ?>