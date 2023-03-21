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
            $query = "INSERT INTO qcm VALUES(:question,:reponse1,:reponse2,:reponse3,:reponse4,:reponse_vrai,:niveau)";
            $stmt = $pdo->prepare($query);
            $stmt->bindParam(':question', $qcm->question);
            $stmt->bindParam(':reponse1', $qcm->reponse1);
            $stmt->bindParam(':reponse2', $qcm->reponse2);
            $stmt->bindParam(':reponse3', $qcm->reponse3);
            $stmt->bindParam(':reponse4', $qcm->reponse4);
            $stmt->bindParam(':niveau', $qcm->niveau);
            $stmt->bindParam('::reponse_vrai',$qcm->reponse_vrai);
            if($stmt->execute()){
                $response=["status"=>200,"message"=>"Qcm created successfully"];
            }else{
                $reponse=["status"=>401,"message"=>"Qcm failed to create"];
            }
            echo json_encode($reponse);
        }

    }catch(\Exception $e){
        echo 'Error: '.$e->getMessage;
    }
