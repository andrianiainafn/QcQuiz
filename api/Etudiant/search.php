<?php
      header('Access-Control-Allow-Origin: http://localhost:3000');
      header('Access-Control-Allow-Headers: Content-Type');
      header('Access-Control-Allow-Credentials: true');
      header('Access-Control-Allow-Methods: *');
      require('../ConnectToDb.php');
   
      $connect = new ConnectToDb();
      $pdo = $connect->connect();
    try{
        $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[3])){
                $keyword = '%' . $path[3] . '%';
                $query = "SELECT * FROM etudiant WHERE nom LIKE :keyword OR num_etudiant LIKE :keyword";
                $stmt = $pdo->prepare($query);
                $stmt->bindParam(':keyword', $keyword);
                if($stmt->execute()){
                    $result = $stmt->fetchAll();
                    echo json_encode($result);
                }

            }
    }
    catch(\Exception $e){
        echo 'Error: '.$e->getMessage();
    }
