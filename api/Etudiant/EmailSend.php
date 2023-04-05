<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer-master/src/Exception.php';
require '../PHPMailer-master/src/PHPMailer.php';
require '../PHPMailer-master/src/SMTP.php';
require('../ConnectToDb.php');

 $connect = new ConnectToDb();
 $pdo = $connect->connect();
try {
    $req="SELECT adr_email FROM etudiant WHERE num_etudiant";
    $stmt = $pdo->prepare($req);
    $stmt->execute();
 
    $mail = new PHPMailer(true);
$mail->SMTPDebug = 2;
$mail->IsSMTP();
$mail->Host = 'auth.smtp.1and1.fr';            
$mail->Port = 465;                          
$mail->SMTPAuth = 1;                        

if($mail->SMTPAuth){
   $mail->SMTPSecure = 'ssl';               
   $mail->Username   =  'loharanontsoasnael@gmail.com';  
   $mail->Password   =  'eoaMODSODGODGOD05';         
}
$mail->CharSet = 'UTF-8'; 
$mail->smtpConnect();
$mail->From       =  'loharanontsoasnael@gmail.com';               
$mail->FromName   = 'loharanontsoasnael@gmail.com';             


$note=10;
$mail->AddAddress('sinaandraina@gmail.com','SINA');
$mail->Subject    =  'Mon sujet';                     
$mail->WordWrap   = 50; 			                   
$mail->AltBody = "Votre note est : $note"; 	       
$mail->IsHTML(false);                                  

if($Use_HTML == true){
    $mail->MsgHTML('<div>Votre note QCM <code>HTML</code></div>'); 		                
    $mail->IsHTML(true);
 }

if (!$mail->send()) {
    echo $mail->ErrorInfo;
} else{
    echo 'Message bien envoyé';
}

} catch (Exception $e) {
    die("La connexion a échoué : " . $e->getMessage());
}


