
// Assignment # 16 (More Guests)

// Creating a Guest List Array
let guestList = ["Hamza","Usman","Ayesha","Areeba"];

//Making A VAriable for those guest who cant come
let dontCome = guestList[0];

// Print the name of Guest who cant come
console.log(dontCome, "Nhi aa Skte hn");

// Add or remove values from thew guest list Array
guestList.splice(0, 1, "Amir");

// Message Print for Bigger Table
console.log("Good News! We Have Found A Bigger Table For Dinner.");

// Adding a new value at starting index of Array
guestList.unshift("Ali");

// Adding a new value at ending index of Array
guestList.push("Zain");

// Get a Middle Index of Our Guest List array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new gust to middle index of guest list array
guestList.splice(middleIndex,0, "Osama");

// Print message of updated list
console.log("Updated List Of Our Guests");

// Sending a invitation message to our guest one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, Would You Like To Have A Dinner With Me?`));