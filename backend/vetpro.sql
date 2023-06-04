CREATE DATABASE  IF NOT EXISTS `vet` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `vet`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: vet
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
-- Table structure for table `actualiza`
--

DROP TABLE IF EXISTS `actualiza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actualiza` (
  `idfichamedica_actualiza` int NOT NULL,
  `idprofesional_actualiza` int NOT NULL,
  PRIMARY KEY (`idfichamedica_actualiza`,`idprofesional_actualiza`),
  KEY `idprofesional_actualiza_idx` (`idprofesional_actualiza`),
  CONSTRAINT `idfichaprofesional_actualiza` FOREIGN KEY (`idfichamedica_actualiza`) REFERENCES `ficha_medica` (`idficha_medica`),
  CONSTRAINT `idprofesional_actualiza` FOREIGN KEY (`idprofesional_actualiza`) REFERENCES `profesional` (`idprofesional`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actualiza`
--

LOCK TABLES `actualiza` WRITE;
/*!40000 ALTER TABLE `actualiza` DISABLE KEYS */;
INSERT INTO `actualiza` VALUES (1,2),(5,2),(6,2),(2,4),(3,4),(4,4);
/*!40000 ALTER TABLE `actualiza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consulta`
--

DROP TABLE IF EXISTS `consulta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consulta` (
  `idconsulta` int NOT NULL AUTO_INCREMENT,
  `fecha_consulta` date NOT NULL,
  `hora_consulta` tinytext NOT NULL,
  `idcliente` int NOT NULL,
  PRIMARY KEY (`idconsulta`),
  KEY `idusuario_idx` (`idcliente`),
  CONSTRAINT `idusuario` FOREIGN KEY (`idcliente`) REFERENCES `usuario` (`idusuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consulta`
--

LOCK TABLES `consulta` WRITE;
/*!40000 ALTER TABLE `consulta` DISABLE KEYS */;
INSERT INTO `consulta` VALUES (1,'2023-05-12','10:15',5),(2,'2023-05-20','9:00',2),(3,'2023-05-04','10:00',3),(4,'2023-05-23','9:15',1),(5,'2023-05-17','10:30',4),(6,'2023-05-18','11:00',5);
/*!40000 ALTER TABLE `consulta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `examen`
--

DROP TABLE IF EXISTS `examen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examen` (
  `idexamen` int NOT NULL,
  `observaciones` text NOT NULL,
  `conclusion` text NOT NULL,
  `fecha_emision` tinytext NOT NULL,
  PRIMARY KEY (`idexamen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examen`
--

LOCK TABLES `examen` WRITE;
/*!40000 ALTER TABLE `examen` DISABLE KEYS */;
INSERT INTO `examen` VALUES (1,'Ecografía de intestino - indica inflamación y cuerpo extraño en colon medio de diametro aprox 3 mm','Se concluye que se debe extirpar el objeto sospechoso mediante una cirugía menor','2023-05-20'),(2,'Radiografía sector trasero + radiografía toráx indica fisura en costillas y cadera','Paciente debe guardar reposo, se debe dejar con vendaje inmoviizador y tener revisión en 2 semanas además se debe agregar medicamentos para control de dolor','2023-05-03'),(3,'Análisis de química sanguínea para evaluar función hepática','Se concluye que el hígado está en perfecto estado','2023-05-04');
/*!40000 ALTER TABLE `examen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ficha_medica`
--

DROP TABLE IF EXISTS `ficha_medica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ficha_medica` (
  `idficha_medica` int NOT NULL,
  `observaciones` text NOT NULL,
  `idmascota` int NOT NULL,
  `idexamen_adjuntado` int DEFAULT NULL,
  `idreceta_agregada` int NOT NULL,
  PRIMARY KEY (`idficha_medica`),
  KEY `idmascota_idx` (`idmascota`),
  KEY `idexamen_adjuntado_idx` (`idexamen_adjuntado`),
  KEY `idreceta_agregada_idx` (`idreceta_agregada`),
  CONSTRAINT `idexamen_adjuntado` FOREIGN KEY (`idexamen_adjuntado`) REFERENCES `examen` (`idexamen`),
  CONSTRAINT `idreceta_agregada` FOREIGN KEY (`idreceta_agregada`) REFERENCES `receta` (`idreceta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ficha_medica`
--

LOCK TABLES `ficha_medica` WRITE;
/*!40000 ALTER TABLE `ficha_medica` DISABLE KEYS */;
INSERT INTO `ficha_medica` VALUES (1,'Peso: 3kg fiebre: no presenta presenta dolor estomacal diarrea y vomito',1,1,1),(2,'Peso: 2kg fiebre: 38° presenta parasitos y vomitos',2,NULL,4),(3,'Peso: 5kg fiebre: no presenta presenta vómitos y diarrea',3,3,6),(4,'Peso: 1,8kg fiebre: 39° presenta dolor muscular y oseo por caida',4,2,2),(5,'Peso: 2,5kg fiebre: 39° presenta dolor estomacal diarrea + estornudos y mucosidad',5,NULL,3),(6,'Peso: 5,2kg fiebre: no presenta presenta inflamación estomacal fecas con parasitos y dolor estomacal poco consumo de comida y agua',6,NULL,5);
/*!40000 ALTER TABLE `ficha_medica` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genera`
--

DROP TABLE IF EXISTS `genera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genera` (
  `idprofesional_genera` int NOT NULL,
  `idreceta_genera` int NOT NULL,
  PRIMARY KEY (`idprofesional_genera`,`idreceta_genera`),
  KEY `idreceta_genera_idx` (`idreceta_genera`),
  CONSTRAINT `idprofesional_genera` FOREIGN KEY (`idprofesional_genera`) REFERENCES `profesional` (`idprofesional`),
  CONSTRAINT `idreceta_genera` FOREIGN KEY (`idreceta_genera`) REFERENCES `receta` (`idreceta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genera`
--

LOCK TABLES `genera` WRITE;
/*!40000 ALTER TABLE `genera` DISABLE KEYS */;
INSERT INTO `genera` VALUES (2,1),(4,2),(2,3),(4,4),(2,5),(4,6);
/*!40000 ALTER TABLE `genera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mascota`
--

DROP TABLE IF EXISTS `mascota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mascota` (
  `idmascota` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `especie` varchar(45) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `raza` varchar(45) NOT NULL,
  `edad` int DEFAULT NULL,
  `id_ficha` int NOT NULL,
  `id_usuario` int NOT NULL,
  PRIMARY KEY (`idmascota`),
  KEY `idficha_medica_idx` (`id_ficha`),
  KEY `id_usuario_idx` (`id_usuario`),
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`idusuario`),
  CONSTRAINT `idficha_medica` FOREIGN KEY (`id_ficha`) REFERENCES `ficha_medica` (`idficha_medica`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mascota`
--

LOCK TABLES `mascota` WRITE;
/*!40000 ALTER TABLE `mascota` DISABLE KEYS */;
INSERT INTO `mascota` VALUES (1,'toby','canino','macho','poodle',2,1,5),(2,'lulú','felino','hembra','persa',1,2,1),(3,'rebecca','canino','hembra','maltes',4,3,5),(4,'Tyra','canino','hembra','chihuahua',6,4,2),(5,'pelusa','felino','macho','angora',2,5,3),(6,'Samy','canino','macho','Yorkshire',15,6,4);
/*!40000 ALTER TABLE `mascota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordena`
--

DROP TABLE IF EXISTS `ordena`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordena` (
  `idprofesional_ordena` int NOT NULL,
  `idexamnen_ordena` int NOT NULL,
  PRIMARY KEY (`idprofesional_ordena`,`idexamnen_ordena`),
  KEY `idexamen_ordena_idx` (`idexamnen_ordena`),
  CONSTRAINT `idexamen_ordena` FOREIGN KEY (`idexamnen_ordena`) REFERENCES `examen` (`idexamen`),
  CONSTRAINT `idprofesional_ordena` FOREIGN KEY (`idprofesional_ordena`) REFERENCES `profesional` (`idprofesional`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordena`
--

LOCK TABLES `ordena` WRITE;
/*!40000 ALTER TABLE `ordena` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordena` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profesional`
--

DROP TABLE IF EXISTS `profesional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profesional` (
  `idprofesional` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `especialidad` varchar(45) NOT NULL,
  PRIMARY KEY (`idprofesional`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profesional`
--

LOCK TABLES `profesional` WRITE;
/*!40000 ALTER TABLE `profesional` DISABLE KEYS */;
INSERT INTO `profesional` VALUES (1,'Ernesto Gamboa','Cardiólogo'),(2,'Daniela Vasquez','Medico general'),(3,'Mariana Yavar','Imagenóloga'),(4,'Regina Johns','Medico general'),(5,'Ignacio Pérez','Cirujano');
/*!40000 ALTER TABLE `profesional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receta`
--

DROP TABLE IF EXISTS `receta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receta` (
  `idreceta` int NOT NULL,
  `remedios` text NOT NULL,
  `tiempo_tratamiento` text NOT NULL,
  `fecha_emision` date NOT NULL,
  PRIMARY KEY (`idreceta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receta`
--

LOCK TABLES `receta` WRITE;
/*!40000 ALTER TABLE `receta` DISABLE KEYS */;
INSERT INTO `receta` VALUES (1,'naxpet canino 30ml x 7 días 2 veces al día + gastroenteril suspensión oral 120ml x 3 días cada 8 hrs','7','2023-05-12'),(2,'silimadrag suplemento nutricional120ml x 5 días 2 veces al día ','5','2023-05-20'),(3,'rostrum 20ml x 7 días 1 vez al día','7','2023-05-04'),(4,'antiparasitario mebermic x1 al mes','30','2023-05-23'),(5,'invernic 10ml x 5 días 2 veces al día ','5','2023-05-17'),(6,'fibrinopet 30g 1 comprimido x5 días + papainet 5ml cada 8 hrsx 3 días','5','2023-05-18');
/*!40000 ALTER TABLE `receta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `correo` varchar(25) NOT NULL,
  `contrasena` varchar(45) NOT NULL,
  `telefono` int NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `plan_salud` int NOT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Loreto Poblete','loretopoblete@gmail.com','loretopoblete123',989786756,'los tilos 23','rancagua',0),(2,'José Pérez','joseperez@gmail.com','joseperez123',980706050,'lopez martinez 719','rancagua',1),(3,'Constanza Lopez','constanzalopez@gmail.com','constanzalopez123',934236405,'alameda 79','graneros',1),(4,'Martín Saez','martinsaez@gmail.com','martinsaez123',954678322,'Zamorano 1209','rancagua',1),(5,'Paula Quitral','paulaquitral@gmail.com','paulaquitral123',945730021,'las pircas 1508','machali',0);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'vet'
--

--
-- Dumping routines for database 'vet'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-28 13:43:41
