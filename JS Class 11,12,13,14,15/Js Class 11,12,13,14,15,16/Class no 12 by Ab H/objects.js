// <!-- OBJECTS -->

var firstobject = {
    name: "Ahmad",
    Age: 21,
    Gender: "Male",
    Adress: "Faisalabad",
    Phone: "0300-1234567"
};

console.log(firstobject);
//If we want to need to get just name then
console.log(firstobject.name);
//Like This
console.log(firstobject.Phone);

//If we want to Update person's name,phone or Adress etc then we can

firstobject.name = "Ali";
firstobject.Phone = "0300-1234568";
firstobject.Adress = "Lahore";

console.log("Updated",firstobject);


// Array In Objects

var secondobject = {
    name: "Armaan",
    Age: 23,
    Gender: "Male",
    Adress: "Islamabad",
    Phone: "0300-4535355",
    Hobbies: ["Reading","Writing","Playing"]
};

console.log(secondobject);

// If we need to get just Array from the objects then we can use this

console.log(secondobject.Hobbies);

// If we need to get Element from Array then we can use this

console.log(secondobject.Hobbies[2]);//Here is we will use index because we want to get element from Array

// If we want to add new element in Array then we can use this

secondobject.Hobbies.push("Swimming");

console.log(secondobject.Hobbies);

// If we want to remove element from Array then we can use this

secondobject.Hobbies.pop();

console.log(secondobject.Hobbies);

// If we want to remove element from Array then we can use this

// secondobject.Hobbies.shift();

// console.log(secondobject.Hobbies);

// If we want to remove element from Array then we can use this

// secondobject.Hobbies.unshift();

// console.log(secondobject.Hobbies);

// If we want to remove element from Array then we can use this

// secondobject.Hobbies.splice(1,1);

// console.log(secondobject.Hobbies);

var car = {
    title: "Phantom VIII",
    brand: "Roles Royce",
    modleyear: 2024,
    colors: ["brown","Aqua"],
    isspecialEdition: true,
    ownername: "AR",
    registration:{
        no: 1234,
        city: "Faisalabad"
    } 
}
console.log(car);

//If we need to get just registration no 
console.log(car.registration.no);

var person1 = {
    name: "Naveed",
    Age: 27,
    Phone: 0-327479842,
    phone2: this.phone,
    Designations: ["Trainer SMIT","Trainer PIAIC","CEO at Techloset"],
};
// Now we want to get only Designation
console.log(person1.Designations);