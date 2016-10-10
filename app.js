var Car = require('./car')

var firstCar = new Car('red', true)
// var secondCar = new Car()
console.log('firstCar speed is ' + firstCar.speed);

firstCar.acelerate(50)
console.log('firstCar acelerate by ' + firstCar.speed);

firstCar.decelerate(10)
console.log('firstCar decelerate by ' + firstCar.speed);


console.log('firstCar color is ' + firstCar.color);
firstCar.setColor('blue')
console.log('firstCar new color is ' + firstCar.color);
