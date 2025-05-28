CREATE DATABASE joins_in_sql;

USE joins_in_sql;

CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(50)
);

INSERT INTO students (student_id, name) VALUES
(1, 'Alice Johnson'),
(2, 'Bob Smith'),
(3, 'Charlie Kim'),
(4, 'Diana Patel'),
(5, 'Ethan Brown');

SELECT * FROM students;

CREATE TABLE enrollments (
  enrollment_id INT PRIMARY KEY,
  student_id INT,
  course VARCHAR(50)
);



INSERT INTO enrollments (enrollment_id, student_id, course) VALUES
(101, 1, 'Database Systems'),
(102, 2, 'Web Development'),
(103, 3, 'Operating Systems');

SELECT * FROM enrollments;

SELECT enrollment_id,course FROM enrollments WHERE enrollment_id % 2 = 0;




-- ==============SQL sub Queries=============== --
SELECT course, student_id,enrollment_id
FROM enrollments
WHERE enrollment_id > 
(SELECT AVG(enrollment_id) FROM enrollments);

-- ==============END========================== --




-- =================Self Join================= --
CREATE TABLE employee(
id INT PRIMARY KEY,
name VARCHAR(50),
manager_id INT
);



INSERT INTO employee (id, name, manager_id) VALUES
(101,"Ahmad", 101),
(102, "Raza", 12),
(103, "Malik", 103);



SELECT * FROM employee;
SELECT a.name, b.name
FROM employee as a
JOIN employee as b
ON a.id = b.manager_id;


SELECT * 
FROM employee as a
JOIN employee as b
ON a.id = b.manager_id;



-- =====================END================== --












-- Right exclusive join
-- -------------
SELECT * FROM 
students Right JOIN
 enrollments ON
 enrollments.student_id =
 students.student_id
 WHERE  students.student_id IS NULL;
 
SELECT * FROM 
students Right JOIN
 enrollments ON
 enrollments.student_id =
 students.student_id
 WHERE  students.student_id IS NOT NULL;
-- -------------

-- Left exclusive join
-- -------------
SELECT * FROM 
students LEFT JOIN
 enrollments ON
 enrollments.student_id =
 students.student_id
 WHERE  enrollments.student_id IS NOT NULL;
 
SELECT * FROM 
students LEFT JOIN
 enrollments ON
 enrollments.student_id =
 students.student_id
 WHERE  enrollments.student_id IS NULL;
 
-- -------------

-- For FUll Join we can use this method because full join doen't work in this database
SELECT * FROM 
students LEFT JOIN
 enrollments ON
 enrollments.student_id =
 students.student_id
UNION
SELECT * FROM 
students RIGHT JOIN
 enrollments ON
 enrollments.student_id =
 students.student_id;





SELECT * FROM
 students as s INNER JOIN
 enrollments as en ON
 en.student_id = s.student_id;

SELECT * FROM 
students LEFT JOIN
 enrollments ON
 enrollments.student_id =
 students.student_id;


SELECT * FROM
 students RIGHT JOIN
 enrollments ON
 enrollments.student_id = students.student_id;


SELECT * FROM
 students INNER JOIN
 enrollments ON
 enrollments.student_id = students.student_id;






SELECT * FROM enrollments;






