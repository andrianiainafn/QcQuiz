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
    $niveau = urldecode($path[3]);
    if(isset($path[3])){
        $query = "SELECT * FROM etudiant WHERE  niveau = :niveau";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':niveau',$niveau,PDO::PARAM_STR);
        $queryNombre = "SELECT COUNT(*) as effectif FROM etudiant WHERE niveau  = :niveau";
        $stmtNombre = $pdo->prepare($queryNombre);
        $stmtNombre->bindParam(':niveau',$niveau,PDO::PARAM_STR);
        if($stmtNombre->execute()){
            $nombre = $stmtNombre->fetch();
        }
        if($stmt->execute()){
            $student = $stmt->fetchAll(PDO::FETCH_OBJ);
            $result = [
                'lists' => $student,
                'effectif' => $nombre
            ];
            echo json_encode($result);
        }
    }
   }catch(\Exception $e){
    echo "Echo" . $e->getMessage();
   }