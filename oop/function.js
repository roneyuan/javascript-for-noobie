/*
In JavaScript, function is defined as an object. The special thing about this "object" (function) is
that is has a unique internal property [[call]]. With this property, this "object" can be
executed. JavaScript defines all this internal property in [[]] format. It defines the behaviour of the code
*/

/*
	function declaration vs function expression.

	It is one of the most important concept in JavaScript. Basically, they are the same.
	The only difference is the behaviour of "hoist".

	Look at the code below.

	function declartion is to declare a named function and function expression is declare a variable
	that point to a anonymous function.
*/

// If you call the function here - function decartion will work, but function expression will tell 
// you that it is not a function.

// Why is that? It is beacuse of hoisting. It is bevause of hoisting so that functionDecalration works.
// And it is also becuase of hoisting, functionExpression will tell yuo not it is not a function instead of undeclared.

functionDeclaration();
functionExpression();

function functionDeclaration() {
	console.log("declare a function");
}

var functionExpression = function() {
	console.log("express a function");
}

/*
	function as value.

	JavaScript has a first class function. So you can pass them to function as argument, variable, or an object
*/

var helloWorld = function(callbackFn) {
	callbackFn("World");
}

var say = function(something) {
	console.log("say" + something);
}

var look = function(something) {
	console.log("look" + something);
}

helloWorld(say);

var helloUS  = helloWorld;

helloUS(look);


// So why the code works?
// It is because JS interprets the code as below

var helloWorld = new Function("callbackFn");

helloUS = helloWorld

helloUS(say);

// So the constructor Function make sense that why helloWorld can be passed around to the variable of object

// Another example is to use .sort() for comparison function. By default, sort() has an option to pass a
// comparison function as an argument. The comparison function is an anonymous function that is being called
// whenever two values in the array to be compared

// Depends on the browser, .sort() has different algorithm. In MDN, in defines as unstable while IE defines as statble

// The resason why it is happen like that is because JS by default convert the number to string and do the compariosn.
// So you would need a comparison function to compare actual number
var num = [1,7,2,4,3,6,9,8,10];
num.sort()
console.log(num);

num.sort(function(first, second) {
	return first - second;
})

console.log(num);



/*
	Parameters
*/




