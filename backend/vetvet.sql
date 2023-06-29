CREATE DATABASE  IF NOT EXISTS `vetproconnect` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `vetproconnect`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: vetproconnect
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `consulta`
--

DROP TABLE IF EXISTS `consulta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consulta` (
  `id` int NOT NULL,
  `fecha` date NOT NULL,
  `hora` varchar(45) NOT NULL,
  `id_mascota` int NOT NULL,
  `id_profesional` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_mascota_idx` (`id_mascota`),
  KEY `fk_profesional_idx` (`id_profesional`),
  CONSTRAINT `fk_mascota` FOREIGN KEY (`id_mascota`) REFERENCES `mascota` (`id`),
  CONSTRAINT `fk_profesional` FOREIGN KEY (`id_profesional`) REFERENCES `profesional` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consulta`
--

LOCK TABLES `consulta` WRITE;
/*!40000 ALTER TABLE `consulta` DISABLE KEYS */;
INSERT INTO `consulta` VALUES (1,'2023-05-12','10:15',5,2),(2,'2023-05-20','9:00',2,2),(3,'2023-05-04','10:00',3,1),(4,'2023-05-23','9:15',1,3),(5,'2023-05-17','10:30',4,4),(6,'2023-05-18','11:00',5,4);
/*!40000 ALTER TABLE `consulta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documentos`
--

DROP TABLE IF EXISTS `documentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documentos` (
  `id` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `ruta` varchar(100) NOT NULL,
  `id_ficha` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ficha_med_idx` (`id_ficha`),
  CONSTRAINT `fk_ficha_med` FOREIGN KEY (`id_ficha`) REFERENCES `ficha_medica` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentos`
--

LOCK TABLES `documentos` WRITE;
/*!40000 ALTER TABLE `documentos` DISABLE KEYS */;
INSERT INTO `documentos` VALUES (1,'Consentimiento','documentos/Consentimiento.txt',1),(2,'receta','documentos/Receta.txt',1);(3,'Vacuna','documentos/Vacuna.txt',1);
/*!40000 ALTER TABLE `documentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `examen`
--

DROP TABLE IF EXISTS `examen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examen` (
  `id` int NOT NULL,
  `observaciones` longtext NOT NULL,
  `fecha_emision` date NOT NULL,
  `conclusiones` longtext NOT NULL,
  `id_ficha_medica` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ficha_medica_idx` (`id_ficha_medica`),
  CONSTRAINT `fk_ficha_medica` FOREIGN KEY (`id_ficha_medica`) REFERENCES `ficha_medica` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examen`
--

LOCK TABLES `examen` WRITE;
/*!40000 ALTER TABLE `examen` DISABLE KEYS */;
INSERT INTO `examen` VALUES (1,'Ecografía de intestino - indica inflamación y cuerpo extraño en colon medio de diametro aprox 3 mm','2023-05-20','Se concluye que se debe extirpar el objeto sospechoso mediante una cirugía menor',6),(2,'Radiografía sector trasero + radiografía toráx indica fisura en costillas y cadera','2023-05-03','Paciente debe guardar reposo, se debe dejar con vendaje inmoviizador y tener revisión en 2 semanas además se debe agregar medicamentos para control de dolor',4),(3,'Análisis de química sanguínea para evaluar función hepática','2023-05-04','Se concluye que el hígado está en perfecto estado',2);
/*!40000 ALTER TABLE `examen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ficha_medica`
--

DROP TABLE IF EXISTS `ficha_medica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ficha_medica` (
  `id` int NOT NULL ,
  `observaciones` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ficha_medica`
--

LOCK TABLES `ficha_medica` WRITE;
/*!40000 ALTER TABLE `ficha_medica` DISABLE KEYS */;
INSERT INTO `ficha_medica` VALUES (1,'Peso: 3kg fiebre: no presenta presenta dolor estomacal diarrea y vomito'),(2,'Peso: 2kg fiebre: 38° presenta parasitos y vomitos'),(3,'Peso: 5kg fiebre: no presenta presenta vómitos y diarrea'),(4,'Peso: 1,8kg fiebre: 39° presenta dolor muscular y oseo por caida'),(5,'Peso: 2,5kg fiebre: 39° presenta dolor estomacal diarrea + estornudos y mucosidad'),(6,'Peso: 5,2kg fiebre: no presenta presenta inflamación estomacal fecas con parasitos y dolor estomacal poco consumo de comida y agua');
/*!40000 ALTER TABLE `ficha_medica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mascota`
--

DROP TABLE IF EXISTS `mascota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mascota` (
  `id` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `especie` varchar(45) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `edad` int NOT NULL,
  `raza` varchar(45) NOT NULL,
  `id_usuario` int NOT NULL,
  `id_ficha` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_usuario_idx` (`id_usuario`),
  KEY `fk_id_ficha_idx` (`id_ficha`),
  CONSTRAINT `fk_id_ficha` FOREIGN KEY (`id_ficha`) REFERENCES `ficha_medica` (`id`),
  CONSTRAINT `fk_id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mascota`
--

LOCK TABLES `mascota` WRITE;
/*!40000 ALTER TABLE `mascota` DISABLE KEYS */;
INSERT INTO `mascota` VALUES (1,'toby','canino','macho',2,'poodle',5,1),(2,'lulú','felino','hembra',1,'persa',1,2),(3,'rebecca','canino','hembra',4,'maltes',5,3),(4,'Tyra','canino','hembra',6,'chihuahua',2,4),(5,'pelusa','felino','macho',2,'angora',3,5),(6,'Samy','canino','macho',15,'Yorkshire',4,6);
/*!40000 ALTER TABLE `mascota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordena`
--

DROP TABLE IF EXISTS `ordena`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordena` (
  `id` int NOT NULL ,
  `id_profesional` int NOT NULL,
  `id_examen` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_prof_idx` (`id_profesional`),
  KEY `fk_id_ex_idx` (`id_examen`),
  CONSTRAINT `fk_id_ex` FOREIGN KEY (`id_examen`) REFERENCES `examen` (`id`),
  CONSTRAINT `fk_id_prof` FOREIGN KEY (`id_profesional`) REFERENCES `profesional` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordena`
--

LOCK TABLES `ordena` WRITE;
/*!40000 ALTER TABLE `ordena` DISABLE KEYS */;
INSERT INTO `ordena` VALUES (1,3,1),(2,3,2),(3,4,3);
/*!40000 ALTER TABLE `ordena` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesional`
--

DROP TABLE IF EXISTS `profesional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesional` (
  `id` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `especialidad` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesional`
--

LOCK TABLES `profesional` WRITE;
/*!40000 ALTER TABLE `profesional` DISABLE KEYS */;
INSERT INTO `profesional` VALUES (1,'Ernesto Gamboa','Cardiólogo'),(2,'Daniela Vasquez','Medico general'),(3,'Mariana Yavar','Imagenóloga'),(4,'Regina Johns','Medico general'),(5,'Ignacio Pérez','Cirujano'),(6,'Ernesto Gamboa','Cardiólogo');
/*!40000 ALTER TABLE `profesional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receta`
--

DROP TABLE IF EXISTS `receta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receta` (
  `id` int NOT NULL ,
  `remedios` text NOT NULL,
  `tiempo_tto` text NOT NULL,
  `fecha_emision` date NOT NULL,
  `id_ficha` int NOT NULL,
  `id_consulta` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ficha_idx` (`id_ficha`),
  KEY `fk_consulta_idx` (`id_consulta`),
  CONSTRAINT `fk_consulta` FOREIGN KEY (`id_consulta`) REFERENCES `consulta` (`id`),
  CONSTRAINT `fk_ficha` FOREIGN KEY (`id_ficha`) REFERENCES `ficha_medica` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receta`
--

LOCK TABLES `receta` WRITE;
/*!40000 ALTER TABLE `receta` DISABLE KEYS */;
INSERT INTO `receta` VALUES (1,'naxpet canino 30ml x 7 días 2 veces al día + gastroenteril suspensión oral 120ml x 3 días cada 8 hrs','7','2023-05-12',1,1),(2,'silimadrag suplemento nutricional120ml x 5 días 2 veces al día ','5','2023-05-20',2,2),(3,'rostrum 20ml x 7 días 1 vez al día','7','2023-05-04',3,3),(4,'antiparasitario mebermic x1 al mes','30','2023-05-23',4,4),(5,'invernic 10ml x 5 días 2 veces al día ','5','2023-05-17',5,5),(6,'fibrinopet 30g 1 comprimido x5 días + papainet 5ml cada 8 hrsx 3 días','5','2023-05-18',6,6);
/*!40000 ALTER TABLE `receta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `contrasena` varchar(45) NOT NULL,
  `telefono` int NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `plan_salud` int NOT NULL,
  `tipo_usuario` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Loreto Poblete','loretopoblete@gmail.com','loretopoblete123',989786756,'los tilos 23','rancagua',0,2),(2,'José Pérez','joseperez@gmail.com','joseperez123',980706050,'lopez martinez 719','rancagua',1,2),(3,'Constanza Lopez','constanzalopez@gmail.com','constanzalopez123',934236405,'alameda 79','graneros',1,2),(4,'Martín Saez','martinsaez@gmail.com','martinsaez123',954678322,'Zamorano 1209','rancagua',1,2),(5,'Paula Quitral','paulaquitral@gmail.com','paulaquitral123',945730021,'las pircas 1508','machali',0,2),(6,'Iván Torres','ivantorre@gmail.com','ivantorres123',90233333,'villa alameda 12','rancagua',0,1),(7,'Pablo Ibarra','pabloibarra@gmail.com','pabloibarra123',940037077,'los cantaros 302','rancagua',0,0);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-23 16:29:47
