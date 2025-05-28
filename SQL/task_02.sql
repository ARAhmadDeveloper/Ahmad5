CREATE DATABASE task;

USE task;

CREATE TABLE student(
id INT PRIMARY KEY,
name VARCHAR(50),
grade CHAR,
city VARCHAR(20),
marks INT
);


INSERT INTO student (id, name, grade, city, marks) VALUES
(1, 'Alice Johnson', 'A', 'New York', 92),
(2, 'Bob Smith', 'C', 'Los Angeles', 67),
(3, 'Charlie Kim', 'B', 'Chicago', 78),
(4, 'Diana Patel', 'F', 'Houston', 41),
(5, 'Ethan Brown', 'A', 'Phoenix', 88);


-- Delete column grade
ALTER TABLE student DROP COLUMN grade;



-- Delete all the students whose marks < 80
DELETE FROM student WHERE marks< 80;


-- change the name of column "name" into full_name
ALTER TABLE student CHANGE name full_name VARCHAR(50);

SELECT * FROM student;






 