"use strict";
// ASSIGNMENT # 44 (SANDWICHES)
// DEFINE A FUNCTION WITH A REST PARAMETERS THAT ACCEPTS ITEMS ARGUMENTS REPRESENTING OUR SANDWICHES
function makeSandwich(...items) {
    console.log("\n Making a sandwitch with the following items : \n");
    items.forEach(singleItem => console.log("-" + singleItem));
    console.log("\n <<<< Now Enjoy Your Sandwitch >>>> ");
}
// CALL THE FUNCTION 3  TIMES WITH 3 DIFFERENT NUMBER OF ARGUMENTS
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "Egg", "Chicken", "Cheese", "Lettuce", "Tomato");
