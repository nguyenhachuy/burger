DROP database if exists burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
	id int not null auto_increment,
	primary key(id),
	burger_name VARCHAR(50),
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP
);