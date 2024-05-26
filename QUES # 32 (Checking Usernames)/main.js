"use strict";
// ASSIGNMENT # 32 (CHECKING USERNAMES)
// ARRAY OF CURRENT USERS
let current_users = ["Usman", "ali", "Ayan", "Rehman", "Aryan"];
// ARRAY OF NEW USERS
let new_users = ["Hamza", "Mahad", "Ali", "Aryan", "Zoya"];
// LOOP THROUGH new_users TO CHECK FOR USERNAMES AVAILIBILITY
new_users.forEach(new_one_user => {
    // Making a condition for username already taken and exists save in 
    let our_condtion = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase());
    // Print different messages using if-else
    if (our_condtion) {
        console.log(`Sorry ${new_one_user} is Already Taken!`);
    }
    else {
        console.log(`This username ${new_one_user} is available`);
    }
});
