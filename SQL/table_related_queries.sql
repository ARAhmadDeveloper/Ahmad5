CREATE DATABASE queries;

USE queries;

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



ALTER TABLE student ADD COLUMN age INT;

UPDATE student SET age = 20 WHERE id = 1;
UPDATE student SET age = 22 WHERE id = 2;
UPDATE student SET age = 19 WHERE id = 3;
UPDATE student SET age = 21 WHERE id = 4;
UPDATE student SET age = 23 WHERE id = 5;


ALTER TABLE student CHANGE COLUMN id st_id INT;

ALTER TABLE student DROP COLUMN age;

ALTER TABLE students RENAME TO student;

SELECT * FROM student;



















