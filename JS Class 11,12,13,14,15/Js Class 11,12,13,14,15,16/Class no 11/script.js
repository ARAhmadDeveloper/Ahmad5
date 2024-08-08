//In Todays lesson we will learn Arrays Loops
//1).ForEach loop   //This is called (HOF/HOM)Higher order Function/Method
//2).map loop
//3).filter loop


// <!-- forEach -->
/*
var students = ["Ali","Usman","Awais","Umar","Faisal"];

students.forEach(function sum(str , index , students){
    console.log(str.toUpperCase(), index , students);
});
*/




/*
function vowels(str){
    for(let char of str){
        console.log(char);
    }
}
vowels("AhmadRaza");
*/

//Let's see that if forEach method return what
/*
var newarr =  [32,123,12,415,161,127];
function sum(newarr){
    // console.log(new);
    return newarr;
}
var result = newarr.forEach(sum);
console.log("Result", result); // It return Undefined
*/



// <!-- map method -->

// write a js Program to find square of elements of array using forEach loop
/*
var arr = [12,13,14,15,16,17];
function square(arr){
    console.log(arr*arr);  /// Here we can use arr**2
}
arr.forEach(square);
*/

//>Map Loop / Map Method
//It is Most Similar to ,forEach method
//But a little different which is that
//Map method return a new Array but
//forEach method does'nt return anything and it don't create a new Array
/*
var arr = [32,123,12,415,161,127];
function print(ar){
    console.log(ar);
}
arr.map(print);
*/



//Let's return the Value
/*
var newarr =  [32,123,12,415,161,127];
function sum(newarr){
    // console.log(new);
    return newarr;
}
var result = newarr.map(sum);
console.log("Result", result);
*/

// <-- Important -->
/*
Map method is used when we need to create a new Array to using other
Arrays Values
*/



// <!-- Filter Method -->
//It is used to filter Array and Similar to Map method

//Let's we want to create new Array of Even numbers and get Even number 
// form the Other Array

// var otherarr =  [32,123,12,415,161,127];
// function evennumbers(otherarr){
//     if(otherarr % 2 === 0){
//         return otherarr;
//     }
// }

// var result = otherarr.filter(evennumbers);

// console.log("Result", result);

//Second Method to get Even Numbers
/*
var otherarr =  [32,123,12,415,161,127];
function evennumbers(otherarr){
        return otherarr%2==0;
}

var result = otherarr.filter(evennumbers);

console.log("Result", result);
*/


//Let's we want to create new Array of Odd numbers and get Odd number 
// form the Other Array
/*
var otherarr =  [32,123,12,415,161,127];
function evennumbers(otherarr){
    if(otherarr % 2 !== 0){
        return otherarr;
    }
}

var result = otherarr.filter(evennumbers);

console.log("Result", result);
*/
// Second Method to get Odd Numbers
/*

var otherarr =  [32,123,12,415,161,127];
function evennumbers(otherarr){
        return otherarr%2!=0;
}

var result = otherarr.filter(evennumbers);

console.log("Result", result);
*/



//This is only Fuction which has ability in which if we give arguments up the function

var result = addnumbers(10 , 20);
console.log(result);
function addnumbers(a , b){
    return a + b;
}