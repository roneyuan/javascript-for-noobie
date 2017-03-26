/* In class and function. Can be hacked, so use object 
literal is another method
*/

var obj = function() {
	var name = "table"
}

console.log(obj.prototype);

obj.prototype.price = "10";

var anotherObj = new Object();
anotherObj.prototype = Object.create(obj.prototype);

console.log(anotherObj);