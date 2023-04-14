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
$note = 10;


try {
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
    $mail->addAddress('sinaandraina@gmail.com', 'chers Etudiants');     
    $mail->addAddress('sinaandraina@gmail.com');               
    $mail->addReplyTo('sinaandraina@gmail.com', 'Information');
    $mail->addCC('sinaandraina@gmail.com');
    $mail->addBCC('sinaandraina@gmail.com');


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