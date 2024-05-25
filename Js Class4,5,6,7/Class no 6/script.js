// //write a JS program of marks of students 
// // if the marks <50 the fail
// // if the marks in between 50and 60 then C grade
// // if the marks in between 60 and 70 then B grade 
// // if the marks in between 70 and 80 then A grade
// // if the marks greater then 80 then A+ grade

// var marks = 677;
// if(marks < 50){
//     console.log("You are fail");
// }
// else if(marks > 50 && marks < 60){
//     console.log("congrates you are pass with C grade");
// }
// else if(marks > 60 && marks < 70 ){
//     console.log("Congrates you are pass with B grade");
// }
// else if(marks > 70 && marks < 80){
//     console.log("Congrates you are pass with A grade");
// }
// else if(marks >= 80 && marks <= 100){
//     console.log("Congrates you are pass with A+ grade");
// }
// else{
//     console.log("Marks did not cross 100");
// }

// /* using 'else if' is better than using only 'if' because 
// in statment which uses if only than in this statment checks all 
// the conditions whenever its true or false 
// And 
// in 'else if' statment its check the statment when the true 
// answer is find than it leave to check the remainder statments
// that's why the use of 'else if' is better than 'if'*/


// /* SWITCH Statement */
// // switch is used for checking the cases 
// // it is same like if statment but fast than if 
 
// var key = 1;
// switch(key){
//     case 0:
//         console.log("Case 0 is running");
//         break;
//     case 1:
//         console.log("case 1 is running");
//         break;
//     case 2:
//         console.log("case 2 is running");
//         break;
//     default:
//         console.log("default is running");
// }



// var weekdays = 3;
// switch(weekdays){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("default is running");
// }

/* If we need to check comparison between things we can use 
both 'if' and 'switch' statments but 'switch' statment is 
faster than 'if' statement*/


// <!--WHILE LOOP-->

/*IF we want to run loop means one line run multiple times then 
we will use "WHILE LOOP"*/
//Suppose i want to write my name 10 times

/*
var i = 1;
while(i <= 10){     //In this i is less than 10 this true this loop will running whil the condition is false
console.log("Ahmad Raza" + i);
i++;   //If we forget to add i++ then loop will not be stop that's why we alsways use i++
}
*/




/* Draw a table of 2 in JS program*/

/*
var i = 1;

while(i <= 10){
    console.log("2 * " + i + " = " + 2 * i);
    i++;
}
*/

// Now we will draw a table of 23 at  20
/*
var a = 1;
while(a < 20){
    console.log(" 23 * " + a + " = " + 23 * a);
    a++;
}
*/