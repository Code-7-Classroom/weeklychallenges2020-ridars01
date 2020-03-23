var num1 = Number (prompt ("Enter a number :")) ; 
var oper = prompt("Please enter an operator ex. + - * /") ; 
var num2 = Number(prompt("Enter another number ")) ; 
var ans ; 

function add ( ) {
    ans = (num1 + num2 ); 
}

function subtract ( ) {
    ans = ( num1 - num2 ) ;
}

function multiply ( ) {
    ans = ( num1 * num2 ); 
}

function divide ( ) {
    ans = ( num1 / num2 ); 
}
 
if(oper === '+'){
    add() ;
    document.write(num1 + '+' + num2 +'='+ ans ) ; 
}
else if (oper === '-' ){
    subtract() ; 
    document.write(num1 + '-' +num2 +'='+ ans ) ; 
}
else if (oper === '*'){
    multiply(); 
    document.write(num1 + '*'+ num2 +'='+ ans ) ; 
}
else if (oper === '/'){
    divide () ; 
    document.write(num1 + '/' + num2 +'='+ ans ) ; 
}
else{
document.write("Invalid Response")
}