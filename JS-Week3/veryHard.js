//Very Hard 

//1 
function Person(name , job , age) {
    this.name = name ; 
    this.job = job ; 
    this.age = age ;
}
//2 
Person.prototype.excercise = function (){
    return "Running is fun ! - said no one ever" ; 
}
//3 
Person.prototype.fetchJob = function() {
    return this.name + 'is a '+ this.job ; 
}
//4 
function Programmer(name , job , age , languages){
    Person.call(this.name , job , age ) ; 
    this.language = [languages] ; 
    this.busy = true ; 
}
//5 
Programmer.prototype.completeTask = function(){
    this.busy = false ; 
}
Programmer.prototype.acceptNewTask = function(){
    this.busy = true ; 
}
//6 
Programmer.prototype.offerNewTask = function(){
    if(this.busy){
        console.log('cant accept new tasks right now . ') ; 
    }else {
        console.log ('would love to take on a new responsibility. If the prigrammer is not busy ') ; 
    }
}
//7 
Programmer.prototype.listLanguage = function(){
    console.log(this.language)
}
Programmer.prototype.learnLanguage = function(program){
    return this.language.push(program) ; 
}
//8 
var me = new Person ("Rida" , "RoadToHire Student" , 18 )
console.log(me.fetchJob()) ; 
var veronica1 = new Programmer("Veronica " ,"RoadToHire" , 18 , "HTML")
console.log(veronica1 ) ; 
veronica1.listLanguage() ; 
veronica1.learnLanguage("ruby"); 
veronica1.listLanguage() ; 
veronica1.offerNewTask();
