DROP DATABASE IF EXISTS challenges;
CREATE DATABASE challenges; 
USE challenges ;


CREATE TABLE cars (
id INT AUTO_INCREMENT PRIMARY KEY , 
make VARCHAR(225),
model VARCHAR(225), 
year VARCHAR(4)
); 


SHOW TABLES ; 


INSERT INTO cars  (id , make ,model , year)
VALUES
( 1 , "Toyota" , "Camry" , 2015), 
( 2 , "Mercedes" , "Benz" , 2016), 
( 3 , "Lexus" , "GX" , 2017);

INSERT INTO cars(id , make ,model , year)
VALUES
( 4 , "BMW" , "X7" , 2018),
( 5 , "Tesla" , "MOdel S" , 2019);




 SELECT * FROM cars ; 


