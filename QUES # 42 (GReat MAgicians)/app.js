"use strict";
// ASSIGNMENT # 42 (Great Magicians)
// DEFINE THE FUNCTION TO SHOW MAGICIANS NAMES
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// FUNCTION TO MAKE MAGICIANS GREAT THROUGH .map() IT WILL MODIFY ARRAY
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// DEFINE AN ARRAY OF MAGICIANS NAMES
let magicians_names = ["Harry Potter", "Sabrina", "Anaya"];
// CALL make_great FUNCTION TO MODIFY MAGICIANS NAMES
let great_magicians = make_great(magicians_names);
// CALL show_magicians THAT SHOW THAT SHOW MODIFIED LIST OF MAGICIANS
show_magicians(great_magicians);
