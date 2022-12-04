/*
SQLyog Community
MySQL - 10.4.27-MariaDB : Database - dms
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`dms` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `dms`;

/*Table structure for table `documents` */

CREATE TABLE `documents` (
  `document_ID` int(11) NOT NULL AUTO_INCREMENT,
  `document_TITLE` varchar(255) NOT NULL,
  `document_TYPE` varchar(255) NOT NULL,
  `document_ORIGIN` varchar(255) NOT NULL,
  `date_received` varchar(255) NOT NULL,
  `document_DESTINATION` varchar(255) NOT NULL,
  `tags` varchar(255) NOT NULL,
  `document_FILEPATH` varchar(255) NOT NULL,
  `document_FILE` varchar(255) NOT NULL,
  `doc_FILEPATH` varchar(255) NOT NULL,
  `qr_name` varchar(255) NOT NULL,
  PRIMARY KEY (`document_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `documents` */

insert  into `documents`(`document_ID`,`document_TITLE`,`document_TYPE`,`document_ORIGIN`,`date_received`,`document_DESTINATION`,`tags`,`document_FILEPATH`,`document_FILE`,`doc_FILEPATH`,`qr_name`) values (4,'FileTest','PDF','hehe','2022-12-01','yieee','yiee','http:/api/uploads/FileTest.pdf','FileTest.pdf','http://localhost/api/resource/phpforfileandqr/qrcode/FileTest.png','FileTest.png');

/*Table structure for table `user_account` */

CREATE TABLE `user_account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `user_account` */

insert  into `user_account`(`id`,`username`,`password`) values (1,'admin','admin');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
