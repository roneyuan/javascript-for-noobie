/*
Concept:
Abstract is a base class, which cannot be instantiated.
Like when I say "Hey, there is a car". "Car" - I do not
mean it is Toyota or Porsche, but you know it is a "car",
which has four wheels, two head lights, signal light, etc.
So abstract is to give you a base idea and you can use 
inheritance to add more properties and instanciate the object
*/


var Car = function() {
	this.numberOfWheels = "4";
	this.numberOfHeadlights = "2";

	throw new Error("Abstract cannot be instantiated");
}

Car.prototype.engine = function() {
	console.log("Engine is fired")
}

var sportCar = function(model) {
	this.model = model;
}
// Inherite the Car
// In JavaScript, prototype shared the memory. Although it has higher volunerity,
// but we can use this method to get the parent's class properties and information.
sportCar.prototype = Object.create(Car.prototype);

// Instantiate a Car should give you an error
var car = new Car()

// Instantiate a sportCar
var porsche = new sportCar("Porsche");
porsche.engine();