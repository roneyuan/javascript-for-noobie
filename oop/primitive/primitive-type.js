// Boolean
// Number
// String
// null
// undefined

console.log(typeof "Thomas");
console.log(typeof 3.14);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); // object - why? It has been known for an error by TC39

console.log("5" == 5); // true
console.log("5" === 5); // false

console.log(undefined == null); // true
console.log(undefined === null); // false

// Prmitive Method

// Important! undefined and null do not have primitive method

var name = "Thomas";
var uppercaseName = name.toUppercase();
var secondLetter = name.charAt(2);
var substringName = name.subString(2, 5);

var toggle = true;
var stringToggle = toggle.toString(); // "true"