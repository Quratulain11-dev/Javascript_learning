// ### Question 1 — Variables & Types
/*
let stdname="Qurat ul ain";
let age=19;
let HighSchoolstatus=true;
let favrtproglanguage="python";
let fee = 6000.00;
// type of each variable
console.log(typeof(sname));
console.log(typeof(age));
console.log(typeof(HighSchoolstatus));
console.log(typeof(favrtproglanguage));
console.log(typeof(fee));

// ### Question 2 — Predict the Output
let a = "10"; 
let b = 5;
console.log(a + b);//105  // addition operator is used for concetination in js
console.log(a - b);//5
console.log(a * b);//50
console.log(a / b);//2

// ### Question 3 — Type Conversion
let price = "1500";
let quantity = "3";
// Calculate the total price.
console.log(Number(price) * Number(quantity)) // the values which are already given are in string, multiplication operation 
                                              //  can not be performed on string as it will give same  output
                                              // final result will be 1500*3=4500
// ### Question 4 — String to Number
 let c = "20";
let d = "10";
console.log(a + b);//2010
console.log(Number(a) + Number(b));//30
// explanation  in first console.log it is concetinating while in second we have implicit type conversion 


// ### Question 5 — Number to String

let Age = 25;
console.log("i am " + String(Age) +" years old"); //
let stdage=25;
// console.log(`i am ${stdage} years old`)
let studentAge = "20";
let nextYear = Number(studentAge) + 1;

console.log(nextYear);

*/
// ### Question 14 — Simple Bill Calculator

let itemPrice = "500";
let quantity = "4";
let deliveryFee = "200";
var total = Number(quantity) * Number(itemPrice);
console.log("total price is : " +total)
console.log( "deliveryFee: " +deliveryFee )
console.log(`final bill is : " ${total+Number(deliveryFee)}`)



// Item Total: 2000
// Delivery Fee: 200
// Final Bill: 2200

//  ### Question 16 — Challenge Task
let productName = "Laptop";
let price = "80000";
let Quantity = "2";
let discount = "5000";
console.log("product  :" + productName);
console.log("price :" + price );
console.log("quantity :" +Quantity);
console.log(`subtotal ${price * Quantity}`);
console.log("discount:" +discount);
console.log(`final price : ${ (price * Quantity)-discount}`);

// Product: Laptop
// Price: 80000
// Quantity: 2
// Subtotal: 160000
// Discount: 5000
// Final Price: 155000



