CREATE DATABASE class_01;

USE class_01;

CREATE TABLE student (
	rollNo INT PRIMARY KEY,
	name VARCHAR(50)
);

INSERT INTO student
(rollNo, name)
VALUES
(3, "AHMAD"),
(4, "RAZA");


INSERT INTO student VALUES(5, "Fifth");
INSERT INTO student VALUES(6, "SIXTH"), (7, "seventh"), (8, "Eight");




SELECT * FROM student;

