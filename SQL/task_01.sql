CREATE DATABASE xyz_company;

USE xyz_company;

CREATE TABLE employe(
	id INT PRIMARY KEY,
	name VARCHAR(50),
	salary INT
);

INSERT INTO employe
(id, name, salary)
VALUES
(1, "adam", 25000),
(2, "bob", 30000),
(3, "casey", 40000);

SELECT * FROM employe;