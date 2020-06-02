DROP DATABASE IF EXISTS easy;
CREATE DATABASE easy; 
USE easy ;

CREATE TABLE books (
id INT AUTO_INCREMENT PRIMARY KEY, 
title VARCHAR(225) , 
publish_year INT(4)  , 
author_firstname VARCHAR(225), 
author_lastname VARCHAR(225)
); 


INSERT INTO books (id , title  , publish_year   , author_firstname , author_lastname ) 
VALUES
(1 , "Hunger Games" , 2008 , "Suzanne" , "Collins") , 
(2 , "Harry Potter and the Goblet of Fire" , 2000 , "J.K" , "Rowling") ,
(3 , "Harry Potter and the prisoner of Azkaban" , 1999 , "J.K" , "Rowling") ;

INSERT INTO books (id , title  , publish_year   , author_firstname , author_lastname ) 
VALUES
(4 , "Harry Potter and the Deathly Hollows " , 2007 ,"J.K" , "Rowling" ) ,
(5 , "Divergent" , 2011 , "Veronica" , "Roth") ;


SELECT COUNT(*) FROM books ; 
DELETE FROM books ORDER BY Publish_year ASC LIMIT 1;
SELECT * FROM books ; 
