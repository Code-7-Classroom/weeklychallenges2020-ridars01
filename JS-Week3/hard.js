// Hard 
function pii (name , ssn){
    var _name = name ; 
    var _ssn = ssn ; 
    return{
        getName(){
            return _name ; 
        }
    }
}
var me = pii ("Rida" , 967) ; 
console.log(me.getName()) ; 
