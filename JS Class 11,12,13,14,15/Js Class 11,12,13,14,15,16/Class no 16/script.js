// <!-- DOM Manipulation -->


// console.log(document);

var doc = document.getElementById("Hello");
// console.log(doc);

var className = document.getElementsByClassName("para");
// console.log("Paragraph"+ className);

var tagName = document.getElementsByTagName("p");
// console.log(tagName[0]);


var doc2 = document.getElementById("Hello");
// doc2.innerHTML = "Hello Batch-07";


// var num = parseInt(prompt("Type Nmyber"));
// if(num % 2 == 0){
//     doc2.innerHTML = "Num is Even";

//     // doc2.style.color = "green";
// }
// else{
//     doc2.innerHTML = "Num is Odd";
// }


// <!-- Event Listner -->

// function onClickListner(){
//     alert("Clicked");
// }



// function onClickListner(){
//     var userNameInput = document.getElementById("userName");
//     console.log(userNameInput);
//     var userNameInputValue = parseInt(userNameInput.value);
//     console.log(userNameInputValue);
// }


localStorage.setItem("UserName", "Ahmad Raza");
var val = localStorage.getItem("UserName");
console.log(val);
//If we want to clear/Delete storage then
// localStorage.clear;