// ASSIGNMENT # 37 (LARGE SHIRTS)

// MAKING  A FUNCTION
function make_shirt(size : string = "Large", printMessage : string = "I Love TypeScript",){
    console.log(` .......<CREATING A ${size} SHIRT WITH THE ${printMessage} PRINTS ON SHIRT>......`);
}
// CALLING A FUNCTION WITH BY - DEFAULT VALUES
make_shirt();

// CALLING A FUNCTION NOW WITH MEDIUM SIZE AND DEFAULT MESSAGE
make_shirt("Medium");

// CALLING A FUNCTION NOW WITH SMALL SIZE AND DIFFERENT PRINT MESSAGE
make_shirt("Small","I love JavaScript");
