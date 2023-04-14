<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: *');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';
require('../ConnectToDb.php');



//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$connect = new ConnectToDb();
$pdo = $connect->connect();

try {
    $student_info = json_decode(file_get_contents('php://input'));
    $note= $student_info->note;
    $query= "SELECT adr_email FROM etudiant WHERE num_etudiant = matricule";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':num_etudiant',$student_info->num_etudiant);
    if($stmt->execute()){
        $result = $stmt->fetchAll();
        $email = $result[0]->adr_email;
    }
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host     = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'fanomezantsoanomenandrianiaina@gmail.com';
    $mail->Password = 'zzlpkncefqzgdilk';
    $mail->SMTPSecure ="ssl";
    $mail->Port     = 465;

    //Recipients
    $mail->setFrom('fanomezantsoanomenandrianiaina@gmail.com', 'QCM Quizz');
    $mail->addAddress($email, 'chers Etudiants');     //Add a recipient
    $mail->addAddress($email);               //Name is optional
    $mail->addReplyTo($email, 'Information');


    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Note examen en QCM';
    $mail->Body    = "Votre note en examen QCM est $note</b>";
    $mail->AltBody = 'cher Etudiants,Votre Note en examen QCM Sur QCM Quizz ';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
} 
