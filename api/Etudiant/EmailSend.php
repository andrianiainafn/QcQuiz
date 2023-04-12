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
//Load Composer's autoloader


//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

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
    $mail->addAddress('sinaandraina@gmail.com', 'Joe User');     //Add a recipient
    $mail->addAddress('sinaandraina@gmail.com');               //Name is optional
    $mail->addReplyTo('sinaandraina@gmail.com', 'Information');
    $mail->addCC('sinaandraina@gmail.com');
    $mail->addBCC('sinaandraina@gmail.com');


    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'Votre note en examen QCM</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}