<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
require('../ConnectToDb.php');

$connect = new ConnectToDb();
$pdo = $connect->connect();

try{
    $path = explode('/',$_SERVER['REQUEST_URI']);
    $studentLevel = $path[3];
    $query = "SELECT * FROM qcm WHERE niveau = :niveau ORDER BY RAND() LIMIT 10";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':niveau',$studentLevel);
    if($stmt->execute()){
        $list = $stmt->fetchAll();
        echo json_encode($list);
    }else{
        echo "Sql error: " . $stmt->error;
    }

}catch(\Exception $e){
    echo "Error" . $e->getMessage();
}