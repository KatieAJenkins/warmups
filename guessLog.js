'use strict';

function changeArray(array){
  //will push 4 to end of array
  array.push(4);
}

var arr = [1,2,3];
changeArray(arr);
console.log(arr); //var array = [1,2,3,4]

function changeNum(num){
  num = num + 1;
}

var num = 5;
changeNum(num);
console.log(num); //5
