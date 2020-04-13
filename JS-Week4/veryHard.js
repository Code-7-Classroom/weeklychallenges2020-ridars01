var coins = [1 ,2 ,5 ] ; 
var amount = 11 ; 
var output = 0 ; 

function answer (){
    //debugger ; 
    var counter = 0 ; 
    var reversed = coins.reverse(); 
    for( i = 0 ;  i < reversed.length ; i ++){
        console.log(output += reversed[i]) ;
        counter ++ ; 
        if (output > amount){
            output = output - reversed[i] ;
        counter -- ; 
        }else if (output < amount){
            output += reversed[i] ;
        counter ++ ; 
        }else if (output === amount ) {
            return counter; 
            
        }

    } 
    return -1 ; 
}
console.log(answer()) ; 