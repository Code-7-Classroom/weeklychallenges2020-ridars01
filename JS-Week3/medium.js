//Medium 

function cutPizzaSlices(slices){
        return function (people){
            var pizza = slices / people ;
            return 'Each person gets '+ pizza.toFixed(2) + ' slices of pizza' ; 
        }
}
var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));                                                                                                                                                                    
console.log(sharePizza(3)); 
