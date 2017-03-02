'use strict';

//////SUBSTRING//////// ---> like SLICE
//can use slice, substring, startsWith, substr

//2 arguments of strings
//return true if first 2 letters are the same as the first two letters in the second strings

//string.substring(start at index, count up to and not including - ending index)

var string1 = "Wassup";
var string2 = "Wtit up";

function firstTwo(string1, string2) {
  // //look at first 2 of string 1
  // var string1Index0 = string1.charAt(0);
  // console.log(stringIndex0);
  // var string1Index1 = string1.charAt(1);
  // //look at second 2 of string 2
  // var string2Index0 = string2.charAt(0);
  // var string2Index1 = string2.charAt(1);
  // //compare if they are ===

  if (string1.substring(0,1) === string2.substring(0,1)) {
    return true;
  }
    return false;
};

function firstTwo(string1, string2) {
  return string1.startsWith(string2.slice(0,2));
}

firstTwo(string1, string2);
console.log(firstTwo(string1, string2));
