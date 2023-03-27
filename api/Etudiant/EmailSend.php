<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
require('../ConnectToDb.php');

 $connect = new ConnectToDb();
 $pdo = $connect->connect();
try {
    // Récupération de la note de l'examen pour l'étudiant donné
$num_etudiant = $_GET['num'];
; // num de l'étudiant dont on veut récupérer la note
$query = "SELECT note FROM examen WHERE num_etudiant = :num_etudiant";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':num_etudiant', $num_etudiant);
$stmt->execute();

$resultat = $stmt->fetch(PDO::FETCH_ASSOC);
if (!$resultat) {
    die("La requête a échoué.");
}

$note = $resultat['note'];

// Récupération de l'adresse e-mail de l'étudiant
$query = "SELECT adr_email FROM etudiants WHERE num = :num_etudiant";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':num_etudiant', $num_etudiant);
$stmt->execute();

$resultat = $stmt->fetch(PDO::FETCH_ASSOC);
if (!$resultat) {
    die("La requête a échoué.");
}

$adr_email = $resultat['adr_email'];

// Envoi de l'e-mail contenant la note de l'examen
$sujet = "Résultat de l'examen";
$message = "Votre note est : $note";
$headers = "From: loharanontsoasnael@gmail.com";

if (mail($adr_email, $sujet, $message, $headers)) {
    echo "L'e-mail a éte envoye avec succes.";
}else{
    echo"ERREUR";
}
} catch (PDOException $e) {
    die("La connexion a échoué : " . $e->getMessage());
}


