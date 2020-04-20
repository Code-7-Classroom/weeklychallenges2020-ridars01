



function input(string){
    for(i = 0 ; i < string.length ; i++){
        let letter = string.charAt(i) ; 
        if(string.indexOf(letter) == string.lastIndexOf(letter)){
            return letter ; 
        }
    }
    
}
console.log(input("what a wonderful day it has been!")) ;