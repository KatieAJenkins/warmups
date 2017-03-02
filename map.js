'use strict';
//map = for loop

var array = ["this", "is", "practice", "for", "map"];
var arrayNums = [1,2,3,4,5];

function multiplyBy10(array) {
  //create new array
  var result = [];
  //return an array with each num multiplied by 10
  for(var i = 0; i < array.length; i++){
    result.push(array[i] * 10);
  }
  // console.log(result);
  return result;
}

// function multiplyBy10(array) {
//   var newArray = [];
//   return arrayNums.map(number){
//     return newArray.push(number * 10);
//   }
//   return newArray;
// }

//can call the argument anything...it is array[i] which is the value is passed in
//set the results of array.map to a variable so we can return it after the function is done running

function multiplyBy10(array) {
  var result = array.map(function(number){
    //must return a number from this function to be able to return it. Otherwise will get undefined.
    return number * 10;
  });
  // console.log(result);
  return result;
}

// console.log(multiplyBy10(arrayNums));

function add5(array){
  //return an array with each num increased by 5
  var result = array.map(function(number) {
    return number + 5;
  });
  // console.log(result);
  return result;
}

add5(arrayNums);

function add5(array){
  var result =  arrayNums.map(function(number){
    return number + 5;
  });
  // console.log(result);
  return result;
}

function countString(array){
  //return an array with the length of each word in the array
  //can also pass in index and the array as arguments
  var result = array.map(function(word , i, arr) {
    // console.log(word.length);
    return word.length;
  });
  // console.log(result);
  return result;
}

countString(array);
// console.log(countString(array));

function countString(array){
  //do not need to save into a result, will return
  return array.map(function(word) {
    return word.length;
  });
}

//strings are immutable!!!
function capitalize(array){
  //return an array where each word has the first letter capitalized

    return array.map(function(word){
      let wordArray = word.split('');
      wordArray[0] = word[0].toUpperCase();
      return wordArray.join('');
    });
}
capitalize(array);
console.log(capitalize(array));


////substring --> does not change original word
var myWord = "my word";
  myWord.substring(0,2);
  console.log();
