<?php
   header('Access-Control-Allow-Origin: http://localhost:3000');
   header('Access-Control-Allow-Headers: Content-Type');
   header('Access-Control-Allow-Credentials: true');
   header('Access-Control-Allow-Methods: *');
   require('../ConnectToDb.php');

   $connect = new ConnectToDb();
   $pdo = $connect->connect();
   try {   
        $path = explode('/',$_SERVER['REQUEST_URI']);
            if(isset($path[3]) &&  is_numeric($path[3])){
                $query = "SELECT * FROM qcm WHERE num_quest = :num_quest";
                $stmt = $pdo->prepare($query);
                $stmt->bindParam(':num_quest',$path[3]);
                $stmt->execute();
                $qcm = $stmt->fetch(PDO::FETCH_OBJ);
                echo json_encode($qcm);
            }
   }
   catch(\Exception $e) {
    echo "Error: " . $e->getMessage();
   }
   