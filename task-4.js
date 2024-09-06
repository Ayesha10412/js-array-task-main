// ### 4. Checking if it's an Array

// **Instructions:**

// 1. Create different variables, each containing either an array or a non-array value.

// 2. Now use isArray to check if each variable is an array.

// 3. Print a message to the console indicating whether each variable is an array or not.

let books=['C', 'C++', 'javascript', 'FEDS', 'python'];
let age=22;
let name='Ayesha';
 if(Array.isArray(books)){
    console.log("It's an array");
 }
 
 else if(Array.isArray(age)){
    console.log("It's an array");

 }

 else if(Array.isArray(name)){
    console.log("It's an array");

 }
 else{
    console.log("It's not array.");
 }