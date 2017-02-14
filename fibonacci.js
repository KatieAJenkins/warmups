'use strict';

// This function returns the fibonacci number of a given input. Arguments will always be a positive whole number. Example expected output is -
// fibonacci(0) ---> 0
// fibonacci(1) ---> 1
// fibonacci(8) ---> 21
// fibonacci(44) ---> 701408733
// fibonacci(80) ---> 23416728348467684
// Can you find what's wrong with this code and create a solution to fix it?

// function fib(n){
//   if( n < 2) {
//     return n;
//   }
//   else{
//     return fib(n-1) + fib(n-2);
//   }
// }
//
// // console.log(fib(10));
//
// //this is 2^n big O
// //doubling what you have to do for each step
// //write a recursive function that will build up an array
// //could iterate over with a for loop to build up the array
// //this function will run incredibly slow with larger numbers
//
// var numbers = [1,2,3,4,5,6,7,8,9,10];
// var fibonacciNumbers = [];
//
// function fib(array) {
//   var sum = 0;
//   for (var i = 0; i < array.length; i++){
//     // console.log(numbers[i]);
//     if(numbers[i] < 2){
//       console.log(numbers[i]);
//       // return numbers[i];
//       // return numbers[i];
//     }
//     else {
//       // console.log(numbers[i] - 1) + (numbers[i] -2);
//       fibonacciNumbers.push((numbers[i] - 1) + (numbers[i] -2));
//       sum = (numbers[i] - 1) + (numbers[i] - 2);
//       console.log(sum);
//       // console.log(fibonacciNumbers);
//     }
//   }
// }
//
// // console.log(fib(numbers));
// fib(numbers);

///////INSTRUCTIONS FOR CREATING fibonacciNumbers//////////////

'use strict';
/*
 There are two common approaches to this problem. The first is recursive the second
 is iterative.
*/
var n = 8;
// Recursive, meaning we call this function from inside itself.
function fibbonacciRecursive(n) {
    // Base case, if n is 0 or 1 just return 1.
    if(n <= 1) {
        return 1;
    }

    // Recursive step, return the sum of the previous two iterations
    return fibbonacciRecursive(n - 1) + fibbonacciRecursive(n - 2);
}


// Iterative, meaning we simple count up until we've found the
// answer we are looking for.
function fibbonacciIterative(n) {
    // Like the recursive version, there are still special cases
    if(n <= 1) {
        return 1;
    }

    // Otherwise, generate our 'starting' numbers.
    var fibNumber;
    var numberOne = 1;
    var numberTwo = 1;

    // And start counting up.
    // Note that we start at 1, since the 0th and 1st
    // numbers are handled as special cases.
    for(var i = 1; i < n; i++) {
        // Compute the fibbonacci number for i
        fibNumber = numberOne + numberTwo;

        // Now, the NEXT number will be computed based on our new number
        numberOne = numberTwo;
        numberTwo = fibNumber;
    }

    return fibNumber;

}


// Test function, checks the first few known values.
function testFib(fibFunc) {
    var fibTests = [1,1,2,3,5,8,13,21,34];
    var allPassing = true;

    for(var i = 0; i < fibTests.length; i++) {
        if(fibFunc(i) !== fibTests[i]) {
            allPassing = false;
            // console.log("failure for " + i + ".\n  Expected: " + fibTests[i] + "\n  Got: " + fibFunc(i) + "\n");
        }
    }

    if(allPassing) {
        // console.log("All tests passed");
    }
}

// Calls the test function
console.log("RECURSIVE");
testFib(fibbonacciRecursive);

console.log("\nITERATIVE");
testFib(fibbonacciIterative);
