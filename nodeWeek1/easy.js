const fs = require('fs') ; 
const path = require('path') ; 

let directory = process.argv[2] ; 
let ext = '.' + process.argv[3] ; 

fs.readdir(directory , function  (err , files) {
    if (err){
        return console.error(err) ; 
    }
    files.forEach((file) =>{
        if (path.extname(file) === ext){
            console.log(file)
        }
    })
}) ; 
    






