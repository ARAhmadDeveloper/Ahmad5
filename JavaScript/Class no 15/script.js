//<!-- Import/Export -->
// import(PI) 
// console.log(PI);

//Incomplete



//<!-- Types of Errors -->
//1) Syntax Error
//2) Logical Error
//3) Runtime Error


// <!-- Runtime Error -->
/*
Runtime error is difficult to find for compiler and Developers
we can find it by Code
*/
const ABC = "AHMAD";
ABC();
try{
    console.log("Try Function");
    ABC();
}catch Error{

}
finally{
    console.log("Finally")
}