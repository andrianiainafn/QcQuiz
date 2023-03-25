<?php
   header('Access-Control-Allow-Origin: http://localhost:3000');
   header('Access-Control-Allow-Headers: Content-Type');
   header('Access-Control-Allow-Credentials: true');
   header('Access-Control-Allow-Methods: *');

   require('../ConnectToDb.php');

   $connect = new ConnectToDb();
   $pdo = $connect->connect();
   try{
    $path = explode('/',$_SERVER['REQUEST_URI']);
    $etudiant_id = urldecode($path[3]);
    if(isset($path[3])){
        $query = "SELECT * FROM etudiant WHERE num_etudiant = :etudiant_id";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':etudiant_id',$etudiant_id,PDO::PARAM_STR);
        if($stmt->execute()){
            $user = $stmt->fetch(PDO::FETCH_OBJ);
            echo json_encode($user);
        }
    }
   }catch(\Exception $e){
    echo "Echo" . $e->getMessage();
   }