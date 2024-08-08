// Difference B/w var,let and const
 
var abc = 18;

{
    var num = 10;
    //It is called global scope because it accesible outside the curly braces

}
// console.log(num);

{
    let num1 = 20;
    //it is called block scope because it is not accessible outside the curly braces

}
// console.log(num1);


/*
var , let and const are same when they initialized outside the 
curly braces 
*/


const number = 50;
//we cannot change its value if we try to change it then error occured
// number = 90;
// console.log(number)


/*
const is a block scope as well as global scope but by default it is 
block scope scope
*/
function Heloo(){
const value = 4545;

// console.log(value)
}
// Heloo();
// console.log(value);



/* Local Scope or Function Scope */

var username = "Ahmad";
function Hello(){
console.log(username);
}
// Hello();


function Hi(){
var usermail = "ARAhmadRaza5570@gmail.com";
//Now its become a block scope because we can't access it outside this function
console.log(usermail);
}
// Hi();
// console.log(usermail);


var aaa = 50;
function Bro(){
    var aaa = 40;
    console.log("Inside Function: " + aaa);
}
// Bro();
// console.log("Outside: " + aaa);

var bbb = 50;
function Bro(){
    bbb = 40;
    console.log("Inside Function: " + bbb);
}
// Bro();
// console.log("Outside: "+ bbb);
//Here both answers are 40 because we can globaly change the value of var


//<!-- Do-while Loop -->
/*   Why we use it?
When the condition is false then Do-while loop run atleast one time
on the other hand other loops will not execute one time when condition
is false
*/

let i = 0;
do{
    // console.log("Do-while Loop: " + i);
    i++;
}while(i < 0);



// <!-- For-in Loop and For-of Loop -->
/*
For-in loop will run on objects
*/

//For-in Loop
let car = {
    color: "Red",
    Company: "Honda",
    doors: 4
}

for(key in car){ // it will run only names in objects
    // console.log("Key",key);
}


//For-of loop
var country = "Pakistan";
for(char of country){  //It will declare all characters one by one
    // console.log("For-of Loop",char);
}



// <!-- Arrays -->

var listofcars = new Array(100);
//Here we can fix the Array length  if we didn't give any thing in round braces
//then unlimited Arrays can make
function callBackFunction(item,index){
    return item , index;
}
var listofItems = [10,20,30,40,50];
// var result = listofItems.find(callBackFunction);
// console.log(`result ${result}`);

//  var result = listofItems.every(callBackFunction);
//  console.log(`result ${result}`); //It will true when all condition are true

// var result = listofItems.some(callBackFunction);
// console.log(`result ${result}`);//It will true when atleast one condition are true


// var result = listofItems.sort((a,b)=>a-b);//It will execute result in ascending order
// console.log(`result ${result}`);


// var result = listofItems.sort((a,b)=>b-a);//It will execute result in Descending order
// console.log(`result ${result}`);

//  var result = listofItems.reverse(callBackFunction); //It reverse the value
// console.log(`result ${result}`);


// var result = listofItems.findIndex(callBackFunction);//It will return how many index in this
//  console.log(`result ${result}`);


//   var result = listofItems.indexOf(callBackFunction);
//  console.log(`result ${result}`);

//  var result = listofItems.includes(10); //It will return true when condition is true
//  console.log(`result ${result}`);

var listofItems2 = [60,70,80,90,100];
var third = listofItems.concat(listofItems2);//It will combine Arrays
// console.log(".Concat", third);


