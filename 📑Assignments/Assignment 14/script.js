// <!-- Array and matrix programming exercises -->

// 1. Write a js program to read and print elements of array.
/*
var Firstarray = ['a','s','d','g','w'];
for(var i = 0;i < Firstarray.length;i++){
    console.log(Firstarray[i]);
}
    */


// 2. Write a js program to print all negative elements in an array.
/*
var arr = [12,-23,43,-55,-76,-34,342];

for(var i = 0;i < arr.length;i++){
    if(arr[i] < 0){
        console.log(arr[i]);
    }
}
*/

// 3. Write a js program to find sum of all array elements. 
/*
var sumarr = [1,2,3,4,5];
var sum = 0;
// function sumofall(){
for(var i = 0 ; i < sumarr.length ; i++){
    sum = sum + sumarr[i];
    }
    console.log(sum);
// return sum;

// }
// var result = "Sum is " + sum;
// sumofall();

*/


// 4. Write a js program to find maximum and minimum element in an array.
/*
var arr = [34,4, 1,677, 30, ,99,-565,0, 12, 11, 45];

function findmaxmin(array){
    var max = arr[0];
    var min = arr[0];
    for(var i = 0;i < arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return {max,min};
}
var result = findmaxmin(arr);
console.log(result);
*/



// 5. Write a js program to find second largest element in an array.
/*
var arr = [34,23,786,381,24,23,12,43,5];
function findlargest(array){

    var firstlargestnumber = arr[0];
    var secondlargestnumber = arr[0];
    for(var i = 0;i < arr.length;i++){
        if(arr[i] > firstlargestnumber){
            secondlargestnumber = firstlargestnumber;
            firstlargestnumber = arr[i];
        }
        else if(arr[i] > secondlargestnumber){
            secondlargestnumber = arr[i];
        }
    }
    return {firstlargestnumber, secondlargestnumber};
}

var result = findlargest(arr);
console.log(result);
*/


// 6. Write a js program to count total number of even and odd elements in an array.
/*
var arr = [1,2,3,4,5,6,7,8,9,10];
function evenandodd(array){
    var evencount = 0;
    var oddcount = 0;
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 == 0){
            evencount++;
        }
        else{
            oddcount++;
        }
    }
    return {evencount , oddcount};
}
var result = evenandodd(arr);
console.log(result);
*/




// 7. Write a js program to count total number of negative elements in an array.
/*
var arr = [2,-23,-23,-454,56,-4,5,-34,-3,-12];
function negativeelement(array){
    var countnegative = 0;
    for(var i = 0; i < arr.length;i++){
        if(arr[i] < 0){
            countnegative++;
        }
    }
    return {countnegative};
}
var result = negativeelement(arr);
console.log(result);

*/

// 8. Write a js program to copy all elements from an array to another array.
/*
var Firstarray = ["Ahmad", "Ali","Husnain","Usman"];
var secondarray = ["Abu Hurairah", "Naveed Sarwar"];
var result = Firstarray.concat(secondarray);
//  Firstarray.push(secondarray);
//  console.log(Firstarray);
console.log(result);
*/


// 9. Write a js program to insert an element in an array.
/*
var array = ["Ahmad ", "Naveed","Ali","Asim"];
array.push(45,"Usman");   //.push is used add element in an Array
console.log(array);
*/
// 10. Write a js program to delete an element from an array at specified position.
/*
var array = ["Ahmad ", "Naveed","Ali","Asim"];
array.shift(1); //Here 1 is the index number which you want to delete
console.log(array);
*/
// 11. Write a js program to count frequency of each element in an array.

// 12. Write a js program to print all unique elements in the array.

// 13. Write a js program to count total number of duplicate elements in an array.
/*
var Firstarray = ["Ahmad", "Naveed", "Hassan","Babar",45,3,23];
var secondarray = ["Babar","Hassan","Ali","Usman","Ahmad",32,2,45];
var result = 0;
for(var i = 0;i < Firstarray.length;i++){
    for(var j = 0;j < secondarray.length;j++){
        if(Firstarray[i] == secondarray[j]){
            result++;
            // break;
        }
    }
}
console.log(result);
*/

// 14. Write a js program to delete all duplicate elements from an array.

var Firstarray = ["Ahmad", "Naveed", "Hassan","Babar",45,3,23];
var secondarray = ["Babar","Hassan","Ali","Usman","Ahmad",32,2,45];
var result = 0;


// 15. Write a js program to merge two array to third array.

// 16. Write a js program to find reverse of an array.

// 17. Write a js program to put even and odd elements of array in two separate array.

// 18. Write a js program to search an element in an array.

// 19. Write a js program to sort array elements in ascending or descending order.

// 20. Write a js program to sort even and odd elements of array separately.

// 21. Write a js program to left rotate an array.

// 22. Write a js program to right rotate an array.




// Submit: https://forms.gle/RrqSqhVntWQpPyFV7