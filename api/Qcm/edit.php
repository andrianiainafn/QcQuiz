<?php
     header('Access-Control-Allow-Origin: http://localhost:3000');
     header('Access-Control-Allow-Headers: Content-Type');
     header('Access-Control-Allow-Credentials: true');
     header('Access-Control-Allow-Methods: *');
     require('../ConnectToDb.php');
  
     $connect = new ConnectToDb();
     $pdo = $connect->connect();
 
     $getQcm = json_decode(file_get_contents('php://input'));

    if($getQcm){
         $newQcm = "SELECT * FROM qcm WHERE num_quest = :num_quest";
         $stmt = $pdo->prepare($newQcm);
         $stmt->bindParam(':num_quest',$getQcm->num_quest);
            if(false){
                $response = ["status" =>400,"message" =>"Error"];
            }else{
                $query = "UPDATE qcm SET reponse1 =:reponse1,reponse2 =:reponse2, reponse3 =:reponse3,reponse4 =:reponse4 ,reponseV =:reponseV ,quetion =:question,niveau =:niveau WHERE num_quest =:num_quest";
                $stmt = $pdo->prepare($query);
                $stmt->bindParam(':num_quest',$getQcm->num_quest);
                $stmt->bindParam(':reponse1',$getQcm->reponse1);
                $stmt->bindParam(':reponse2',$getQcm->reponse2);
                $stmt->bindParam(':repone3',$getQcm->reponse3);
                $stmt->bindParam(':reponse4',$getQcm->reponse4);
                $stmt->bindParam(':niveau',$getQcm->niveau);
                $stmt->bindParam(':reponseV',$getQcm->reponseV);
                if($stmt->execute()){
                    $response=["status"=> 200,"message"=> "User created successfully"];
                }else{
                    $response=["status"=> 401,"message"=> "Error when creating user"]; 
                }
            }
                echo json_encode($response);
         }
    
    
    
    
    