'use strict';

//Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each. Write tests instead of console.logs
// plusOneSum([1, 2, 3, 4]); // 14

//INPUT - array
//OUTPUT - number

var array = [1, 2, 3, 4];
var newArray = [];
var sum = 0;

function plusOneSum (array) {
  //loop through array
  for (var i = 0; i < array.length; i++) {
    //add one to each number
    //push to new array
    newArray.push(array[i] += 1);
    // console.log(newArray);
  }
    for(var j = 0; j < newArray.length; j++) {
      //sum all numb
      sum += array[j];
      // console.log(sum);
    }
  console.log(sum);
  return sum;
};

plusOneSum(array);
