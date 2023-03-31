<?php 
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: *');

session_start();
$expire = time() - ( 3600);
setcookie(session_name(),session_id(),$expire,'/');
$_SESSION=[];
session_destroy();

try{
  $response = ["status"=>200,"message"=>"Success!"];
  echo json_encode($_SESSION['connected']);
}catch(\Exception $e){
    echo 'Error: '.$e->getMessage();
}
?>  