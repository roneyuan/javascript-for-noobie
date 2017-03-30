/*
	What is hoisting?
	Every time that JavaScript load the files, it would read two times.
	First time, it would push up all the variables and functions and 
	store into the memory. It would assign an emtpy (undefined) value to 
	the variable. When it read the second time, it will assign the 
	actual value.
*/

function callMeMaybe() {
	console.log(me); // Show undefined instead of showing not defined
	var me = "maybe";
}

callMeMaybe();