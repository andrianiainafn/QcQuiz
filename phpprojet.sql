-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 30, 2023 at 12:59 PM
-- Server version: 8.0.21
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phpprojet`
--

-- --------------------------------------------------------

--
-- Table structure for table `etudiant`
--

DROP TABLE IF EXISTS `etudiant`;
CREATE TABLE IF NOT EXISTS `etudiant` (
  `num_etudiant` varchar(10) NOT NULL,
  `nom` varchar(200) NOT NULL,
  `prenom` varchar(200) NOT NULL,
  `niveau` varchar(5) NOT NULL,
  `adr_email` varchar(250) NOT NULL,
  PRIMARY KEY (`num_etudiant`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `etudiant`
--

INSERT INTO `etudiant` (`num_etudiant`, `nom`, `prenom`, `niveau`, `adr_email`) VALUES
('123123', 'andrianiaina', 'nomena', 'L2', 'andrianiaina@gmail.com'),
('1422H-F', 'Sina', 'Loharanontsoa', 'L2', 'Sina@gmail.com'),
('1433H-F', 'Adler', 'Rado Adler', 'L2', 'adler@gmail.com'),
('1435H-F', 'fanomezantsoa', 'nomena', 'L2', 'nomena@gmail.com'),
('14443H-F', 'Andrianiaina', 'nomena', 'L3', 'fanomezantsoa@gmail.com'),
('14443H-FF', 'Andrianiaina', 'nomenanomena', 'M1', 'andrianiaina@gmail.com'),
('145814', 'fdjfjaasdf', 'dfjjsdajfjak', '14yry', 'jhfkjkdshjfhaj@gmail.com'),
('145814rere', 'fdjfjaasdf', 'dfjjsdajfjak', '14yry', 'jhfkjkdshjfhaj@gmail.com'),
('15315471', 'Nomena', 'Fanomezantsoa', 'L3', 'nomenafanomezantsoandrianiaina@gmail.com'),
('43434', 'fdjfjaasdf', 'dfjjsdajfjak', '14yry', 'jhfkjkdshjfhaj@gmail.com'),
('444e2', 'fdjfjaasdf', 'dfjjsdajfjak', '14yry', 'jhfkjkdshjfhaj@gmail.com'),
('554554', 'fdjfjaasdf', 'dfjjsdajfjak', '14yry', 'jhfkjkdshjfhaj@gmail.com'),
('555', 'fdjfjaasdf', 'dfjjsdajfjak', '14yry', 'jhfkjkdshjfhaj@gmail.com'),
('jdsfjagm99', 'fdjfjaasdf', 'dfjjsdajfjak', '14yry', 'jhfkjkdshjfhaj@gmail.com'),
('test6', 'fdjfjaasdf', 'dfjjsdajfjak', '14yry', 'jhfkjkdshjfhaj@gmail.com'),
('test7', 'fdjfjaasdf', 'dfjjsdajfjak', '14yry', 'jhfkjkdshjfhaj@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `examen`
--

DROP TABLE IF EXISTS `examen`;
CREATE TABLE IF NOT EXISTS `examen` (
  `num_exam` varchar(10) NOT NULL,
  `num_etudiant` varchar(10) NOT NULL,
  `annee_univ` varchar(30) NOT NULL,
  `note` int NOT NULL,
  PRIMARY KEY (`num_exam`,`num_etudiant`,`annee_univ`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `programme`
--

DROP TABLE IF EXISTS `programme`;
CREATE TABLE IF NOT EXISTS `programme` (
  `annee_univ` varchar(30) NOT NULL,
  PRIMARY KEY (`annee_univ`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `qcm`
--

DROP TABLE IF EXISTS `qcm`;
CREATE TABLE IF NOT EXISTS `qcm` (
  `num_quest` int NOT NULL AUTO_INCREMENT,
  `reponse1` text NOT NULL,
  `reponse2` text NOT NULL,
  `reponse3` text NOT NULL,
  `reponse4` text NOT NULL,
  `question` text NOT NULL,
  `reponse_vrai` varchar(250) NOT NULL,
  `niveau` varchar(10) NOT NULL,
  PRIMARY KEY (`num_quest`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `qcm`
--

INSERT INTO `qcm` (`num_quest`, `reponse1`, `reponse2`, `reponse3`, `reponse4`, `question`, `reponse_vrai`, `niveau`) VALUES
(1, 'Hypertext Preprocessor', 'Javascript', 'Java', 'Flutter', 'Que signifie PHP', 'reponse1', 'L1'),
(6, 'VueJS', 'Laravel', 'Flutter', 'AngularJs', 'Choisir un framework PHP ', 'reponse2', 'L2'),
(8, 'Nodejs', 'Go', 'Symfony', 'Rubis', 'API platform est propre a:', 'reponse3', 'L3'),
(9, '$_GET[\'name\']', '$_SERVEUR[\'REQUEST_URI\']', '$_POST[\'name\']', 'file_get_contents(\'php://input\')', 'Pour recuperer une valeur envoyer en methode post par un formulaire :', 'reponse3', 'L2'),
(10, 'Reactjs', 'Angularjs', 'Vuejs', 'Adonisjs', 'Qui parmis les suivants est un librairie ?', 'reponse1', 'L2'),
(11, 'Facebook', 'Microsoft', 'Amazon', 'Google', 'Angularjs est un framwork developper par:', 'reponse4', 'L2'),
(15, 'Amazon', 'OpenAI', 'Facebook', 'Tesla', 'Chagpt est un IA developper par qelle entreprise?', 'reponse2', 'L2'),
(16, 'flutter', 'java', 'swift', 'kotlin', 'Parmi les suivants quelle technologie permet de developper en meme temps un app android et ios', 'reponse1', 'L2'),
(17, 'echo \'hello word\'', 'print \'hello word\'', 'console.log(\'hello word\')', 'document.write(\'hello word\')', 'Pour mettre affiche \'hello word\' en python en fait comment?', 'reponse2', 'L2'),
(18, 'Dart', 'C', 'C++', 'python', 'Donner  un example de langage qui permet de developper un app mobile', 'reponse1', 'L2'),
(19, 'React Native', 'Kivy', 'Tensorflow', 'pyQt', 'Selon vous lesquelle des technologies suivant permet de faire un entraiment d\' IA ', 'reponse3', 'L2'),
(22, 'Angularjs', 'Vuejs', 'Nestjs', 'Reactjs', 'Material ui est propre a:', 'reponse4', 'L2');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
