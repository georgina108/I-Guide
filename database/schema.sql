DROP DATABASE IF EXISTS meditationApp;

CREATE DATABASE meditationApp;

USE videos;

CREATE TABLE videos(
  id int AUTO_INCREMENT,
  music varchar(50) NOT NULL,
  audio varchar(50) NOT NULL,
  image varchar(50) NOT NULL, 
);
