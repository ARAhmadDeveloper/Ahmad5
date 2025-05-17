
// Loop Exersise: 
// 1. Write a js program to print all natural numbers from 1 to n. - using while loop


/*let natural = 1;
let n = prompt("We want to print All Natural numbers from 1 to n. Please Write the value of 'n'");
console.log("Here is All natural numbers from 1 to", n, "is")
while(natural <= n){
    console.log(natural);
    natural = natural + 1;
}
*/



// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using while loop


/*
var reverse = 1;
var n = prompt("We want to print All Natural Numbers in reverse order(n to 1). So Enter the Value of n");
console.log("Here is All natural numbers in reverse order from ",n, "to 1")
while(reverse <= n){
    console.log(n);
    n--;
}
*/






// 3. Write a js program to print all alphabets from a to z. - using while loop


/*
var letter = 'A'.charCodeAt(0);  //If you want to print lower letters then type lower letter
while( letter <= 'Z'.charCodeAt(0)){
    console.log(String.fromCharCode(letter));
    letter++;
}
*/





// 4. Write a js program to print all even numbers between 1 to 100. - using while loop


/*
var even = 0;
console.log("Even Numbers From 0 to 100 are :")
while(even <= 100){
    if(even % 2 == 0){
        console.log(even);
       
    }
    even++;
}
*/








// 5. Write a js program to print all odd number between 1 to 100.



/*
var odd = 1;
console.log("Odd Numbers between 1 to 100 are : ");
while(odd <= 100){
    if(odd % 2 != 0){
        console.log(odd);
       
    }
  odd += 2;
}
*/




// 6. Write a js program to find sum of all natural numbers between 1 to n.



/*
var natural = 1;
var n = prompt("We want to Find Sum of all natural numbers from 0 to n. So type the value of n");

var sum = 0;
while(natural <= n){
    
    sum += natural;
    natural = natural + 1;
}
console.log("The Sum of All Natural is : " , sum);
*/






// 7. Write a js program to find sum of all even numbers between 1 to n.



/*
var even = 1;
var n = prompt("We want to Find the sum of all even numbers from 1 to n. So type the value of n");
var sum = 0;
while(even <= n){
    if(even % 2 == 0){
        sum += even;
        
        
    }
    even++;
     
}
console.log("Here is the sum of all Even numbers from 1 to ", n, "is : ", sum);
*/






// 8. Write a js program to find sum of all odd numbers between 1 to n.




/*
var odd = 1;
var n = prompt("Please Enter the Value of n");
sum = 0;
while(odd <= n){
    if(odd % 2 !== 0){
       sum += odd;
 
    }
      odd++;
    
  
}
console.log("The Sum of all odd numbers from 1 to", n, "is : ", sum);
*/





// If-else exercise
// 1. Write a js program to find maximum between two numbers.



/*
var num1 = prompt("Please Enter the First Number");
var num2 = prompt("Please Enter the Second Number");
if(num1 > num2){
    console.log("First Number is Greater which is : ", num1);
}
else if(num1 < num2){
    console.log("Second number is Greater which is : ", num2);
}
else if(num1 == num2){
    console.log("Both Numbers are Equal ");
}
*/




// 2. Write a js program to find maximum between three numbers.




/*

var num1 = prompt("Please Enter the First Number");
var num2 = prompt("Please Enter the Second Number");
var num3 = prompt("Please Enter the Third Number")
if(num1 > num2 && num1 > num3){
    console.log("First Number is Greater then Other Two which is : ", num1);
}
else if(num2 > num1 && num2 > num3){
    console.log("Second Number is Greater between three Numbers which is : ", num2);

}
else if(num3 > num1 && num3 > num2){
    console.log("Third Number is Greater which is : ", num3);
}
else if(num2 > num1 && num2 == num3){
    console.log("Both Second Number and Third Number are Equal but Greater than the First Number which is : ", num2 ,"and ", num3);
}
else if(num1 == num3 && num1 > num2){
    console.log("Both First Number and Third Number are Equal but greater than Second Number which are : ", num1, "and", num3);
}
else if(num1 == num2 && num1 > num3){
    console.log("Both First number and Secong number are Equal but Greater than Third Number which are", num1, "and", num2);
}
else{
    console.log("All Numbers are Equal which are : ", num1,",", num2, "and", num3);
}

*/







