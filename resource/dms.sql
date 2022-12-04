/*
SQLyog Community v13.1.8 (64 bit)
MySQL - 10.4.21-MariaDB : Database - dms
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/'dms' /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE 'dms'

/*Table structure for table `documents` */

DROP TABLE IF EXISTS 'documents';

USE `dms`;

CREATE TABLE `documents` (  
  `document_ID` INT(20) NOT NULL AUTO_INCREMENT,
  `document_TITLE` VARCHAR(255),
  `document_TYPE` VARCHAR(255),
  `document_ORIGIN` VARCHAR(255),
  `date_received` DATETIME,
  `document_DESTINATION` VARCHAR(255),
  `tags` VARCHAR(255),
  `document_FILE` VARCHAR(255),
  PRIMARY KEY (`document_ID`) 
);

/*Data for the table `documents` */

/*Table structure for table `user_account` */

DROP TABLE IF EXISTS 'user_account';

USE 'dms'

CREATE TABLE 'user_account' (
  'id' INT(10) NOT NULL AUTO_INCREMENT,
  'uname' VARCHAR(50) NOT NULL,
  'username' VARCHAR(50) NOT NULL,
  'passkey' VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

/*Data for the table `user_account` */

insert  into `user_account`(`id`,`name`,`email`,`password`) values 
(11,'Jomar Pumares','jomar.pumares_2@student.dmmmsu.edu.ph','aaaa');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
