<?php

    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Credentials: true');
    require('../ConnectToDb.php');

    $connect = new ConnectToDb();
    $pdo = $connect->connect();
    //Mbola mila testena ny eto
   try{
    $tableau = string(json_decode(file_get_contents('php://input')));

    $query = "  DELETE FROM qcm WHERE num_quest in (:tableau)"; 
    
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':tableau',$tableau);
    
    if(stmt->execute()) {
        $response=["status"=> 200,"message"=> "User created successfully"];
    }else {
        $response=["status"=> 401,"message"=> "Error when creating user"];
    }
        echo json_encode($response);
   }
   catch(\Exception $e) {
    echo "Error: " . $e->getMessage();
   }
?>