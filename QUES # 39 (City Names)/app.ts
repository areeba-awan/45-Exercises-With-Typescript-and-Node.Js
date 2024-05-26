// ASSIGNMENT # 39 (CITY NAMES)

// CREATING A FUNCTION WITH PARAMETERS WHICH RETURN A VALUE IN STRING
function city_country(city : string, country : string) : string{
    return `${city},${country}`

}
// CALLING A FUNCTION AND PRINT A RETURNED VALUE

console.log(city_country("Karachi" , "Pakistan")); 

console.log(city_country("Tokyo" , "Japan"));

console.log(city_country("Berlin" , "Germany"));