<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
require('../ConnectToDb.php');

try{
 $gradeChoice= isset($_GET['niveau']);
 $connect = new ConnectToDb();
 $pdo = $connect->connect();
 $sql = "SELECT * FROM qcm WHERE Niveau =:grade  LIMIT 10";
 $result = $pdo->query($sql);  
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':grade',$gradeChoice);
 if($stmt->execute()){
    $result = $stmt->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($result);
}

}catch(\Exception $e){
    echo "Error" . $e->getMessage();
}