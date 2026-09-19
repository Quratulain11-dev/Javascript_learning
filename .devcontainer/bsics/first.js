console.log("hello, world");
while (false) {
    console.log("still running...");
}
let x = 5;
let y = 10;
console.log(++x + y);
while (x < 10) {
    console.log("x is less than 10");
    x++;
}
let z = 0;
do {
    console.log("z is " + z);
    z++;
} while (z < 5);  
var fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
switch (x) {
    case 5:
        console.log("x is 5");
        break;
    case 10:
        console.log("x is 10");
        break;
    default:
        console.log("x is neither 5 nor 10");
}
if (x > 0) {
    console.log("x is positive");
} else if (x < 0) {
    console.log("x is negative");
} else {
    console.log("x is zero");
}   let a = 10;
let b = 20;
let c = a + b;
console.log("The sum of a and b is: " + c); 

console.log("The product of a and b is: " + (a * b));
let d = 30;
let e = 40;
let f = d * e;
console.log("The product of d and e is: " + f); 
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice");
greet("Bob");
function add(x, y) {
    return x + y;
}
let sum = add(5, 10);
console.log("The sum of 5 and 10 is: " + sum);
function multiply(x, y) {
    return x * y;
}
let product = multiply(5, 10);
console.log("The product of 5 and 10 is: " + product);