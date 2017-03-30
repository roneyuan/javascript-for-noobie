/* Hoisting */
openDoor();

/* Cannot be called because closeDoor() is undefined */
closeDoor();

// Function Expression
var closeDoor = function() {
	console.log("Close the door");
}

// Function Decalration
function openDoor() {
	console.log("I can be called because I am hosited.");
}