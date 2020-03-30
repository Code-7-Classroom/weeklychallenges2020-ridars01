var tom  = {
    height: 9 ,
    mass : 8 ,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


var jerry = {
    height: 3.9 , 
    mass : 0.9 ,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
if (tom.calcBMI() > jerry.calcBMI()) {
    console.log(  ' Tom has a higher BMI of ' + jerry.bmi);
} else if (jerry.bmi > tom.bmi) {
    console.log(' Jerry has a higher BMI of ' + tom.bmi);
} else {
    console.log('They have the same BMI');
}