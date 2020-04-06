//Easy 
function exercise(input){
    if(input === 'running'){
        var statement = "Today's excercise: " + input  ; 
    }else if (input === 'swimming'){
        var statement = "Today's excercise: " + input  ; 
    }
    return  statement; 
}
function run(){
    var run = exercise('running');
    return run ; 
}
function swim(){
    var swim = exercise('swimming');
    return swim ; 
}

console.log(run());
console.log(swim());