// 3. Write a js program to check whether a number is negative, positive or zero.

/*

var number = prompt("Please Enter The Number");
if(number > 0){
    console.log("Number is Positive which is : ", number);
}
else if(number < 0){
    console.log("Number is Negative which is : ", number);

}
else if(number == 0){
    console.log("Number is neither Negative nor Positive which is : ", number);

}
*/







// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.



/*

var num = prompt("Please Enter the Number to check if it's divisible by 5 and 11 or not");
if(num % 5 == 0 && num % 11 == 0){
    console.log(num + "   Is Divisible by 5 and 11");
}
else{
    console.log("This is not Divisible 5 and 11");
}

*/



// 5. Write a js program to check whether a number is even or odd.


/*

var num = prompt("Please Enter the Number to check it is Even or Odd");
if(num % 2 == 0){
    console.log(num + " is Even ")
}
else{
    console.log(num + " is Odd")

}

*/


// 6. Write a js program to check whether a year is leap year or not.


/*

var year = prompt("Please Enter the Year");
if (year % 4 == 0 ){
    console.log(year + "  is a Leap Year");
}
else{
    console.log(year + "  is Not a Leap Year")
}

*/



// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.


/*

var alphabet = prompt("Please Enter any single alphabet in a lowercase");
if(alphabet == 'a' || alphabet == 'e' || alphabet == 'i' || alphabet == 'o' || alphabet == 'u'){
    console.log(alphabet + "  is a Vowel");
}
else{
    console.log(alphabet + " is a Consonent");
}

*/





// 7. Write a js program to check whether a character is alphabet or not.

// This program is wrong
/*
var alphabet = prompt("Please Enter any alphabet or digit ");
if(alphabet <= 'A'.charCodeAt(0) || alphabet >= 'Z'.charCodeAt(0)){
console.log(String.fromCharCode(alphabet + " is Alphabet"))
}
else{
    console.log(alphabet + " is not Alphabet")
}
*/


// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

// 11. Write a js program to input week number and print week day.


/*

var weeknumber = prompt("Please Enter a Week Number Between (1 - 7))");
if(weeknumber == 1){
    console.log("week Day : Sunday");
}
else if(weeknumber == 2){
    console.log("week Day : Monday");
}
else if(weeknumber == 3){
    console.log("week Day : Tuesday");
}
else if(weeknumber == 4){
    console.log("week Day : Wednesday");
}
else if(weeknumber == 5){
    console.log("week Day : Thirsday");
}
else if(weeknumber == 6){
    console.log("week Day : Friday");
}
else if(weeknumber == 7){
    console.log("week Day : Saturday");
}
else if(weeknumber < 1 || weeknumber > 7){
    console.log("Please Enter a Digit between (1 - 7)")
}

*/



// 12. Write a js program to input month number and print number of days in that month.

/*

var monthnumber = prompt("Please Enter the Month number");
if(monthnumber == 1){
    console.log("This Month is January and 31 Days in it");
}
else if(monthnumber == 2){
    console.log("This Month is February and 28 Days in it");
}
else if(monthnumber == 3){
    console.log("This Month is March and 31 Days in it");
}
else if(monthnumber == 4){
    console.log("This Month is April and 30 Days in it");
}
else if(monthnumber == 5){
    console.log("This Month is May and 31 Days in it");
}
else if(monthnumber == 6){
    console.log("This Month is Jun and 30 Days in it");
}
else if(monthnumber == 7){
    console.log("This Month is July and 31 Days in it");
}
else if(monthnumber == 8){
    console.log("This Month is August and 31 Days in it");
}
else if(monthnumber == 9){
    console.log("This Month is September and 30 Days in it");
}
else if(monthnumber == 10){
    console.log("This Month is October and 31 Days in it");
}
else if(monthnumber == 11){
    console.log("This Month is November and 30 Days in it");
}
else if(monthnumber == 12){
    console.log("This Month is December and 31 Days in it");
}
else{
    console.log("Please Enter a Digit between (1 - 12)")
}

*/




// 13. Write a js program to count total number of notes in given amount.

// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.

// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.

// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

// 17. Write a js program to find all roots of a quadratic equation.

// 18. Write a js program to calculate profit or loss.

// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit