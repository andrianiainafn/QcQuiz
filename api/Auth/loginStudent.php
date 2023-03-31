<?php
// session_set_cookie_params(0,'api/','.localhost');
// $expire = time() + (24  * 3600);
// setcookie(session_name(),session_id(),$expire,'/');
session_start();


header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: *');
require('../ConnectToDb.php');

$connect = new ConnectToDb();
$pdo = $connect->connect();

try{
    $login_info = json_decode(file_get_contents('php://input'));
    if(isset($login_info)){
        $query = "SELECT adr_email,num_etudiant,niveau FROM etudiant WHERE num_etudiant=:num_etudiant";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':num_etudiant',$login_info->matricule);
        if($stmt->execute()){
            $information = $stmt->fetchAll();
            if(isset($information)){
                if($information[0]->num_etudiant == $login_info->matricule && $information[0]->adr_email == $login_info->identifiant){
                    $response = ["status"=>200,"message"=>"Login successfully"];
                    $_SESSION['connected'] = [
                         "isconnected" => true,
                         "matricule" => $information[0]->num_etudiant,
                         "niveau" => $information[0]->niveau  
                    ];
                }else{
                    $response = ["status"=>401,"message"=>"Invalid email or matricule"];
                }
            }
        }
        echo json_encode($response);
    }

}catch(Exception $e){
    echo "Error" . $e->getMessage();
}