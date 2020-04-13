//Medium Challenge
function arrayNormal(numInput , target){
    var numInput = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7] ; 
    var target = 5; 
    if(target == 5 ){
        return numInput.indexOf(target) ; 
    }else{
        return -1 ; 
    }
}
console.log(arrayNormal()) ; 


function arrayPivot(reversed , target){
    var numInput = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7] ; 
     reversed = numInput.reverse() ; 
     target = 5 ; 
     if (target == 5){
         return reversed.indexOf(target) ; 
     }else {
         return -1 ; 
     }
}

console.log(arrayPivot()) ; 