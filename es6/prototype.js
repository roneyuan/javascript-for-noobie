/* 
	Prototype is in class or function. Prototype shares the same memory. 
	Can be hacked, so use object literal is another method.
	Below shows you where is the prototype.
*/

function obj() {
	let name = "table"
}

console.log(obj.prototype);

obj.prototype.price = "10";

var anotherObj = new Object();
anotherObj.prototype = Object.create(obj.prototype);

console.log(anotherObj.prototype.price);