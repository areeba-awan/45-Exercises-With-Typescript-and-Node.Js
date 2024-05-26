// Assignment no 24 (More Conditional Test);

// Define Variables
let mango = "mango";
let uppercaseMango = "MANGO";
let ten = 10;
let twenty = 20;
let fruits = ["Kiwi","Apple","Banana"];

// Test for equality and inequality with strings;

console.log("Is mango is equal to mango?");
console.log(mango === "mango");

console.log("\nIs mango is not equal to mango?");
console.log(mango != "mango");

// Test using Lowercase function
console.log("\nIs MANGO is equal to mango after converting to Lowercase? ");
console.log(uppercaseMango.toLowerCase() == "mango");

console.log("\nIs MANGO is not equal to mango after converting to Lowercase");
console.log(uppercaseMango.toLowerCase() != "mango");

// Numerical Test
// EQUAL TO
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

// NOT EQUAL TO
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);

// GREATER THAN
console.log("\n Is ten is greater than zero? ");
console.log(ten > 0);

// LESS THAN
console.log("\n Is twenty is less then ten?");
console.log(twenty < 10);

// GREATER THAN OR EQUAL TO
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5); 

// LESS THAN OR EQUAL TO
console.log("\n Is twenty is less than or equal to ten?");
console.log(twenty <= 10);

// Test using "and" & "Or" Operators

// USING && (and)
console.log("\n Twenty is not equal to ten AND twenty is greater than 10");
console.log(twenty != 10 && twenty > 10 );

console.log("\n Twenty is not equal to ten AND twenty is greater than thirty");
console.log(twenty != 10 && twenty > 30 );

// USING || (Or)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20 );

console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20 );

// Test whether an item is include in array
console.log("\n Is Kiwi include in my fruits array? ");
console.log(fruits.includes("Kiwi"));

// NOT INCLUDE
console.log("\n Is Guava is include in my fruits array?");
console.log(fruits.includes("Guava"));















