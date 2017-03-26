/* No Hositing */
openDoor();

/* Hoisting */
closeDoor();

// Function Expression
var closeDoor = function() {
	console.log("Close the door");
}

// Function Decalration
function openDoor() {
	console.log("Open the door");
}