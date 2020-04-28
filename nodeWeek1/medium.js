const fs = require('fs') ; 
fs.readFile('file.txt' , 'utf8' , function (err , data){
if(err) throw error ; 
console.log(data) ; 

}) ; 