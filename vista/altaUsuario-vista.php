<?php
require_once '../controlador/altaUsuario-controlador.php'
    ?>
<!DOCTYPE html>
<html lang="es">

<head>
    <?php
    $title = 'Estockear: Alta de usuarios.';
    $header_php = '../resources/include/header.php';
    require_once $header_php;
    ?>
    <script defer src="../resources/js/altaUsuarios.js"></script>
</head>

<body>

    <header class="">
        <div class="row">
            <div class="mx-auto col-12">
                <!-- navbar - inicio -->
                <nav class="navbar navbar-expand-lg bg-black">
                    <div class="container-fluid">
                        <a class="navbar-brand text-light fs-5" href="#">Estockear</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link text-light mt-1" href="#">Admin stock</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light mt-1 fs-6"
                                        href="ingresos-mostrar-vista.php">Ingresos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light mt-1 fs-6"
                                        href="egresos-mostrar-vista.php">Egresos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light mt-1 fs-6" href="#">Combos</a>
                                </li>
                            </ul>
                        </div>
                        <ul class="navbar-nav">
                            <li class="nav-item text-end">
                                <a class="nav-link" href="./index.html"><button class="btn btn-danger py-1"
                                        id="salir"><i class="bi bi-door-closed"></i> Cerrar sesion</button></a>
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
                <div class="card bg-black text-light ">
                    <div class="mb-3 p-3">
                        <h3>Alta de usuarios</h3>
                        <?php
                        if (count($arrErrores) > 0) {
                            echo "<div class='alert alert-danger'>Se han detectado errores:</br>";
                            foreach ($arrErrores as $strCampo => $strError) {
                                echo "<strong>" . $strCampo . "</strong>" . ": " . $strError . "</br>";
                            }
                            echo "</div>";

                        }
                        if ($flagAlerta) {
                            echo '<div class="alert alert-success">Se agrego correctamente el usuario </div>';
                        }
                        ?>
                    </div>
                    <div class="card-body">
                        <form method="post" action="">
                            <div class="row">
                                <div class="mb-3 col col-lg-6 col-sm-12">
                                    <label for="nombre" class="form-label">Nombre</label>
                                    <input type="text" class="form-control" name="nombre" id="nombre" required>
                                </div>
                                <div class="mb-3 col col-lg-6 col-sm-12" >
                                    <label for="apellido" class="form-label">Apellido</label>
                                    <input type="text" class="form-control" name="apellido" id="apellido" required>
                                </div>

                            </div>
                            <div class="row">
                                <div class="mb-3 col col-lg-6 col-sm-12">
                                    <label for="username" class="form-label">Nombre de usuario</label>
                                    <input type="text" class="form-control" name="username" id="username" required>
                                </div>
                                <div class="mb-3 col col-lg-6 col-sm-12"">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" name="email" id="email" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="mb-3 col col-lg-6 col-sm-12">
                                    <label for="tipoDocu" class="form-label">Tipo documento</label>
                                    <select class="form-select" aria-label="Default select example" name="tipo_documento"
                                        id="rol">
                                        <option value="DNI">DNI</option>
                                        <option value="LCLE">LCLE</option>
                                    </select>
                                </div>
                                <div class="mb-3 col col-lg-6 col-sm-12">
                                    <label for="nro_documento" class="form-label">Numero documento</label>
                                    <input type="number" class="form-control" name="nro_documento" id="nro_documento" required>
                                </div>

                            </div>
                            <div class="row">
                                <div class="mb-3 col col-lg-6 col-sm-12">
                                    <label for="pass" class="form-label">Password</label>
                                    <input type="password" class="form-control" name="pass" id="pass" required>
                                </div>
                                <div class="mb-3 col col-lg-6 col-sm-12">
                                    <label for="rol" class="form-label">Asignar rol</label>
                                    <select class="form-select" aria-label="Default select example" name="rol" id="rol">
                                        <?php
                                        foreach($objRoles as $rol){
                                          echo '<option value='.$rol['id_rol'].'>'.$rol['nombre'].'</option>';
                                        };
                                        ?>
                                        <!-- <option value="1">Administrador</option>
                                        <option value="2">Empleado</option>
                                        <option value="3">Usuario</option> -->
                                    </select>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Crear</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <script src="../resources/js/productos.js"></script>
</body>

</html>