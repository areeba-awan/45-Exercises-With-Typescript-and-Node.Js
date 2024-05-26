"use strict";
// Assignment # 15 (Changing In guest List)
let guestList = ["Zoha", "Anaya", "Laiba", "Maryam,"];
let dontCome = guestList[0];
// print the message
console.log(dontCome, "Nhi aa skti");
guestList.splice(0, 1, "Areesha");
guestList.forEach(guest => console.log(`Salam ${guest}, Would You Like To Have A Dinner With Me?`));
