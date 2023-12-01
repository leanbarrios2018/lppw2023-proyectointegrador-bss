<?php
$servername = "localhost";
$username = "root";
$password = "";
<<<<<<< HEAD
$db = "estockear_db_v2.2";
=======
$db = "estockear_db";
>>>>>>> ce1c70f61c6f12b2660267ece3e8424fa6347968
try {
    $conn = new PDO("mysql:host=$servername;dbname=" . $db . ";charset=utf8", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo "Connected successfully";
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
