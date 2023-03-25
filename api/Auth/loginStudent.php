<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: *');
require('../ConnectToDb.php');

$connect = new ConnectToDb();
$pdo = $connect->connect();

try{

}catch(Exception $e){
    echo "Error" . $e->getMessage();
}