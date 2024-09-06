// ### 3. Checking Array Membership with ‘includes’

// **Instructions:**

// 1. Create an array of books containing different book.

// 2. Use the includes method to check if the array contains a javascript book.

// 3. Print a message to the console indicating whether the element is present in the array or not.

let books=['C', 'C++', 'javascript', 'FEDS', 'python'];
console.log(books.includes('javascript'));

if(books.includes('javascript')){
    console.log("Book is Present");
}
else{
    console.log("Book is not Present");
}
