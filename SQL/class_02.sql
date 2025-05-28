CREATE DATABASE school;

USE school;


CREATE TABLE student (
id INT PRIMARY KEY,
name VARCHAR(50),
marks INT,
city VARCHAR(20)
);

INSERT INTO student (id, name, marks, city) VALUES
(1, 'Alice Johnson', 85, 'New York'),
(2, 'Bob Smith', 32, 'Los Angeles'),
(3, 'Charlie Kim', 91, 'Chicago'),
(4, 'Diana Patel', 58, 'Houston'),
(5, 'Ethan Brown', 78, 'Phoenix'),
(6, 'Fatima Ahmed', 32, 'Los Angeles'),      -- duplicate marks & city
(7, 'Bob Smith', 59, 'Dallas'),              -- duplicate name
(8, 'Hannah White', 95, 'Chicago'),          -- duplicate city
(9, 'Alice Johnson', 85, 'Seattle'),         -- duplicate name & marks
(10, 'Julia Adams', 58, 'Houston');          -- duplicate marks & city

SET SQL_SAFE_UPDATES = 0;

DELETE FROM student;  -- it can delete all table data

DELETE FROM student where marks = 58;

UPDATE student SET city = 'FAISALABAD' WHERE city = 'NEW York';

UPDATE student SET name = 'AR Ahmad' WHERE name = 'Alice Johnson';

SELECT * FROM student;

SELECT city FROM student GROUP BY city;

SELECT COUNT(marks) FROM student;

SELECT AVG(marks) FROM student;

SELECT SUM(marks) FROM student;

SELECT min(marks) FROM student;

SELECT max(marks) FROM student;


SELECT * FROM student ORDER BY id DESC;


SELECT * FROM student WHERE city IN ('Seattle', 'Boston') LIMIT 3;

SELECT * FROM student WHERE city NOT IN ('Seattle', 'Boston');



SELECT * FROM student WHERE city IN ('Seattle', 'Boston');

SELECT * FROM student WHERE marks BETWEEN 80 AND 90;


-- SELECT * FROM student WHERE marks <= 75 AND id > 5;
