<?php
   header('Access-Control-Allow-Origin: http://localhost:3000');
   header('Access-Control-Allow-Headers: Content-Type');
   header('Access-Control-Allow-Credentials: true');
   header('Access-Control-Allow-Methods: *');

try{
    
    echo json_encode(true);
}catch(Exception $e){
    echo 'Error: ' . $e->getMessage();
}
