// Functions
// 1. Write a js program to find cube of any number using function.
/*
function abc(){
    var a = 3;        //This is number now we need to find its Cube
    var cube = a * a * a;
    console.log("Cube of ",a , "is " + cube);

}

abc();
*/



// 2. Write a js program to find diameter, circumference and area of circle using functions.
/*
function sum(){
    var radius = 20;  //We can find the diameter only when the radius is given
    console.log("The Radius of the Circle is " + radius);
    var diameter = 2 * radius;
    console.log("The diamter of the Circle is " + diameter);
    var circumference = 2 * 3.14159 * radius  //Here we can use C = Pi * diameter
    console.log("The Circumference of the Circle is " + circumference);
    var Area = 3.14159 * radius * radius;  //Here we can use Area = Pi/4 * diameter * diameter
    console.log("The Area of a Cirle is " + Area);

}

sum();

*/

// 3. Write a js program to find maximum and minimum between two numbers using functions.
/*
function bet(a , b){
    if(a > b){
        console.log(a + " is greater than " + b);
    }
    else if(a < b){
        console.log(b + " is greater than " + a);
    }
    else if(a == b){
        console.log(a + " and " + b + " both are Equal");
    }
    else{
        console.log("Please write Digits");

    }
}

bet(20 , 20);
*/



// 4. Write a js program to check whether a number is even or odd using functions.
/*
function check(a){
    if(a % 2 == 0){
        console.log(a + " is Even Number");
    }
    else if(a % 2 == 1){
        console.log(a + " is Odd Number");
    }
    else{
        console.log(a + " is not a Number");
    }
}

check(10);
*/


// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.
// First we check weather a number is prime or not
/*
var checkprime = 15;
function check(){
    if(checkprime < 2){
        console.log(checkprime + " is not a prime Number");
    }
    for(var i = 2;i < checkprime;i++){
        if(checkprime % i == 0){
         var result =  checkprime + " is not a Prime Number";
         break;
        }
        else{
         var result =  checkprime + " is a Prime Number";
        }
    }
    console.log(result);
}
check();
*/

//Now let's check weather a function is ArmStrong or not
//Condition is the Given number have only three Digits
/*
var checkArmstrong = 153;
function not(){
    var check =  checkArmstrong;
    
    var sum = 0;
    while(check > 0){
        var Digit = check % 10;
        // console.log("Digit " + Digit);
        sum = sum + (Digit**3);
        // console.log("Sum " + sum);
        check = parseInt(check / 10);
    }
    if(sum == checkArmstrong){
        console.log(`${checkArmstrong} is an ArmStrong Number`);
    }
    else{
        console.log(`${checkArmstrong} is not an ArmStrong Number`);
    }
}

not();
*/

//Now let's check weather a function is ArmStrong or not
//Here you can check any number
/*
var checkArmstrong =  '1563';                //prompt("Please Enter Number");
var anynumber = checkArmstrong.length;
    // alert(anynumber);
function not(){
    var check =  checkArmstrong;
    
    var sum = 0;
    while(check > 0){
        var Digit = check % 10;
        // console.log("Digit " + Digit);
        sum = sum + (Digit**anynumber);
        // console.log("Sum " + sum);
        check = parseInt(check / 10);
    }
    if(sum == checkArmstrong){
        console.log(`${checkArmstrong} is an ArmStrong Number`);
    }
    else{
        console.log(`${checkArmstrong} is not an ArmStrong Number`);
    }
}

not();

*/

//Now Let's find Perfect Number Using function
/*
var perfectnum = 28;
var sum = 0;
function checkperfect(){
    for(var i = 1;i <= perfectnum / 2;i++){
        if(perfectnum % i == 0){
            sum += i;
        }
    }
    if(sum == perfectnum){
        console.log(perfectnum + " is Perfect Number");
    }
    else{
        console.log(`${perfectnum} is Not a Perfect Number`);
    }
}
checkperfect();
*/

