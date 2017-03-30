/* Hoisting */
openDoor();

/* 
   Cannot be called because closeDoor() is undefined. 
   When closeDoor is called, it will say TypeError
   closeDoor is not a function 
*/
closeDoor();

// Function Expression
var closeDoor = function() {
	console.log("Close the door");
}

// Function Decalration
function openDoor() {
	console.log("I can be called because I am hosited.");
}