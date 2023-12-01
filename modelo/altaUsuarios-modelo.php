<?php

class Usuario
{
    protected $username;
    protected $nombre;
    protected $apellido;
    protected $tipo_documento;

    protected $documento;
    protected $email;
    protected $password;

    public function __construct($username, $nombre,$apellido,$tipo_documento, $documento,$email,$password)
    {
      $this->username = $username;
      $this->nombre = $nombre;
      $this->apellido = $apellido;
      $this->tipo_documento = $tipo_documento;
      $this->documento = $documento;
      $this->email = $email;
      $this->password = $password;
      
    }
    public function crear()
    {
      
      include "../modelo/dbTwo.php";

      /** @var \PDO $conn */
      $stmt = $conn->prepare("INSERT INTO usuarios (username, nombre, apellido, tipo_documento, nro_documento, email)
              VALUES (:username, :nombre, :apellido, :tipo_documento, :nro_documento, :email)");
      $stmt->bindParam(':username', $this->username);
      $stmt->bindParam(':nombre', $this->nombre);
      $stmt->bindParam(':apellido', $this->apellido);
      $stmt->bindParam(':tipo_documento', $this->tipo_documento);
      $stmt->bindParam(':nro_documento', $this->documento);
      $stmt->bindParam(':email', $this->email);
      // $stmt->bindParam(':pass', $this->password);

      return $stmt->execute();
          
    }
    public function queryUsername()
    {
      $arrayUsuario=[];
      $errorConsulta=false;
      include "../modelo/dbTwo.php";
      
      /** @var \PDO $conn */
	  try {
    
      $consultaUsuario = "SELECT count(username) as total FROM usuarios WHERE username=:username";
      $objQuery = $conn->prepare($consultaUsuario);
      $objQuery->bindParam(':username', $this->username);
      $objQuery->execute();
      while($row = $objQuery->fetch(PDO::FETCH_ASSOC)){
        array_push($arrayUsuario,$row); 
        $resul = $row["total"];
        return $resul;
    };
      
      // if($resul == 1 ){
      //   // $errorConsulta=true;
      //   echo"existe";
      //   return $errorConsulta;
      // }if($resul == 0){
      //   echo"no existe";
      //   return $errorConsulta;
      // }
    } catch (Exception $e) {
      echo "Error inesperado: " . $e->getMessage();
      die();
    }
    
    }

    public function getNombre()
    {
      return $this->nombre;
    }
    public function getApellido()
    {
      return $this->apellido;
    }public function getDocumento()
    {
      return $this->documento;
    }public function getEmail()
    {
      return $this->email;
    }public function getPassword()
    {
      return $this->password;
    }
}

?>