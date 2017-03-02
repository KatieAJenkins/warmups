'use strict';

//////SUBSTRING//////// ---> like SLICE
//can use slice, substring, startsWith, substr

//2 arguments of strings
//return true if first 2 letters are the same as the first two letters in the second strings

//string.substring(start at index, count up to and not including - ending index)
//CAPS matter!!

var string1 = "Wassup";
var string2 = "Wtit up";

function firstTwo(string1, string2) {

  if (string1.substring(0,1) === string2.substring(0,1)) {
    return true;
  }
    return false;
};

function firstTwo(string1, string2) {
  return string1.startsWith(string2.slice(0,2));
}

firstTwo(string1, string2);
// console.log(firstTwo(string1, string2));

//////TO UPPERCASE//////
//////TO LOWERCASE//////

//////MATCH//////
//use with RegExp!!
//can also give it a string
//g = global
//i = ignore all cases  ex. var patt1 = /is/gi;

var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match.
// The 'input' property is the original string that was parsed.

/////////INDEXOF///////
//gives you where the start index of the word you pass in

console.log(str.indexOf("information")); //9 bc the word information starts at index 9


/////////CONCAT/////////
//could take an array of strings and use spread operator to add strings together
console.log(string1.concat('string to add to string' , 'another string to add'));
