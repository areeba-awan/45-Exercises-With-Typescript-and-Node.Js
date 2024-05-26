"use strict";
// ASSIGNMENT # 30 (HELLO ADMIN)
// CREATING A ARRAY
let userName = ["Laiba", "Ayat", "Zoha", "Admin", "Tayyaba"];
// USING FOR EACH LOOP ON ARRAY
userName.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`HELLO ${oneUser}, WOULD YOU LIKE TO SEE A STATUS REPORT?`);
    }
    else {
        console.log(`HELLO ${oneUser}, THANK YOU FOR LOGGING IN AGAIN.`);
    }
});
