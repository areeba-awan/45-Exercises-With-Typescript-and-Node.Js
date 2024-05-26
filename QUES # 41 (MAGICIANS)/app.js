"use strict";
// ASSIGNMENT # 41 (MAGICIANS)
// DEFINE A FUNCTION TO PRINT EACH MAGICIAN NAME FROM AN ARRAY
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// DEFINE AN ARRAY CONTAINS MAGICIAN NAMES
let magician_names = ["Harry Potter", "Areeba", "Sabrina"];
// CALL THE FUNCTION TO PRINT EACH MAGICIAN NAME
show_magicians(magician_names);
