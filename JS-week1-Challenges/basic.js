//Very Easy challenge 

var num1 = 6 ; 
var num2 = 2 ; 
var difference = num1 - num2 ; 
console.log ("The difference between" + ' '+num1 + ' '+"and" +' '+ num2 + ' '+"is"+' ' + difference) ; 

//Easy Challenge

var firstName = 'Rida'; 
var lastName = 'Fatimah' ; 
var letterDifference= 3  ; 
console.log("The name " + lastName + " is longer than " + firstName + " by " + letterDifference + " charecters" )

//Medium 

var input = prompt('Please enter in text ex. SHOUTINIG , whisperinig , Normal text') ; 
if (input === input.toUpperCase()){
    console.log("You are SHOUTING")
}
else if (input === input.toLowerCase()){
    console.log('You are whispering') ; 
}
else {
    console.log (' You are speaking normally') ; 
}

