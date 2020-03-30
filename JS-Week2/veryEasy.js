/*var num1 = 8 ; 
var num2 = 10 ; */
function min(num1, num2) {
    if (num1 < num2){
    return (num1)
}
 else if  (num1 > num2){
    return(num2)
}
else{
    return("invalid")
}
}
console.log(min(10, 8)) ; 

//EASY 
var student1 = ["Veronica" , "Barcia" , 18 ] ; 
var student2 = ["Rida" , "Fatimah" , 18 ] ; 
var student3 = ["Unkown" , "Person" , 16 ] ;
//var students = student1.concat(student2 , student3)
var students = student1 + student2 + student3 ; 
console.log(students) ; 
console.log("Hello , my name is " + student2[0] +' '+ student2[1] + " and I am " +student2[2]+ " Years old ! :)" )