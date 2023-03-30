<?php
   session_start();
   header('Access-Control-Allow-Origin: http://localhost:3000');
   header('Access-Control-Allow-Headers: Content-Type');
   header('Access-Control-Allow-Credentials: true');
   header('Access-Control-Allow-Methods: *');
try{
    // var_dump($_SESSION);
    // die();
    echo json_encode($_SESSION['connected']);
}catch(Exception $e){
    echo 'Error: ' . $e->getMessage();
}
