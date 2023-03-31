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
                $query = "SELECT * FROM etudiant WHERE nom LIKE '%:nom%' OR matricule LIKE '%:matricule%'";
                $stmt = $pdo->prepare($query);
                $stmt->bindParam(':nom',$path[3]);
                $stmt->bindParam(':matricule',$path[3]);
                if($stmt->execute()){
                    $result = $stmt->fetchAll();
                    var_dump($result);
                }

            }
    }
    catch(\Exception $e){
        echo 'Error: '.$e->getMessage();
    }
