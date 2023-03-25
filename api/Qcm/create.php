<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
   header('Access-Control-Allow-Headers: Content-Type');
   header('Access-Control-Allow-Credentials: true');
   require('../ConnectToDb.php');

    $connect = new ConnectToDb();
    $pdo = $connect->connect();
    try{
        $qcm_info= json_decode(file_get_contents('php://input'));
        if($qcm_info){
            $query = "INSERT INTO qcm(question,reponse1,reponse2,reponse3,reponse4,reponse_vrai,niveau) VALUES(:question,:reponse1,:reponse2,:reponse3,:reponse4,:reponse_vrai,:niveau)";
            $stmt = $pdo->prepare($query);
            $stmt->bindParam(':question', $qcm_info->question);
            $stmt->bindParam(':reponse1', $qcm_info->reponse1);
            $stmt->bindParam(':reponse2', $qcm_info->reponse2);
            $stmt->bindParam(':reponse3', $qcm_info->reponse3);
            $stmt->bindParam(':reponse4', $qcm_info->reponse4);
            $stmt->bindParam(':niveau', $qcm_info->niveau);
            $stmt->bindParam(':reponse_vrai',$qcm_info->reponse_vrai);
            if($stmt->execute()){
                $response=["status"=> 200,"message"=> "Qcm created successfully"];
            }else{
                $response=["status"=> 401,"message"=> "Error when creating Qcm"];
            }
            echo json_encode($response);
        }

    }catch(\Exception $e){
        echo 'Error: '.$e->getMessage;
    }
