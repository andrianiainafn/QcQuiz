<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
require('../ConnectToDb.php');

 $connect = new ConnectToDb();
 $pdo = $connect->connect();
 try{
     
     //PAGINATION
     // if(isset($_GET['page'])){
     //     $currentPage = intval($_GET['page']);
     // }else{
     //     $currentPage = 1;
     // }
     
    // $query = "SELECT COUNT(*) as total FROM etudiant";
    // $countResult = $pdo->query($query)->fetch(PDO::FETCH_OBJ);
    // $totalResults = $countResult->total;
    // $resultsPerPage = 10;
    // $totalPages = ceil($totalResults/$resultsPerPage);
    // $offset = 1;//$currentPage + 9
    // $studentsQuery = "SELECT * FROM etudiant LIMIT :offset,:limit";
    // $stmt = $pdo->prepare($studentsQuery);
    // $stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
    // $stmt->bindParam(':limit', $resultsPerPage, PDO::PARAM_INT);
    // if($stmt->execute()){
    //     $result = $stmt->fetchAll(PDO::FETCH_OBJ);
    //     echo json_encode($result);
    // }
    $query = "SELECT * FROM qcm";
    $stmt = $pdo->prepare($query);
    if($stmt->execute()){
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($result);
    }else{
        $response=["status"=> 401,"message"=> "Error when creating Qcm"];
        echo json_encode($response);
    }

}catch(\Exception $e){
    echo "Error" . $e->getMessage();
}