// Sample Code of factorial

function fact(num){
  if(num === 1){
    return 1;
  } else {
    return num * fact(num-1);
  } 
}

console.log("fact(5) === ", fact(5)); // 120

=============================
  Exercises
=============================
//1. Write a function which takes an integer and returns the sum of the integer.
//Example: sum(5) // 5 + 4 + 3 + 2 + 1 ==> 15

function sum(num){
  // Your Code Here!!
}

console.log("sum(5) === ", sum(5)); // 45


// 2. Write a function which take 2 numbers (base and exp) and return exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 4 x 4 x 4 ==> 64

function exponent(base, exp){
  // Your Code Here!!
}

console.log("exponent(7) === ", exponent(7)); // 13


//3. Write a function which takes an integer n greater than or eqaul to 0
//and returns the Fibonacci number located at index n of the Fibonacci sequence.
// Example:
// [0,1,1,2,3,5,8,13,21]
// fib(5); // 5
// fib(7); // 13
// fib(3); // 2

function fib(num){
  // Your Code Here!!
}

console.log("fib(7) === ", sum(7)); // 13
