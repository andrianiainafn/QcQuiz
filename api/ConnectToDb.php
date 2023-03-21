<?php

class ConnectToDb{
    private $dns = 'mysql:dbname=phpprojet;host:localhost';
    private $user = 'root';
    public function connect(){
        try{
            $connected = new PDO($this->dns,$this->user,null,[
                PDO::ATTR_ERRMODE=> PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ
            ]) ;
            return $connected;
        }catch(\Exception $e){
              echo "Connection Error: " . $e->getMessage();  
        }
    }

}