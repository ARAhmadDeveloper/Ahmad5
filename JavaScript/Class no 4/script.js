// Comparison Operator
/*
var num = 10;
var num1 = 15;
var result = num > num1;
console.log("-1", result);
*/
/*
var num = 10;
var num1 = 15;
var result = num < num1;
console.log("0", result);
*/

/*
var num = 10;
var num1 = 15;
var result = num == num1;
console.log("1", result);
*/

/*
var num = 10;
var num1 = 15;
var result = num <= num1;
console.log("2", result);
*/
/*
var num = 10;
var num1 = 15;
var result = num != num1;
console.log( "3", result);
*/
/*
var num = 10;
var num1 = 15;
var result = !(num != num1);   // ! is used to reverse the answer
console.log( "4", result);
*/


/*The Operation in which comparison operator exist then its
value is always Between 'True or False'

The Operation in which comparison operator is not exist then its
value is always Between '-infinity or +infinity'
*/





//Logical Operator
// AND Operation
/*
p   q  ||  p and q
T   T  ||    T
T   F  ||    F
F   T  ||    F
F   F  ||    F

*/

// OR Operation
/*
p   q   &&   p or q
T   T   &&     T
T   F   &&     T
F   T   &&     T
F   F   &&     F
*/

/*
// AND Operation
var num = 20;
var num1 = 25;
var result = num >= num1 && 5<7;
console.log("comp", result);
*/
/*
var num = 20;
var num1 = 25;
var result = num <= num1 && 5<7;
console.log("comp2", result);
*/
/*
// OR Operation
var num = 20;
var num1 = 25;
var result = num <= num1 || 5<7;
console.log("OR", result);
*/
/*
var num = 20;
var num1 = 25;
var result = num >= num1 || 5 == 7;
console.log("OR2", result);
*/
/*
// Both AND and OR Operators

var num = 20;
var num1 = 25;
var result = num >= num1 || 5 == 7 && 2 >= 2;
console.log("both", result);
*/
/*
var num = 20;
var num1 = 25;
var result = num >= num1 && 5 == 7 || 2 >= 2;
console.log("both1", result);
*/
/*
var num = 20;
var num1 = 25;
var result = 5 || 0 ;
console.log("both2", result);
*/
/* If in OR operation there is no comparison operator(<, >, ==, !=, <=, >=, !())
 exists or no falsy value on the left side
 exists then its answer is always left value */
/*
 var num = 20;
var num1 = 25;
var result = 2!=2 && 6;
console.log("both3", result);
*/
/*
var num = 20;
var num1 = 25;
var result = 70 && 0;
console.log("both4", result);
*/

/*
var num = 20;
var num1 = 25;
var result = 70 && 56;
console.log("both5", result);
*/

/* If in AND operation if the value of left side
 is false then its answer is always value on the left side*/
 /* If in AND Operation there is no comparison operator exists 
 then it check the left value if it is true then it shows the answer
  which is on the right side and if the left side value is false then
  it shows the left value*/

  /*Falsy Values are;
  '0, False, null, undefined'*/
  