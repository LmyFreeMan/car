/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50642
Source Host           : localhost:3306
Source Database       : car

Target Server Type    : MYSQL
Target Server Version : 50642
File Encoding         : 65001

Date: 2019-03-03 19:32:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(255) NOT NULL AUTO_INCREMENT COMMENT '序号',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '车名',
  `firstprice` float(10,2) NOT NULL COMMENT '首付价格',
  `monthprice` float(10,2) NOT NULL COMMENT '月供价格',
  `allprice` float(10,2) NOT NULL COMMENT '总价格',
  `type` enum('xuefolan','') DEFAULT NULL,
  `carimages` varchar(255) NOT NULL COMMENT '图片信息',
  `number` int(255) NOT NULL COMMENT '销售量',
  `maincontent` text COMMENT '输入描述',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='速享车信息';

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('2', '速享车', '1500.00', '1500.00', '10000.00', '', '/uploads/20190119/54d480d666c3c07210d452e41d283dc4.jpg', '10000', changan, '1547888744');
INSERT INTO `car` VALUES ('3', '速享车', '1500.00', '15000.00', '15000.00', '', '/uploads/20190119/54d480d666c3c07210d452e41d283dc4.jpg', '15000', changan, '1547888790');
INSERT INTO `car` VALUES ('4', '速享车', '1500.00', '1500.00', '15000.00', '', '/uploads/20190119/54d480d666c3c07210d452e41d283dc4.jpg', '15000', changan, '1547888816');
INSERT INTO `car` VALUES ('5', '速享车', '1500.00', '1500.00', '15000.00', '', '/uploads/20190119/54d480d666c3c07210d452e41d283dc4.jpg', '150000', changan, '1547888881');
INSERT INTO `car` VALUES ('6', '速享车', '1500.00', '1500.00', '15000.00', '', '/uploads/20190119/54d480d666c3c07210d452e41d283dc4.jpg', '15000', changan, '1547888912');
INSERT INTO `car` VALUES ('7', '比亚迪秦', '157787.00', '1500.00', '32135.00', '', '/uploads/20190119/54d480d666c3c07210d452e41d283dc4.jpg', '15000', '畅享金服-速享车专注于零首付、微首付、以租代购的汽车新零售方式!为用户提供比传统模式更灵活、更实惠的全新购车体验.', '1547888934');
