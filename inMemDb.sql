DROP DATABASE IF EXISTS inmemdb;
CREATE DATABASE inmemdb;
\c inmemdb;
-- creating a table for users
CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
age INTEGER NOT NULL,
gender VARCHAR(1) NOT NULL,
job_type VARCHAR(10) NOT NULL
);
-- inserting users into the table
INSERT INTO users (name, age, gender, job_type)
VALUES
('Alice', 12, 'f', 'Student'),
('Bob', 21, 'm', 'DevLeague'),
('Claire', 56, 'f', 'DevLeague'),
('David', 9, 'm', 'N/A'),
('Eric', 61, 'm', 'DevLeague'),
('Fred', 45, 'm', 'DevLeague'),
('George', 38, 'm', 'DevLeague'),
('Hannah', 15, 'f', 'N/A'),
('Ilona', 17, 'f', 'Student'),
('Jake', 27, 'm', 'DevLeague'),
('Kathy', 8, 'f', 'N/A'),
('Liam', 20, 'm', 'Student');
-- getting users by id
SELECT *
FROM users
WHERE id = '9';
-- getting the youngest user
SELECT *
FROM users
WHERE age = (SELECT MIN(age) FROM users);
-- getting the oldest user
SELECT *
FROM users
WHERE age = (SELECT MAX(age) FROM users);
-- getting all male users
SELECT *
FROM users
WHERE gender = 'm';
-- getting all female users
SELECT *
FROM users
WHERE gender = 'f';
-- getting users by employer
SELECT *
FROM users
WHERE job_type = 'Student';
SELECT *
FROM users
WHERE job_type = 'DevLeague';
SELECT *
FROM users
WHERE job_type = 'N/A';
-- getting users who can drink
SELECT *
FROM users
WHERE age > 20;
-- grouping users by employer
SELECT *
FROM users
ORDER BY job_type;