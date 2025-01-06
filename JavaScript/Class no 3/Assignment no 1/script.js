// Define my birth year
var birthyear = 2002;
var currentyear = 2024;
console.log("My Age is ", currentyear - birthyear)

// Define length and width of the rectangle

var length = 30;
var width = 20;
var Areaofrectangle = length*width;          // The formula of Area is 'Area = Langth*Width'
console.log("The Area of a Rectangle is", Areaofrectangle)


// To find the Area of a circle 
//let the Radius of the circle is 15
var Radius = 10;
//Formula to find Area of a circle is 'Area = Pi*r*r'
var Areaofcircle = Math.PI*Radius*Radius;
console.log("The Area of a Circle is ", Areaofcircle)



// To find the area of a cube 
//let suppose the sidelength is 4
var sideLength = 4;
// Calculate the area of the cube
var Areaofcube = 6*sideLength*sideLength
// Output the result
console.log("The surface area of the cube is: ", Areaofcube);


// Function to convert Fahrenheit to Celsius
//Let suppose we want to convert 60°F into Celcius
var Fahrenheit = 60;
var fahrenheitToCelsius = (Fahrenheit - 32) * 5/9;
console.log("60°Fahrenhiet is Equal to", fahrenheitToCelsius);

// Now Function to convert  Celsius to Fahrenheit
// Let suppose we want to convert 50°C into Fahrenhiet
var Celcius = 50;
var celciusTofahrenhiet = (Celcius * 9/5) + 32;
console.log("50°Celciuse is Equal to", celciusTofahrenhiet);




// Let we want to convert Seconds into Minutes
// And Given Seconds is 699
var seconds = 667;
var minutes = Math.floor(699 / 60);    // Math.floor is used to remove numbers which is to the side of period(.)
var remainingseconds = 699 % 60;
console.log("Given Seconds is Equal to ", minutes, "minutes and ", remainingseconds, "seconds");




// Function to calculate the Percentage
var value = 874;
var total = 1100;
var percentage = Math.floor((value / total) * 100);    // Math.floor is used to remove numbers which is to the side of period(.)
console.log(value, "is", percentage, "% of", total);



// Function to convert Days into Weeks
// Convert the 32Days into Weeks
var TotalDays = 52;
var weeks = Math.floor(TotalDays/7);
var remainingDays = TotalDays % 7;
console.log(TotalDays, "Days is Equal to", weeks, "weeks and", remainingDays, "Days");





// Increment and Decrement Operator:
//  - Q1:
//  let a = 2;
// let b = ++a * 2; 
// // b?
//  Answer
 var a = 2;
 var b = ++a * 2;
 console.log("Answer of Q1 is (b =", b,")")




//  - Q2
//  let x = 5;
//  let y = x-- + 2;
//  // y?
//Answer
var x = 5;
var y = x-- + 2;
console.log("Answer of Q2 is (y =", y,")")




// Q3 
// let x = 3;
// let y = ++x + x++ + ++x;
// // y?
//Answer:
var x = 3;
var y =++x + x++ + ++x ;
console.log("Answer of Q3 is (y =", y,")");





// - Q4 
// let m = 2;
// let n = ++m * m++ * --m;
// // n?
//Answer:
var m = 2;
var n = ++m * m++ * --m ;
console.log("Answer of Q4 is (n =", n,")");






// - Q5
// let a = 3;
// let b = 5;
// let result = ++a + b-- - a++ + --b;
// // result?
var a = 3;
var b = 5;
var result = ++a + b-- - a++ + --b;
console.log("Answer of Q5 is (result is", result,")");





// - Q6
// let m = 2;
// let n = 4;
// let p = m++ + ++n - --m + n--;
// // m?,n?,p?
//Answer:
var m = 2;
var n = 4;
var p = m++ + ++n - --m + n--;
console.log("Answer of Q6 is (m =",m, ")(n =",n,")(p =",p,")");





// - Q7
//  let a = 5;
// let b = 3;
// let c = 2;
// let d = 7;

// let result = ++a * (b-- + c) / --d;

// // a?, b?, c?, d? ,result?
// Answer:
var a = 5;
var b = 3;
var c = 2;
var d = 7;
var result = ++a * (b-- + c) / --d;
console.log("Answer of Q7 is (a =",a, ")(b =",b,")(c =",c,")(d = ",d,")(result is",result,")");





// - Q8
// let m = 2;
// let n = 3;
// let o = 4;
// let result = m++ * (--n + m) / (o-- - n);
// // m?, o?, n?, result?
// Answer:
var m = 2;
var n = 3;
var o = 4;
var Result = m++ * (--n + m) / (o-- - n);
console.log("Answer of Q8 is (m =",m, ")(n =",n,")(o =",o,")(Result is",Result,")");









































