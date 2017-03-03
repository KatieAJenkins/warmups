'use strict';

/////////////////////////////
/////////METHODS/////////////
/////////////////////////////

//////SUBSTRING//////// ---> like SLICE
//can use slice, substring, startsWith, substr

//2 arguments of strings
//return true if first 2 letters are the same as the first two letters in the second strings

//string.substring(start at index, count up to and not including - ending index)
//CAPS matter!!

var string1 = "Wassup";
var string2 = "Wait up";

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

// console.log(found);

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

// console.log(str.indexOf("information")); //9 bc the word information starts at index 9


/////////CONCAT/////////
//could take an array of strings and use spread operator to add strings together
// console.log(string1.concat('string to add to string' , 'another string to add'));


////////TRIM///////
//removes whitespace from both ends of string
//creates a new string without whitepace
//cannot mutate at string, would need to set is as a variable

var string3 = '    whitespace   ';

// console.log(string3.trim());

///////REMOVE SPACES IN MIDDLE AND JOIN ALL TOGETHER/////
// console.log(str.split(" ").join(""));

///////REPLACE//////////
//string.replace (regex or substring, newSubstring or function)
//like a loop

//will only replace the first space --> use RegEx to replace all the spaces with nothing
// console.log(str.replace(" ", ""));

////////REPEAT///////
///string.repeat(number of times of repeat, count)

// console.log(str.repeat(3));

//////INCLUDES//////
//string.includes(search value, optional: position to start searching from)// returns boolean

// console.log(str.includes("Chapter"));


///////REVERSE STRING///////////
//Reverse a string and check if it is the same as the original string --> pallendrome check!
//result = array
//splits string into array of substrings on delimeter

var word = "racecar";

function reverseString(string) {
  ////split string into individual characters in array
  ////["r" , "a" , "c" ]
  var splitWord = string.split("");
  // console.log(splitWord);
  ////reverse the array of strings
  var reversedWord = splitWord.reverse();
  // console.log(reversedWord);
  ////join array back into string -->default delim is ,
  ////join back on spaces
  var joined = reversedWord.join("");
  // console.log(joined);

  if(joined === word){
    // console.log(true);
    return true;
  }
  // console.log(false);
    return false;
}

function reverseString(){
  var reversed = word.split("").reverse().join("");
  // console.log(reversed);
  if(reversed === word){
    // console.log(true);
    return true;
  }
    // console.log(false);
    return false;
}

reverseString(word);

/////FIND ONLY VOWELS/////
//Take an array of strings. Return an array of only the vowels in the strings

//loop through array
//array[i] will be string to remove all but vowels from
//return new array with only vowels
//filter, match, substring

var arrayStrings = ['horse' , 'monkey' , 'cat']; // ['o', 'e', 'o', 'e', 'a']

function vowelsOnly (array){
 return array.map(function(word){
   return word
    .split('')
    .filter((letter) => {
      if(letter.match(/[AEIOU]/gi)){
        return true;
      }
        return false;
    })
    .join('');
  });
}

vowelsOnly(arrayStrings);
console.log(vowelsOnly(arrayStrings));
