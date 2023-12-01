<?php
require '../modelo/roles-modelo.php';
$queryRol = new Roles();
$objRoles = $queryRol->queryRol();


$flagAlerta = false;

$arrErrores = [];
if (isset($_POST['username']) || isset($_POST['nombre']) || isset($_POST['apellido']) || isset($_POST['tipo_documento']) || isset($_POST['nro_documento']) || isset($_POST['email']) || isset($_POST['pass'])) {

    // require_once '..modelo/alataUsuarios-modelos.php';
  
    //Valido nombre
    if (!isset($_POST['nombre']) || strlen($_POST['nombre']) < 4) {
      $arrErrores['nombre'] = 'Por favor, complete el campo correctamente.';
    }
    if (isset($_POST['nro_documento']) < 10000000 ) {
      $arrErrores['nro_documento'] = 'Por favor, Ingrese un dni valido.';
    }
    //Valido email
    if (!isset($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
      $arrErrores['email'] = 'Debe ingresar su correo electrónico.';
    }
    if (!isset($_POST['pass']) || strlen($_POST['pass']) < 4 ) {
      $arrErrores['pass'] = 'La contrasela de tener al menos 4 caracteres[a-Z,1-9]';
    }
    if (count($arrErrores) == 0) {
      require '../modelo/altaUsuarios-modelo.php';  
      // Llamo al modelo para guardar registro
      try {
        $username = $_POST['username'];
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $tipo_documento = $_POST['tipo_documento'];
        $nro_documento = $_POST['nro_documento'];
        $email = $_POST['email'];
        $pass = $_POST['pass'];
        
        $objALtaUsuario = new Usuario($username,$nombre,$apellido,$tipo_documento,$nro_documento,$email,$pass);
        $objRequest = $objALtaUsuario->queryUsername();
        // echo $objRequest;
        if($objRequest == 1){
            $arrErrores['username'] = 'Ya existe el usuario';
            
        }if($objRequest == 0){
        $objALtaUsuario->crear();
        $flagAlerta = true;
        }
        
      } catch (Exception $e) {
        echo "Error inesperado" . $e->getMessage();
        die(); // exit;
      }
    }
  }

// require '../vista/altaUsuario-vista.php'  

?>