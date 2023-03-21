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
        if(isset($path[3]) &&  is_numeric($path[3])){
            $query = "SELECT * FROM etudiant WHERE etudiant_id = :etudiant_id";
            $stmt = $pdo->prepare($query);
            $stmt->bindParam(':etudiant_id',$path[3]);
            $stmt->execute();
            $user = $stmt->fetch(PDO::FETCH_OBJ);
        }
        $user_info = json_decode(file_get_contents('php://input'));
        if($user_info){
            $existing_user ="SELECT * FROM etudiant WHERE num_etudiant = :num_etudiant";
            $stmt = $pdo->prepare($existing_user);
            $stmt->bindParam(':num_etudiant',$user_info->num_etudiant);
            if(false){
                $response=["status"=>400,"message"=>"This matricule are already authenticated"];
            }  else{
                $query = "UPDATE etudiant SET  nom =:nom,prenom =:prenom,niveau =:niveau,adr_email =:adr_email WHERE num_etudiant = :num_etudiant ";
                $stmt = $pdo->prepare($query);
                $stmt->bindParam(':num_etudiant',$user_info->num_etudiant);
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
        }

        
   }catch(Exception $e){
    echo 'Error: '.$e->getMessage();
   }