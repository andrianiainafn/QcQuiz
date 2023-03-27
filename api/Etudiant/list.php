<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

require('../ConnectToDb.php');

 $connect = new ConnectToDb();
 $pdo = $connect->connect();
 try{
    if(isset($_GET['page'])){
        $currentPage = intval($_GET['page']);
    }else{
        $currentPage = 1;
    }
    //Pagination
    $queryPaginate = "SELECT COUNT(*) as total FROM etudiant";
    $countResult = $pdo->query($queryPaginate)->fetch(PDO::FETCH_OBJ);
    $totalResults = $countResult->total;
    $resultsPerPage = 10;
    $totalPages = ceil($totalResults/$resultsPerPage);
    $offset = 1;//$currentPage + 9
    $studentsQuery = "SELECT * FROM etudiant LIMIT :offset,:limit";
    $stmt1 = $pdo->prepare($studentsQuery);
    $stmt1->bindParam(':offset', $offset, PDO::PARAM_INT);
    $stmt1->bindParam(':limit', $resultsPerPage, PDO::PARAM_INT);
    if($stmt1->execute()){
        $result = $stmt1->fetchAll(PDO::FETCH_OBJ);
        // echo json_encode($result);
    }
    //WITHOUT PAGINATION
    $query = "SELECT * FROM etudiant";
    $stmt = $pdo->prepare($query);
    if($stmt->execute()){
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);
        echo json_encode($result);
    }

}catch(\Exception $e){
    echo "Error" . $e->getMessage();
}