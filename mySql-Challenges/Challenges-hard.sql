DROP DATABASE IF EXISTS hard ;
CREATE DATABASE hard; 
USE hard ;

CREATE TABLE movies (
title VARCHAR(225) , 
release_year VARCHAR(4) , 
rating VARCHAR(225) ,
director_firstName VARCHAR(225), 
director_lastName VARCHAR(225)
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


UPDATE movies 
SET director_firstName = "Chris", director_lastName = "Columbus" 
WHERE title LIKE "%Harry Potter%" ; 

UPDATE movies 
SET director_firstName = "Joe", director_lastName = "Russo" 
WHERE title LIKE "%Avengers:%" ; 

SELECT 
CONCAT (director_firstName , " " , director_lastName) AS Director_Full_Name
FROM movies;

SELECT title ,director_lastName FROM movies  ORDER BY director_lastName DESC ; 

SELECT director_lastName FROM movies WHERE 
director_lastName REGEXP'^[.*[abcdefghijklmnopq].*$]' AND director_lastName  NOT REGEXP '^[.*[rstuvwxyz].*$]'; 





SELECT * FROM movies ;