<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
require('../ConnectToDb.php');

$connect = new ConnectToDb();
$pdo = $connect->connect();

try{
    $test=['1435HF','1432','1432','1432','1432','1432','1432'];
    $path = explode('/',$_SERVER['REQUEST_URI']);
    if(isset($path[3]) &&  is_numeric($path[3])){
        $query = "DELETE FROM etudiant WHERE etudiant_id = :etudiant_id";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':etudiant_id',$path[3]);
        if($stmt->execute()){
            $response=["status"=> 200,"message"=> "User created successfully"];
        }else{
            $response=["status"=> 401,"message"=> "Error when creating user"];
        }
    }
    echo json_encode($response);
}catch(\Exception $e){
    echo $e->getMessage();
}