<?php 
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: *');
session_start();
$_SESSION['connected']='';
unset($_SESSION['connected']);

try{
  if(!$_SESSION['connected']){
     $response = [ "status" => 200 , "message" => "Logout succesfully" ];
  }else{
    $response = [ "status" => 401 , "message" => "Logout Error" ];
  }
  echo json_encode($response);
}catch(\Exception $e){
    echo 'Error: '.$e->getMessage();
}
?>  