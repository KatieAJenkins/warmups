'use strict';

// Rotate an array arr in place arr to the right by k steps.

// For example, with n = [1,2,3,4,5,6,7] and k = 3, the array is rotated to [5,6,7,1,2,3,4].
//Make sure not to return a copy of the array.

var array = [1,2,3,4,5,6,7];

function toRight(array, number){
  for(var i = 0; i < number; i++){
    array.unshift(array.pop());
  }
  console.log(array);
  return array;
}

toRight(array, 3);
