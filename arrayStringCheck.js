'use strict';

// Check that all items in an array are strings
// and that they all only contain the same vowels.

//var goodInput = [ 'amalgam', 'zoom' ]; //using this array would return true
//var badInput = [ 'zoom', 'oligopoly' ]; //using this array would return false

var goodInput = [ 'amalgam', 'zoom' ];
var badInput = [ 'zoom', 'oligopoly' , 4];


function stringCheck(array) {
  //declare vowel string
  let vowels = ["a", "e", "i", "o", "u"];

  //loop through array
  for(var i = 0; i < array.length; i++){
    //check array[i] if type of string
    // console.log(array[i]);
    // console.log(typeof array[i]);
    if(typeof array[i] === 'string'){
      //if true, return true
      for(var j = 0; j < vowels.length; j++){
        // console.log(vowels[j]);
      let stringToArray =  array[i].split('');
      // console.log(stringToArray);
        for(var k = 0; k < stringToArray.length; k++){
          // console.log('array[k] ' , stringToArray[k]);
          // console.log('array[j] ', vowels[j]);
          if(stringToArray[k] === vowels[j]){
            console.log("vowels match");
            return "vowels match!";
          }
          else {
            console.log("no match");
            return "no match";
          }
        }
      }
      return true;
      console.log(true);
    } else {
  //if false, return false
    console.log(false);
    return false;
    }
  }
}

// stringCheck(goodInput);
console.log(stringCheck(goodInput));

// stringCheck(badInput);
console.log(stringCheck(badInput));
