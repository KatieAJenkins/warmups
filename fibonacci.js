'use strict';

// This function returns the fibonacci number of a given input. Arguments will always be a positive whole number. Example expected output is -
// fibonacci(0) ---> 0
// fibonacci(1) ---> 1
// fibonacci(8) ---> 21
// fibonacci(44) ---> 701408733
// fibonacci(80) ---> 23416728348467684
// Can you find what's wrong with this code and create a solution to fix it?

function fib(n){
  if( n < 2) {
    return n;
  }
  else{
    return fib(n-1) + fib(n-2);
  }
}

// console.log(fib(10));

//this is 2^n big O
//doubling what you have to do for each step
//write a recursive function that will build up an array
//could iterate over with a for loop to build up the array
//this function will run incredibly slow with larger numbers

var numbers = [1,2,3,4,5,6,7,8,9,10];
var fibonacciNumbers = [];

function fib(array) {
  for (var i = 0; i < array.length; i++){
    // console.log(numbers[i]);
    if(numbers[i] < 2){
      // console.log(numbers[i]);
      // return numbers[i];
      return numbers[i];
    }
    else {
      // console.log(numbers[i] - 1) + (numbers[i] -2);
      fibonacciNumbers.push((numbers[i] - 1) + (numbers[i] -2));
      console.log(fibonacciNumbers);
    }
  }
}

// console.log(fib(numbers));
fib(numbers);
