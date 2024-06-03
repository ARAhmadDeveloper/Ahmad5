// <! -- ARRAYS -->
/*
var students = ["student1", "student2","student3", "student4", "student5"];

students.push("Umar");// ".push" is used to add something in the end of Array and there 
    // is no need to use index
console.log(".Push",students);

students.unshift('Umar');//".unshift" is used to add something in the start of Array
//Remember it will only used in Arrays

console.log("Unshift",students);


students.pop();// ".pop" is used to remove last value from the end of Array
    // and there is no need to use index
console.log(".Pop",students);

students.shift();//".shift" is used to remove value from the start of Array
    // and there is no need to use index
console.log(".Shift",students);

students.splice(2, 1);//".splice" is used to remove value from the middle and from anywhere you want of Array
//In this '2' is starting point and '1' is the number of elements which you want to remove
console.log(".Splice",students);


students.splice(2, 1, "Index");//Here is "Index" is used to add value where it remove
console.log(".Splice", students);

*/

/*
var listofstudents = ["Ali", "Waqas","Awais","Asim","Zubair"];

listofstudents.splice(0,0,"Umar");//Now it is act like ".Unshift"
console.log(listofstudents);

listofstudents.splice(listofstudents.length,0,"Ahmad");//Now it is Act like ".Push"

console.log("Act like .push",listofstudents);

listofstudents.splice(listofstudents.length-2);//Now it is Act like ".POp"
console.log("Act like .pop", listofstudents);

listofstudents.splice(0,1);//Now it is Act like ".shift"
console.log("Act like .shift", listofstudents);
*/


/*
var listofstudents = ["Ali", "Waqas","Awais","Asim","Zubair"];

var result = listofstudents.push(); //If we want to see that .push return the value or not
    //then we can use ".push" in this way
    //It return the number of Elements in Array
    console.log("Return .push",result);

var result1 = listofstudents.splice();//If we want to see that .splice return the value or not
//then we can use ".splice" in this way
//It return Empty brackets
console.log("check return splice 1", result1);

var result2 = listofstudents.splice(0,1);//If we want to see that .splice return the value or not
//then we can use ".splice" in this way
//It return only 'Ali' in brackets
console.log("check return splice 2", result2);


var result3 = listofstudents.splice();//If we want to see that .splice return the value or not
//then we can use ".splice" in this way
//It also return Empty brackets
console.log("check return splice 3", result3);
*/


/*
var listofstudents = ["Ali", "Waqas","Awais","Asim","Zubair"];

var result = listofstudents.slice(2,4);//It return "Awais and Asim"
console.log("sLice1", result);

var result1 = listofstudents.slice(1,1);//It return empty brackets
console.log("sLice2", result1);

var result2 = listofstudents.slice(1,2);//It return only "Waqas"
console.log("sLice2", result2);

var result3 = listofstudents.slice(1,3);//It return "Waqas and Awais"
console.log("sLice2", result3);

*/


// <!-- ARRAY LOOPS -->
//Array loops are only for arrays
//In these loops no need to give initial value,Condition and increment/Decrement
/*
var students = ["student1", "student2","student3", "student4", "student5"];

function getElement(){
    console.log("getElements function called", students);
}

students.forEach(getElement); //Here if we write any other value then error Occured
//This loop will execute all those elements which are in the Arrays

*/
/*
var students = ["student1", "student2","student3", "student4", "student5"];

function getElement(elements, index){
    console.log(elements,index);
}

students.forEach(getElement); //Here if we write any other value then error Occured

*/

var students = ["student1", "student2","student3", "student4", "student5"];

function getElement(elements, index){
    if(elements == "student2"){
        console.log("You are Pass");
    }
}

var result = students.forEach(getElement);