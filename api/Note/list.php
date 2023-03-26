<?php
        
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Credentials: true');
    require('../ConnectToDb.php');

    $connect = new ConnectToDb();
    $pdo = $connect->connect();

    try {
        $query = "SELECT etudiant JOIN exam ON(etudiant.num_etudiant=exam.num_etudiant) order by note desc"; 
        $stmt = $pdo->prepare($query);
        if ($stmt->execute()){
            $result = $stmt->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($result);
        }
    }catch(\Exception $e) {
        echo "Error: " . $e->getMessage();
    }