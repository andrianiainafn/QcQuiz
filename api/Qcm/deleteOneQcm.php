<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
require('../ConnectToDb.php');


$connect = new ConnectToDb();
$pdo = $connect->connect();

try{
    $path= explode('/',$_SERVER["REQUEST_URI"]);
    $id= urldecode($path[3]);
    if(isset($id)){
        $num_quest = intval($id);
        $query="DELETE FROM qcm WHERE  num_quest=:num_quest";
        $stmt= $pdo->prepare($query);
        $stmt->bindParam(':num_quest', $num_quest,PDO::PARAM_INT);
        if($stmt->execute()){
            $response= ["status"=>200,"message"=>"Question Deleted Successfully"] ;
        }else{
            $response = ["status"=>401,"message"=>"Question Failed to Delete"] ;
        }
        echo json_encode($response);
    }

}catch(\Exception $e){
    echo "Error: " . $e->getMessage();
}
