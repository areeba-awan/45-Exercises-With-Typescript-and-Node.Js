"use strict";
// Assignment # 28 (Stages of a person's Life);
// CREATING A VARIABLE
let age = 20;
// CREATING A PROGRAM FOR DETERMINING THE STAGES OF LIFE USING IF-ELSE CHAIN
if (age < 2) {
    console.log("YOU ARE A BABY :)");
}
else if (age >= 2 && age < 4) {
    console.log("YOU ARE TODDLER :/");
}
else if (age >= 4 && age < 13) {
    console.log("YOU ARE A KID :>");
}
else if (age >= 13 && age < 18) {
    console.log("YOU ARE A TEENAGER :]");
}
else if (age >= 20 && age < 65) {
    console.log("YOU ARE AN ADULT :)");
}
else if (age >= 65) {
    console.log("YOU ARE AN ELDER :)");
}
