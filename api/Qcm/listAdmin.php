<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
require('../ConnectToDb.php');

$connect = new ConnectToDb();
 $pdo = $connect->connect();
try{
    //PAGINATION
      $req_count = $pdo->query("SELECT COUNT(*) as total FROM qcm");
      $count = $req_count->fetch()['total'];
      $nbrPage=10;
      $nb_pages =ceil($count/$nbrPage);
      $page = $_GET['page'];

    if(empty($page) || !is_numeric($page) || $page >$nb_pages){
        $nombreElemPAge= (int) $_GET['nombre'];
       $page = 1;
    }
    $offset = ($page-1)* $nbrPage;
    $req = "SELECT * FROM qcm LIMIT :offset,:limit";
    $stmt = $pdo->prepare($req);
    $stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
    $stmt->bindParam(':limit', $nbrPage, PDO::PARAM_INT);
    $stmt->execute();
    $result_1 = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
 //LIST
 $gradeChoice= isset($_GET['niveau']);
 $sql = "SELECT * FROM qcm WHERE Niveau = :grade ORDER BY RAND() LIMIT 10";
 $result = $pdo->query($sql);  
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':grade',$gradeChoice);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_OBJ);
 
    //affichage(jereo kely fatsy aiko le miaafiche resultat anakiro ato de sady tsy nataoko anaty condition)
    echo json_encode($result);
    echo json_encode($result_1);

    
}catch(\Exception $e){
    echo "Error" . $e->getMessage();
}