// 6. Write a js program to find all prime numbers between given interval using functions.
/*
var isprime = prompt("Enter Number");

function check(){
    if(isprime < 2){
        console.log("Please Enter a Number Which is Greater than 1");
    }
    else{
    console.log("Prime Number 2 to " + isprime + " are");
    for(var i = 2;i <= isprime;i++){
        var checkprime = 1;
        for(var j = 2;j <= i / 2;j++){
            if(i % j == 0){
                checkprime = 0;
                break
            }
        }
        if(checkprime == 1){
            console.log(i);
        }
    }
}
}

check();
*/





// 7. Write a js program to print all strong numbers between given interval using functions.

// 8. Write a js program to print all Armstrong numbers between given interval using functions.

// 9. Write a js program to print all perfect numbers between given interval using functions.

// 10. Write a js program to find power of any number using function.
/*
function power(){
    var a = 3;
    var b = 3;
    var c = a ** b;
    console.log(c);
}
power();
*/

// 11. Write a js program to print all natural numbers between 1 to n using function.
/*
function natural(){
    
    var n = 1; 
    if(n >= 1){
    console.log("Natural Numbers From " + 1 + " to " + n + " are ");
    for(var i = 1;i <= n;i++){
        
        console.log(i);
        
    }
}
else{
    console.log("Please Enter a Number Greater than 1");
}
}

natural();
*/


// 12. Write a js program to print all even or odd numbers in given range using function.
/*
function print(){
    var x = 22;  // type here given range
    console.log("Even Numbers From " + 0 + " to " + x + " are ");
    for(var i = 0;i <= x;i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }
    console.log("Odd Number From 0 to ",x," are ");
    for(var j = 0;j <= x;j++){
        if(j % 2 == 1){
        console.log(j);
        }
    }
}
print();
*/

// 13. Write a js program to find sum of all natural numbers between 1 to n using function.
/*
function sum(){
    var f = 80;
   
    var sum = (f*f + f) / 2;
console.log("Sum of All Natural Numbers From "+ 1 + " to "+ f + " is " + sum);
console.log("And Natural Numbers are; ")
for(var i = 0;i <= f;i++){
        console.log(i);
    }
} 
sum();
*/

// 14. Write a js program to find sum of all even or odd numbers in given range using function.

// 15. Write a js program to find reverse of any number using function.
/*
function abc(){
    var n = 20;
    console.log("Reverse of ",n," is ");
    for(var i = 0;n >= i;n--){
        console.log(n);
    }
}
abc();
*/

// 16. Write a js program to check whether a number is palindrome or not using function.

// 17. Write a js program to find sum of digits of a given number using function.

// 18. Write a js program to find factorial of any number using function.

// 19. Write a js program to generate nth Fibonacci term using function.

// 20. Write a js program to find GCD (HCF) of two numbers using function.

// 21. Write a js program to find LCM of two numbers using function.

// 22. Write a js program to display all array elements using function.
/*
var arr = [10,20,30,40,50];
function abs(arr){
    console.log("Array Elements");
    for(var i = 0;i < arr.length;i++){
        console.log(arr[i]);
    }
}
abs(arr);
*/

// 23. Write a js program to find sum of elements of array using function.
/*
var a = [50,60,70,80,90];
function array(a){
    var sum = 0;
    for(var i = 0;i < a.length;i++){
        sum += a[i];   // or sum = sum + a[i]
    }
    return sum;
}
var result = array(a);
console.log("Sum of All Elements in Array is : ",result);
*/


// 24. Write a js program to find maximum and minimum elements in array using function.
/*
var num = [3,45,78,2,1,8,454,-3,-2];
function findmaxmin(num){
    var min = max = num[0];
    for(var i = 1;i < num.length;i++){
if(max < num[i]){
    max = num[i];
}
else if(min > num[i]){
    min = num[i];
}
    }
    return {min , max};
}
var result = findmaxmin(num);
console.log(result)
*/







// Submit: https://forms.gle/WF1QTfFJwXyeVYz99