"use strict";
// ASSIGNMENT # 38 (cities)
// Describe a  function 
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
// Calling the function
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
