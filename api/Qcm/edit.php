<?php
   header('Access-Control-Allow-Origin: http://localhost:3000');
   header('Access-Control-Allow-Headers: Content-Type');
   header('Access-Control-Allow-Credentials: true');
   header('Access-Control-Allow-Methods: *');
   require('../ConnectToDb.php');

   $connect = new ConnectToDb();
   $pdo = $connect->connect();
   try{
        $user_info = json_decode(file_get_contents('php://input'));
        if($user_info){
                $query = "UPDATE qcm SET  question =:question, reponse1 =:reponse1, niveau =:niveau, reponse2 =:reponse2, reponse3=:reponse3, reponse4=:reponse4,reponse_vrai=:reponse_vrai WHERE num_quest = :num_quest ";
                $stmt = $pdo->prepare($query);
                $stmt->bindParam(':num_quest',$user_info->num_quest,PDO::PARAM_INT);
                $stmt->bindParam(':question',$user_info->question);
                $stmt->bindParam(':niveau',$user_info->niveau);
                $stmt->bindParam(':reponse1',$user_info->reponse1);
                $stmt->bindParam(':reponse2',$user_info->reponse2);
                $stmt->bindParam(':reponse3',$user_info->reponse3); 
                $stmt->bindParam(':reponse4',$user_info->reponse4);
                $stmt->bindParam(':reponse_vrai',$user_info->reponse_vrai);
                if($stmt->execute()){
                    $response=["status"=> 200,"message"=> "User created successfully"];
                }else{
                    $response=["status"=> 401,"message"=> "Error when creating user"];
                }
            }
            echo json_encode($response);
   }catch(Exception $e){
    echo 'Error: '.$e->getMessage();
   }