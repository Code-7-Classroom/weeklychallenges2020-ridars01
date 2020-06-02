DROP DATABASE IF EXISTS medium ;
CREATE DATABASE medium; 
USE medium  ;

CREATE TABLE movies (
title VARCHAR(225) , 
release_year VARCHAR(4) , 
rating VARCHAR(225) 
);

INSERT INTO movies (title , release_year , rating ) 
VALUES
("Harry Potter and the Sorcers Stone" , 2001 , "PG" ),
("Harry Potter and the Chamber of Secrets" , 2002 , "PG" ),
("Harry Potter and the Prisoner of Azkaban" , 2004 , "PG" ),
("Harry Potter and the Goblet of Fire" , 2005 , "PG" ),
("Harry Potter and the Order of the Phoenix" , 2007 , "PG" ),
("Harry Potter and the Half Blood Prince" , 2009 , "PG" ),
("Harry Potter and the Deathly Hollows Part 1" , 2010 , "PG" ),
("Harry Potter and the Deathly Hollows Part 2" , 2011 , "PG" ),
("Avengers: Infinity War " , 2018 ,"PG-13" ) , 
("Avengers: Endgame " , 2019 ,"PG-13" ); 

SELECT title , release_year FROM movies WHERE title LIKE "%s%" ORDER BY release_year ASC ; 
SELECT * FROM movies ;