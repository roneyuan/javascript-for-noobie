/*
Concept:
Prototype chain is very powerful for OOP, but sometimes 
it could give you some security issue.
*/

var computer = function() {
	this.storage = "500";
}

computer.prototype.cpu = "AMD";


var mac = function(model) {
	this.model = model;
}

// Inheritance
mac.prototype = Object.create(computer.prototype);

console.log(mac.prototype.cpu); // AMD

// if we add a propertie to mac.prototype, it will NOT
// be added to computer
mac.prototype.screenSize = "15";

console.log(computer.prototype.screenSize); // undefinded
console.log(mac.prototype.screenSize); // 15

// If we change computer.cpu, it will change it's children object
computer.prototype.cpu = "Intel";

console.log(mac.prototype.cpu) // Intel