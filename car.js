// Partner up with your neighbor - your task is to make a module together (car.js) and that defines a car – with both properties and functions – and export it as a module to a main.js file.
// In the car.js file:
// Properties should include:
// color, convertible (boolean), speed (0, at first)
// Functions specs:
// include accelerate and decelerate
// these should take one argument, the speed, and add or subtract it the from the current speed
// return a string with the old speed and new speed
// call these functions at the bottom of the file
// In the main.js file, be sure to require the module and console log a message about your car object, including the current speed of the car.



var Car = function (color, convertible, speed) {
  this.color = color
  this.convertible = convertible
  this.speed = 0

  this.decelerate = function(lessSpeed) {
    var currentSpeed = this.speed
    var newSpeed = this.speed - lessSpeed
    return this.speed = newSpeed
  }
  this.acelerate = function(addSpeed) {
    var currentSpeed = this.speed
    var newSpeed = this.speed + addSpeed
    return this.speed = newSpeed
  }
}





module.exports = Car
