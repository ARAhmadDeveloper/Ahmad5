//  <!-- FUNCTION -->
/*
console.log("Line no 1");
console.log("Line no 2");
console.log("Line no 3");
function myFunction() {  //'myFunction' is name you set it yourself
    console.log("Line no 4");//It will not execute while we call it by its name
}
console.log("Line no 5");
console.log("Line no 6");
console.log("Line no 7");
myFunction();
console.log("Line no 8");
console.log("Line no 9");
console.log("Line no 10");
myFunction();

*/



//Prompt / .log
/*
it is also a funtion it is called built in function because it created
by Javascript
//abc();     // The name of function
It is called custom Funtion because we can create or set it 
*/

/*
function sum(){
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
}

sum();
sum();

*/



/*
function abc(a , b){  //Here '(a, b)' called function definition
    var c = a + b;
    console.log(c);
}


abc(10,20);  //Here we can set the value of a and b and we can change it

abc(100,200);  //It is calling function

abc(1000,2000); //  It is calling function

*/

/*
function abc(a = 10 , b = 20 , c=30){  //Here these are default values and we can change them
    var d = a + b + c;
    console.log(d);
}

abc();// If we don't give any value then it will show default values
abc(100);//If we give only one value then it will consider it the value of a and the values of b and c are default values
abc(50, 100);//If we give only one value then it will consider it the value of a and b and the values of c are default values

abc(100, 200, 300);
*/

/*
The ...args syntax is used to represent an indefinite number of 
arguments passed to the function. It collects these arguments into
an array named args.
*/

/*
function sum(...args){
    var a = args[0];
    var b = args[1];
    var c = args[2];
    var d = args[3];
    var e = args[4];
    var f = args[5];
    var g = a + b + c + d + e + f;
    console.log(g);
}

sum(1,2,3,4,5,6);

*/

/*
function abc(a , b ,c){
    var d = a + b + c;
    console.log(d);
    return d;  //It will return the value of d and we can store it in a variable and we can use one time in one function
}


var output = abc(10 , 20 , 30);
console.log("OutPut", output);

*/

/*
var num = "123";  //String value
console.log("Num",typeof num, num);
var out = parseInt(num);//It is use to convert string to Number
console.log("Out", typeof out, out);

*/