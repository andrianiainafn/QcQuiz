<?php
        header('Access-Control-Allow-Origin: http://localhost:3000');
        header('Access-Control-Allow-Headers: Content-Type');
        header('Access-Control-Allow-Credentials: true');
        require('../ConnectToDb.php');
    
        $connect = new ConnectToDb();
        $pdo = $connect->connect();
        try{
          $user_info = json_decode(file_get_contents('php://input'));
          $num_exam = uniqid();
          if($user_info){
            $query = "INSERT INTO examen (num_exam,num_etudiant,annee_univ,note) VALUES (:num_exam,:num_etudiant,:annee_univ,:note)";
            $stmt = $pdo->prepare($query);
            $stmt->bindParam(':num_exam',$num_exam);
            $stmt->bindParam(':annee_univ',$user_info->annee_univ);
            $stmt->bindParam(':num_etudiant',$user_info->num_etudiant);
            $stmt->bindParam(':note',$user_info->note);
            if($stmt->execute()){
                $response = ["status"=> 200,"message"=> "User created successfully"];
            }else{
                $response=["status"=> 401,"message"=> "Error when creating user"];
            }
           echo json_encode($response);
          }  

        }catch(Exception $e){
            echo 'Error: '.$e->getMessage();
        }
?>