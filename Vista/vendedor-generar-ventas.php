<?php include "../Modelo/dbTwo.php" ?>
<?php require "../Modelo/insertIntoVentas.php" ?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--styles-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="../Estilos/mystyle.css">
    <link rel="stylesheet" href="../Estilos/redimensionar-tabla.css">
    <link rel="stylesheet" href="../Estilos/style-vendedor.Css">
    <link rel="stylesheet" href="../Estilos/vendedor-buscar-combo.css">


    <!--Icon-->
    <link rel="icon" href="./favicon/favicon.ico">
    <script src="https://kit.fontawesome.com/364177c3f4.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

    <!--Javascript-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous" defer></script>
    <script src="../Controlador/vendedor-buscar-combo.js" defer></script>
    <script src="../Controlador/vendedor-generar-ventas.js"></script>
    <title>Estockear:Generar Ventas</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
        <a class="navbar-brand text-light fs-5" href="#">Estockear</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active text-warning mt-1 fs-6" aria-current="page" href="">Vendedor</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-warning mt-1 fs-6" href="VendedorCrearCliente.php">Generar venta</a>
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
    <section class="container mt-6 w-75">
        <form action="vendedor-generar-ventas.php" id="generarVentas" method="POST">
            <div class="bg-black pt-2 pe-3 pb-2 ps-3  mt-3 rounded-1">
                <nav class="input-group  mt-4 mb-3">
                    <input type="search" name="buscarInput" id="buscarInput" class="form-control" placeholder="Buscar producto" required>
                    <input type="number" name="cantidadInput" id="cantidadInput" placeholder="Cantidad" class="form-control ">
                    <button class="input-group-text btn btn-danger rounded-1" type="button" id="buscarBoton"><i class="bi bi-search"></i></button>
                    <div class="invalid-feedback text-center border border-2 border-danger fs-6 rounded-1 bg-white mt-2" id="smsError"></div>
                </nav>
                <div class="table-responsive">
                    <table class="table table-dark table-striped" id="myTablaVenta">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col" class="text-center">ID Producto</th>
                                <th scope="col" class="text-center">Producto</th>
                                <th scope="col" class="text-center ocultar-en-pantalla-xs">Marca</th>
                                <th scope="col" class="text-center ocultar-en-pantalla-xs">Cantidad</th>
                                <th scope="col" class="text-center ocultar-en-pantalla-xs">Stock</th>
                                <th scope="col" class="text-center ocultar-en-pantalla-xs">Precio unitario</th>
                                <th scope="col" class="text-center ">Sub Total</th>
                                <th scope="col" class="text-center d-none" id="thAcciones">Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">

                        </tbody>
                        <tfoot>
                            <tr>
                                <td scope="row">Precio Total</th>
                                <td class="text-center"></td>
                                <td class="text-center"></td>
                                <td class="text-center ocultar-en-pantalla-xs"></td>
                                <td class="text-center ocultar-en-pantalla-xs d-none" id="tdCantidadTotal"></td>
                                <td class="text-center ocultar-en-pantalla-xs"></td>
                                <td class="text-center ocultar-en-pantalla-xs"></td>
                                <td class="text-center ocultar-en-pantalla-xs"></td>
                                <td class="text-center" id="tdTotal"></td>
                                <td class="text-center d-none ocultar-en-pantalla-xs" id="tdOcultar"><i class="bi bi-bag-check-fill btn btn-sm btn-success"></i></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div class="text-end">
                    <button type="button" class="btn btn-danger" id="agregarCombo" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar Combo&nbsp;<i class="bi bi-bag-plus-fill"></i></button>
                    <button type="submit" class="btn btn-danger" id="realizarVentaBoton">Realizar Venta&nbsp;<i class="bi bi-currency-dollar"></i></button>
                </div>
            </div>
            <input type="number" id="total" name="total" class="form-control d-none" readonly>
            <input type="number" id="cantidadTotal" name="cantidadTotal" class="form-control d-none" readonly>
        </form>
        <div class="modal fade" id="modalMostrarMensajes" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-dark text-light">
                    <div class="modal-header">
                        <h2 class="modal-title fs-5" id="modalTitulo">Venta generada</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" ria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <h6 id="modalTexto"></h6>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="bg-black text-center text-white mt-4">
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
            <a class="text-white">StVent</a>
        </div>
        <!-- Copyright -->
    </footer>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Lista de Comboss</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="d-block" role="search">
                        <div class="input-group">
                            <input class="form-control" type="search" id="autocompletadoBuscarCombo" placeholder="Escribe aquí..." aria-label="Search">
                            <button class="input-group-text btn btn-outline-danger" type="button"><i class="bi bi-search"></i></button>
                        </div>
                        <ul id="listaVenta" class="list-unstyled">

                        </ul>
                        <div id="smsResultado" class="d-none text-danger">No se encontraron resultados</div>
                    </form>
                    <div class="mx-auto mt-3">
                        <!-- <h6>Filtrar por (predeterminado: nombre):</h6> -->
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioFiltro" id="flexRadioFiltrarPorCombo" checked>
                                    <label class="form-check-label" for="flexRadioFiltrarPorNombre">Combo</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioFiltro" id="flexRadioFiltrarPorPrecio">
                                    <label class="form-check-label" for="flexRadioFiltrarPorRol">Precio</label>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioFiltro" id="flexRadioFiltrarPorId">
                                    <label class="form-check-label" for="flexRadioFiltrarPorId">ID</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-black mt-4">
                        <table class="table table-dark table-striped" id="tablaCombos">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" class="text-center">ID</th>
                                    <th scope="col" class="text-center">Combo</th>
                                    <th scope="col" class="text-center">Detalle</th>
                                    <th scope="col" class="text-center">Precio</th>
                                    <th scope="col" class="text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td class="text-center">2</td>
                                    <td class="text-center">Verduras</td>
                                    <td class="text-center">2 kg de papa y 2 kg cebolla</td>
                                    <td class="text-center">$800</td>
                                    <td class="text-center">
                                        <div class='btn-group' role='group' aria-label='Grupo botones'><button type='button' class='btn btn-primary btn-sm' data-btn-grupo='agregar-combo'><i class="bi bi-plus-square"></i></button></div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td class="text-center">1</td>
                                    <td class="text-center">Huevos</td>
                                    <td class="text-center">8 ud huevos blanco</td>
                                    <td class="text-center">$600</td>
                                    <td class="text-center">
                                        <div class='btn-group' role='group' aria-label='Grupo botones'><button type='button' class='btn btn-primary btn-sm' data-btn-grupo='agregar-combo'><i class="bi bi-plus-square"></i></button></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</body>

</html>

<?php $conn = null; ?>