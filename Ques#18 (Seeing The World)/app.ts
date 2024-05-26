// Assignment 18 (Seiing the world)

// Making an Array of countries and print its original order
let countriesToVisit:string [] = ["China","Denmark","Brazil","Argentina","England"];
console.log("Original Order:",countriesToVisit);

// Print the Array in Alphabetical Order without modifying the Actual List
console.log("Alphabetical Orders:", [...countriesToVisit].sort());

// Show that the Array is still in it's original order
console.log("Still in Original Order:",countriesToVisit);

// Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:",[...countriesToVisit].reverse());
// Show that the Array is still in its Original Order.
console.log("Still In Original Order:",countriesToVisit);

// We have changed the Original Array Order Now 
console.log("Original Array Reversed:",countriesToVisit.reverse());

// Print The Array To Show That its back to it's Original Order.
console.log("Back to Original Order:",countriesToVisit.reverse());

// Print the Array To Show That its order has been changed in Alphabetical Order now.
console.log("Sorted in Alphabetical Order:",countriesToVisit.sort());

// We have changed the Original Array Order Now in reverse order Again.
console.log("Original Array Reversed Again:",countriesToVisit.reverse());

