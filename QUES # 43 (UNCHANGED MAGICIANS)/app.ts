// ASSIGNMENT # 43 (Unchanged Magicians)

// DEFINE THE FUNCTION TO SHOW MAGICIANS NAMES
function show_magicians(magicians : string []){
    magicians.forEach(name => console.log(name));
}

// FUNCTION TO MAKE MAGICIANS GREAT THROUGH .map() IT WILL MODIFY ARRAY
function make_great(magicians : string []){
     return magicians.map(name => `The Great ${name}`);
}

// DEFINE AN ARRAY OF MAGICIANS NAMES
let magicians_names = ["Harry Potter","Sabrina","Anaya"];

// MAking a copy of original array through .splice() function
let copy_magicians_names = magicians_names.slice()

// Modify the Copied Array To Include "The Great" with their names
let copy_great_magicians= make_great (copy_magicians_names);

// SHOW BOTH ARRAYS ORIGINAL AND COPIED

// ORIGINAL
console.log("Original Array\n")
show_magicians(magicians_names);

// COPIED
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);