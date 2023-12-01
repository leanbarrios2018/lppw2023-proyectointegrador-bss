<?php

class Roles
{
    
    public function queryRol()
    {
        include "../modelo/dbTwo.php";

      /** @var \PDO $conn */
      try {
        $arrayRol=[];
        $consultaRol = "SELECT * FROM roles";
        $objQuery = $conn->query($consultaRol);
        $objQuery->execute();
        while($row = $objQuery->fetch(PDO::FETCH_ASSOC)){
          array_push($arrayRol,$row); 
          $resul = $row["nombre"];
      };
      return $arrayRol;
      } catch (Exception $e) {
        echo "Error inesperado: " . $e->getMessage();
        die();
      }
    }

}

?>