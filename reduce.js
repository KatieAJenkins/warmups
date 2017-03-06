'use strict';
//use < or > when sorting with letters/words
//use - or + when sorting numbers

/////Find Largest of Numbers///////
var numbers = [1,5,2,334,5,10];

// function findLargest(numbers){
  // var max = numbers[0];
  // for(var i = 0; i < numbers.length; i++) {
  //   if (numbers[i] > max){
  //     max = numbers[i];
  //   }
  // }
  // return max;
// }

// console.log(findLargest(numbers));

// function findLargest(numbers){
//   numbers = numbers.sort(function(x,y) {
//     return y - x ;
//   });
//     return numbers[0];
// }

function findLargest(numbers){
  return numbers.reduce(function(previous, current) {
    if(current > previous) {
      return current;
    }
      return previous;
  });
}

console.log(findLargest(numbers));
