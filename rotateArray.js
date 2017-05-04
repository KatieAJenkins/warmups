'use strict';

// Rotate an array arr in place arr to the right by k steps.

// For example, with n = [1,2,3,4,5,6,7] and k = 3, the array is rotated to [5,6,7,1,2,3,4].

var array = [1,2,3,4,5,6,7];

// function toRight(array, number){
//   //loop through array number of times you want to rotate
//     // array.unshift(array.pop());
//   for(var i = 0; i < number; i++){
//     //pop the last number
//     //unshift popped number to the front
//     console.log(array.unshift(array.pop()));
//   }
//   console.log(array);
//   return array;
// }

toRight(array, 3);

//not mutating original array
//log array before
//log array after
//pass number is as the number of times you want to move the number over

function toRight(array, number){
  for(var i = 0; i < number; i++){
    // console.log(array);
    // console.log(array.pop(array[i]));
    var popped = array.pop(array[i]);
    // console.log(popped);
    array.unshift(popped);
    // console.log(array);
  }
}
