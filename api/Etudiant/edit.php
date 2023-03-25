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
                $query = "UPDATE etudiant SET  nom =:nom,prenom =:prenom,niveau =:niveau,adr_email =:adr_email WHERE num_etudiant = :num_etudiant ";
                $stmt = $pdo->prepare($query);
                $stmt->bindParam(':num_etudiant',$user_info->id);
                $stmt->bindParam(':nom',$user_info->nom);
                $stmt->bindParam(':prenom',$user_info->prenom);
                $stmt->bindParam(':niveau',$user_info->niveau);
                $stmt->bindParam(':adr_email',$user_info->adr_email);
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