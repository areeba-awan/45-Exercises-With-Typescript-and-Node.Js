// ASSIGNMENT # 45 (CARS)
// DEFINE A FUNCTION TO CREATE A CAR OBJECT WITH OPTIONAL OPTIONS...
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // INITIALIZE A CAR OBJECT WITH MANUFACTURER AND MODEL
    var car = {
        manufacturer: "manufacturer",
        model: "model",
    };
    // ADD ADDITIONAL OPTIONS TO THE CAR OBJECT
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
;
// CALL THE FUNCTION TO CREATE A CAR OBJECT
var my_car = create_car("Toyota", "Corolla", "color:Black", "Sunroof:true", "Year : 2024");
// PRINT THE VARIABLE TO ENSURE ALL THE INFROMATION IS STORED CORRECTLY IN CAR OBJECT
console.log(my_car);
