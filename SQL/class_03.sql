CREATE DATABASE college;

USE college;

CREATE TABLE department (
id INT PRIMARY KEY,
name VARCHAR(50)
);

INSERT INTO department (id, name) VALUES
(1, 'Computer Science'),
(2, 'Mathematics'),
(3, 'Physics'),
(4, 'English Literature'),
(5, 'History');

DELETE FROM department WHERE id = 5;

UPDATE department SET id = 1 WHERE id = 9;

SELECT * FROM department;

CREATE TABLE teachers(
id INT,
name VARCHAR(50),
dep_id INT, 
FOREIGN KEY (dep_id) REFERENCES department(id)
ON UPDATE CASCADE
ON DELETE CASCADE
);

INSERT INTO teachers (id, name, dep_id) VALUES
(101, 'Alice Johnson', 1),
(102, 'Bob Smith', 2),
(103, 'Charlie Kim', 3),
(104, 'Diana Patel', 4),
(105, 'Ethan Brown', 5);

SELECT * FROM teachers;

