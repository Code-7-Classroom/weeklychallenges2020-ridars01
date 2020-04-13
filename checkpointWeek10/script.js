//How is information stored in an object 
    //Information is stored in an object in many different ways
    //First create a variable and and then open the curly braces
            // var person = {}
    //Within the curly braces you can use any method such as arrays  , strings , and even numbers
    /*
        //var person{
            name : Bob ,
            age : 18 ,
            hobbies : [sports , reading , swimming]
        }*/


        //Using ES6 syntax code : 

        const me = {
            name : 'Rida Fatimah' ,
            sayHi : function (){
                return (me.name) ; 
            }
        }
        console.log(me.name) ; 
        console.log(me.sayHi()) ; 

