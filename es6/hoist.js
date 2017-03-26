function callMeMaybe() {
	console.log(me); // Show undefined instead of showing not defined
	var me = "maybe";
}

callMeMaybe();