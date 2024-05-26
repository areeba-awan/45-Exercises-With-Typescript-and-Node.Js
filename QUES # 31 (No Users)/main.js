"use strict";
// ASSIGNMENT # 31 (NO USERS)
// CREATING A ARRAY WITH 5 VALUES
let userNames = ["Laiba", "Anaya", "Zoya", "Admin", "Ayat"];
// REMOVING ALL VALUES FROM ARRAY NOW OUR ARRAY IS EMPTY
userNames = [];
// IF STATEMENTS FOR CHECKING LENGTH OF OUR ARRAY IS EMPTY?
if (userNames.length === 0) {
    console.log("YOUR ARRAY IS EMPTY YOU NEED TO FIND SOME USERS!");
}
else {
    // IF ARRAY IS NOT EMPTY,USING FOREACH LOOP ON ARRAY
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`HELLO ${oneUser}, WOULD YOU LIKE TO SEE A STATUS REPORT?`);
        }
        else {
            console.log(`HELLO ${oneUser}, THANK YOU FOR LOGGING IN AGAIN.`);
        }
    });
}
