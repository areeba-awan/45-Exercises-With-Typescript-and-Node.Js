// ASSIGNMENT # 45 (CARS)

// DEFINE A FUNCTION TO CREATE A CAR OBJECT WITH OPTIONAL OPTIONS...
function create_car(manufacturer:string , model:string, ...options:string[]){

    // INITIALIZE A CAR OBJECT WITH MANUFACTURER AND MODEL
    let car = {
        manufacturer :  "manufacturer",
        model : "model",

    };
    // ADD ADDITIONAL OPTIONS TO THE CAR OBJECT
    options.forEach(option => {
        let[key,value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;

};

// CALL THE FUNCTION TO CREATE A CAR OBJECT
let my_car = create_car("Toyota","Corolla","color:Black","Sunroof:true","Year : 2024");

// PRINT THE VARIABLE TO ENSURE ALL THE INFROMATION IS STORED CORRECTLY IN CAR OBJECT
console.log(my_car)