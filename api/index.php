<?php
   header('Access-Control-Allow-Origin: http://localhost:3000');
   header('Access-Control-Allow-Headers: Content-Type');
   header('Access-Control-Allow-Credentials: true');
   echo "Route";
   
   $dns = 'mysql:dbname=blog;host:localhost';
   $user='root';
   $db = new PDO($dns, $user,null,[
     PDO::ATTR_ERRMODE=> PDO::ERRMODE_EXCEPTION,
     PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
   ]); 
   $test = json_decode(file_get_contents('php://input'));
   try{
      if($test){
         $query= $db->prepare("INSERT INTO posts (name,content,created_at) VALUES (:name,:content,:created)");
         $query->execute([
            "name"=> "test", 
            "content"=> "test",
            "created" => time()
         ]);
         $response = ['status' => 200 ,'message'=> 'Success' ];
         echo json_encode($response);
      }
   }catch(PDOException $e){
      echo 'Error: ' . $e->getMessage();
   }
   
?>