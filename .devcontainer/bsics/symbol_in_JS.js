// A Symbol is a unique primitive value.
const userId = Symbol("userId");

const user = {
	name: "Alex",
	[userId]: 101,
};

console.log(user[userId]); // 101
let userId2 = Symbol("userId");
console.log(userId === userId2); // false


var sym1 = Symbol("foo");
var sym2 = Symbol("foo");

console.log(sym1 === sym2); // false

const obj = {
    [sym1]: "Annie",
    [sym2]: "Quratulain",
};          
console.log(obj[sym1]); // "Annie"
console.log(obj[sym2]); // "Quratulain"


let number = 42;
let string = "Hello, world!";
let boolean = true;
let nullValue = null;
let undefinedValue = undefined;
let object = { key: "value" };
let array = [1, 2, 3];
let symbol = Symbol("unique");

console.log(typeof number); // "number"
console.log(typeof string); // "string"
console.log(typeof boolean); // "boolean"
console.log(typeof nullValue); // "object" (this is a known quirk in JavaScript)
console.log(typeof undefinedValue); // "undefined"
console.log(typeof object); // "object"
console.log(typeof array); // "object" (arrays are objects in JavaScript)
console.log(typeof symbol); // "symbol" 



let mySymbol = Symbol("mySymbol");
mySymbol.description = "This is my symbol"; // This will not change the description
console.log(mySymbol.description); // "mySymbol"    
console.log(typeof mySymbol); // "symbol" 
const mySymbol2 = Symbol("mySymbol");
console.log(mySymbol === mySymbol2); // false 
