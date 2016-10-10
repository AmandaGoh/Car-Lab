var Car = require('./car')

var firstCar = new Car('red', 'true', )
// var secondCar = new Car()
console.log('firstCar speed is ' + firstCar.speed);

firstCar.decelerate(10)
console.log('firstCar decelerate by ' + firstCar.speed);

firstCar.acelerate(50)
console.log('firstCar acelerate by ' + firstCar.speed);

console.log('firstCar color is ' + firstCar.color);
firstCar.changeColor
