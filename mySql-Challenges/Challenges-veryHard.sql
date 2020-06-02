DROP DATABASE IF EXISTS veryHard ;
CREATE DATABASE veryHard; 
USE veryHard ;

CREATE TABLE cars (
id INT AUTO_INCREMENT PRIMARY KEY , 
make VARCHAR(225),
model VARCHAR(225), 
year VARCHAR(4)
); 

INSERT INTO cars  (id , make ,model , year)
VALUES
( 1 , "Toyota" , "Camry" , 2015), 
( 2 , "Mercedes" , "Benz" , 2016), 
( 3 , "Lexus" , "GX" , 2017); 
INSERT INTO cars  (id , make ,model , year)
VALUES
( 4, "Toyota" , "Sienna" , 2018), 
( 5 , "Volks Wagon" , "e-golf" , 2019), 
( 6 , "Honda" , "Pilot" , 2020);

ALTER TABLE cars 
ADD COLUMN color VARCHAR(225),
ADD COLUMN price VARCHAR(225);


UPDATE cars
SET price = "$40,000",color = "blue" WHERE id= 1;
UPDATE cars
SET price = "$50,000",color = "gray" WHERE id= 2;
UPDATE cars
SET price = "60,000",color = "black" WHERE id= 3;
UPDATE cars
SET price = "$70,000",color = "silver" WHERE id= 4;
UPDATE cars
SET price = "$80,000",color = "red" WHERE id= 5;
UPDATE cars
SET price = "$90,000",color = "orange" WHERE id= 6;

SELECT 
CONCAT (make , " " , model) AS Make_Model
FROM cars;

ALTER TABLE cars 
ADD COLUMN same_Make_and_Model VARCHAR(225) ; 

SELECT 
make,COUNT(make)  
FROM cars 
GROUP BY make
HAVING (COUNT(make) > 1) ;

SELECT * FROM cars ;