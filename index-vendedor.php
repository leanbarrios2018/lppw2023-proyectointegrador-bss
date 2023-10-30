<?php include "conetDataBase.php" ?>
<?php include "selectVentas.php" ?>

<?php $db = new Database(); ?>
<?php $ventasData = $db->getVentasData(); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--styles-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/mystyle.css">
    <link rel="stylesheet" href="./css/redimensionar-tabla.css">

    <!--Icon-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="icon" href="./favicon/favicon.ico">

    <!--Javascript-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous" defer></script>
    <!-- <script src="./js/vendedor-listado-venta.js"></script> -->
    <!-- <script src="./js/iniciar-sesion.js" defer></script> -->
    <title>Estockear: Index administrador stock</title>
</head>

<body>
    <header>
        <div class="row">
            <div class="mx-auto col-12">
                <nav class="navbar navbar-expand-lg bg-black">
                    <div class="container-fluid">
                        <a class="navbar-brand text-light fs-5" href="#">Estockear</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link text-light mt-1" href="#">Vendedor</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light mt-1 fs-6" href="vendedor-generar-ventas.php">Generar venta</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light mt-1 fs-6" href="#">Combos</a>
                                </li>
                            </ul>
                        </div>
                        <ul class="navbar-nav">
                            <li class="nav-item text-end">
                                <a class="nav-link" href="./index.html"><button class="btn btn-danger py-1" id="salir"><i class="bi bi-door-closed"></i> Cerrarsesion</button></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    </header>
    <section class="container">
        <div class="mx-auto my-3 col-12">
            <div class="card bg-dark text-light">
                <div class="card-body">
                    <div class="d-flex input-group  mt-4 mb-3" role="search">
                        <input type="search" name="buscarVenta" id="buscarVenta" class="form-control" placeholder="Buscar venta" required>
                        <button class="input-group-text btn btn-danger rounded-1" type="button" id="buscarVentaBoton"><i class="bi bi-search"></i></button>
                    </div>
                    <div class="table-responsive">
                        <table id="tablaVentas" class="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" class="text-center">ID Venta</th>
                                    <th scope="col" class="text-center">Fecha</th>
                                    <th scope="col" class="text-center">Hora</th>
                                    <th scope="col" class="text-center">Total</th>
                                    <th scope="col" class="text-center">Cantidad Ventas</th>
                                </tr>
                            </thead>
                            <tbody id="tbodyVenta">
                                <?php
                                $numFila = 1;
                                foreach ($ventasData as $registro) {
                                    echo "<tr>";
                                    echo "<td>" . $numFila . "</td>";
                                    echo "<td class='text-center'>" . $registro['ID_VENTAS'] . "</td>";
                                    echo "<td class='text-center'>" . $registro['FECHA'] . "</td>";
                                    echo "<td class='text-center'>" . $registro['HORA'] . "</td>";
                                    echo "<td class='text-center'>" . $registro['PRECIO_TOTAL'] . "</td>";
                                    echo "<td class='text-center'>" . $registro['CANTIDAD_VENTA'] . "</td>";
                                    echo "</tr>";
                                    $numFila++;
                                }
                                ?>
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
                            <li class="page-item active"><a class="page-link bg-dark text-light" href="#">1</a></li>
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
</body>

</html>
<?php $db->closeConnection(); ?>