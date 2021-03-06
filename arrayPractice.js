'use strict';

//////////////////////////
////////METHODS///////////
//////////////////////////

// ---------------
// Create arrays
// ---------------

// Define a function named weekdays
//
// Return an array of strings that represent days of the week

//no semi colons after function declarations! (no var) //
function weekdays() {
  return ["Mon", "Tues", "Weds", "Thurs", "Fri"];
}

function weekdays() {
  return ["Mon", "Tues", "Weds", "Thurs", "Fri"];
}

// console.log(weekdays());

// ---------------
// Store and access values by index in arrays
// ---------------

// Define a function named simpleAccess that takes two arguments:
//    - a number reprenting an index in the array
//    - an array
// Return value of the array at the index specified by _number_
//
// Example: If you are given ['a', 'b', 'c'], 1 your function should return "b"

// function simpleAccess(array, index){
//   console.log(array.indexOf(index));
// }
//
// console.log(simpleAccess(['a', 'b', 'c'], 1));

function simpleAccess(array, index){
  // find value of index
  // console.log(array[index]);
  return array[index];
}

// console.log(simpleAccess(['a', 'b', 'c'], 1));

// Define a function named replaceValue that takes 3 arguments:
//    - an array
//    - a number reprenting an index in the array
//    - a string
// Change the value of the array at the specified index to the string
//
// Example: replaceValue(['a', 'b', 'c'], 1, 'dog') would change the input array ['a', 'dog', 'c']

//make sure the array is changing - must store array as variable, then console.log array after --> proving pass by reference

// function replaceValue (array, string, index){
//   console.log(myArray);
//   myArray[index] = string;
//   console.log(myArray);
// }
//
// var myArray = ["a" ,"b", "c"];
//
// replaceValue(myArray, "dog", 1);
// console.log(myArray);

var array = ["a" ,"b", "c"];

function replaceValue (array, string, index){
  // console.log(array[index]);
  array[index] = string;
}

replaceValue(array, "boy", 1);
// console.log(array);

// Define a function named swap that takes 3 arguments:
//  - an array
//  - index1 (a number)
//  - index2 (a number)
//
// Swap the values at index1 and index2
//
// Example: swap(['a', 'b', 'c', 'd'], 0, 2) would change the input array to ['c', 'b', 'a', 'd']
//
// NOTE: you'll need a temporary variable to accomplish this

// function swap(arr, index1, index2){
//   console.log(arr);
//   var temp;
//   temp = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = temp;
//   console.log(arr);
// }
//
// console.log(swap([0,1,2,3,4],2,4));

var array = [0,1,2,3,4];

function swap (array, index1, index2){
  var temp;

  temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  // console.log(array);

}

swap(array,2,4);

// ------------
// Find the position of an element using .indexOf()
// ------------

// Define a function named contains that takes 2 arguments:
//  - an array
//  - a value
//
// Swap the position of the two values in the array
//
// Example: contains(['a', 'b', 'c', 'd'], 'a') would return true
// Example: contains(['a', 'b', 'c', 'd'], 'z') would return false

function contains(array, value){
  // console.log(array.indexOf(value));
  array.indexOf(value);
}

contains(['a', 'b', 'c', 'd'], 'b');

// Define a function named swapValues that takes 3 arguments:
//  - an array
//  - value1 (an item from the array)
//  - value2 (another item from the array)
//
// Swap the position of the two values in the array
//
// Example: swapValues(['a', 'b', 'c', 'd'], 'b', 'd') would change the input array to ['a', 'd', 'c', 'b']

// function swapValues(array ,value1,value2){
//   var index1 = array.indexOf(value1);
//   var index2 = array.indexOf(value2);
//   var temp;
//
//   if(index1 === -1 || index2 === -1){
//     return "one of the numbers does not exist in the array"
//   }
//
//   temp = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = temp;
//   //can also do this without temp!
//   //arr[index1] = val2;
//   //arr[index2] = val1;
//
//   console.log(arr);
//   return arr;
// }

function swapValues (array, value1, value2){
  var index1 = array.indexOf(value1);
  // console.log(index1);
  var index2 = array.indexOf(value2);
  // console.log(index2);
  var temp;

  temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  // console.log(array);
  return array;
}


swapValues(['a', 'b', 'c', 'd'], 'b', 'd');


// Define a function named getSpeed that takes 2 arguments:
//  - an array of car names and their speeds, like this ["Chevy Tracker", 75, "BMW", 175, "Porsche", 210]
//  - a string representing a car name
//
// Return the speed that comes directly after that car name
//
// Example: getSpeed(["Chevy Tracker", 75, "BMW", 175, "Porsche", 210], "BMW") would return 175
// Example: getSpeed(["Chevy Tracker", 75, "BMW", 175, "Porsche", 210], "Porsche") would return 210

function getSpeed(array, string){
  //find if BMW is in list, if not return message
  if (array.indexOf(string) < 0){
    return "string must be in the array";
  }

  //find position of BMW
  //find next index (+1) to find speed
  var indexOfString = array.indexOf(string) + 1;
  // console.log(indexOfString);
  // console.log("speed is " , array[indexOfString]);
}

// console.log(getSpeed(["Chevy Tracker", 75, "BMW", 175, "Porsche", 210], "BMW"));


// Define a function named cellValue that takes 3 arguments:
//  - an array of field names such as ["first name", "last name", "age"]
//  - an array of values such as ["Joe", "Smith", 24]
//  - a string representing a field name, such as "first name"
//
// Return the value in the second array that corresponds to the position of the field name in the first array
//
// Example: cellValue(["make", "model", "year", "weight"], ["Chevy", "Nova", 1977, 1999], "model") would return "Nova"
// Example: cellValue(["make", "model", "year", "weight"], ["Chevy", "Nova", 1977, 1999], "year") would return 1977

function cellValue(array1, array2, string){
  var array1Index =  array1.indexOf(string);
  // console.log(array1Index);
  // console.log(array2[array1Index]);
}

cellValue(["make", "model", "year", "weight"], ["Chevy", "Nova", 1977, 1999], "model"); //Nove

cellValue(["make", "model", "year", "weight"], ["Chevy", "Nova", 1977, 1999], "year"); //1977

// -----------------
// // PUSH & UNSHIFT
// -----------------
//

// Define a function named sandwich that takes 2 arguments:
//  - an array
//  - a value
//
// Take the value and add it to both the front and back of the array
//
// Example: sandwich(['a', 'b'], 'z') would change the input array to ['z', 'a', 'b', 'z']
//
//PUSH --> adds element to end of array
//UNSHIFT --> adds element to beginning of array
//not able to string together two methods, mutates original array

//cannot chain commands .unshift(value).push() because .push value would be the product of .unshift(value) which is an index. So pushing the index onto the array wouldn't make sense.

let sammichArray = ['a', 'b'];

function sandwich(array, value){
  sammichArray.push(value);
  // sammichArray.unshift(value);
  // console.log('push ', sammichArray);
  // console.log('unshift ', sammichArray);
}

sandwich(['a', 'b'], 'z');

// -----------------
// // POP & SHIFT
// -----------------
//

// Define a function named sumEdges that takes 1 argument:
//  - an array
//
// Remove the first and last elements of the array, sum them
// Return the sum
//
// Example: sumEdges([3,4,5]) would change the input array to [4], and would return 8 (3+5)
//
// See shift, pop

function sumEdges(array){
  //remove first element from array
  var firstElement = array.shift();
  // console.log(firstElement);
  var lastElement = array.pop();
  // console.log(lastElement);
  return array.shift() + array.pop();
  // console.log(firstElement + lastElement);
  // return firstElement + lastElement;
}

sumEdges([3,4,5]);

function testPop(array) {
  array.pop();
  // console.log('test pop' ,array);
};

testPop([3,4,5]);
//
// ---------
// // JOIN
// ---------
//

//does not mutate original array

// Define a function named bassackwards that takes 2 arguments:
//  - an array
//  - a delimiter
//
// Return a string that contains all of the elements in the array, reversed, and separated by the delimiter
//
// Example: bassackwards([3,4,5], "-") would return "5-4-3"
//
// See docs for most appropriate method
//join also creates a string and then adds a delimiter to it

var bassArray = [3,4,5];

function bassackwards(array, delimiter) {
  // console.log(bassArray.reverse().join("-"));
  var newArray = bassArray.reverse().join(delimiter);
  // console.log(newArray);
  // console.log(newArray.toString());
}

//another method!
function bassackwards(array, delimiter){
  var newArr = []; //create this outside of loop bc you don't want to recreate every time
  for(var i =0; i < array.length; i++){
    //take the first item in the bassArray and add to beginning of the new list
    newArr.unshift(array[i]);
  }
    // console.log(newArr.join(delimiter));
}

bassackwards([3,4,5], "-");

// -----------------
// // SORT & REVERSE
// -----------------
//

//reverse --> mutates original array!
//sort --> mutates original array!

// Define a function named sortNumbers that takes  argument:
//  - an array
//
// Sort the array such that the numbers are sorted correctly
//
// Example: sortNumbers([1,11,2,22,56,7]) would return [ 1, 2, 7, 11, 22, 56 ]

////Sort nums ascending & strings alphabetically in array
////.sort() <-- will only sort strings
////.sort(a-b) <--use this to sort numbers **checkout docs!**

// var numbers = [1, 11, 2, 22, 56, 7];
// console.log(array.sort());

// function sortNumbers(array) {
//   console.log(array.sort());
  // var sortedArray = array.sort();
  // console.log(array.sort());
  // console.log(sortedArray);
  // console.log(array);
// }

function sortNumbers(numbers){
  return numbers.sort(function(a,b) {
    //looks at each value and compares them
    //based on what is returned (positive, negative, 0)
    return a - b;
  });
}

// sortNumbers(numbers);
// console.log(numbers);

//pass in parameter which is sorting function
//looks at every item in array and determines if current one is smaller than next one
//to sort backwards, a > b
array.sort((a,b) => {
  //a = current item in array
  //b = next item in array
  return a < b;
})

//reverse array after sorting it
//no parameters
array.sort().reverse();
// array.reverse();
// console.log(array);


// Define a function named gather that takes 3 arguments, all arrays:
//
// Return a single array that contains all elements of all arrays, sorted
//
// Example: gather(['z','y'], ['a'], ['p', 'q', 'd']) would return [ 'a', 'd', 'p', 'q', 'y', 'z' ]
//
// NOTE: do not use any kind of loop to accomplish this.  Find the appropriate method in the docs

//concat does not mutate array

var array1 = ['a' ,'b'];
var array2 = ['z' , 'y' ];
var array3 = ["t" , "s"];

function gather(arr1, arr2, arr3){

  var newArray = arr1.concat(arr2, arr3);
  // console.log(newArray);
  // console.log(newArray.sort());
}

gather(array1, array2, array3);

//concat doesn't change first array --> does not mutate
var array1 = [1,2,3];
var array2 = [4,5,6];
var array3 = [7,8,9];

//new array
var newArray = array1.concat(array2,array3);

//mutate original array
array1 = array1.concat(array2,array3);
// console.log(array1);

//can start with a blank array
// console.log([].concat(array1, array2, array3));

// ----------
// // FILTER
// ----------
//
//TODO
//1. takes one argument (people), a function to run for each element in array
//2. function passed to filter takes on argument (person), current element of array filter is in

const people = [
  {
    name: 'Brando',
    age: 35,
    gender: 'm',
    co: true
  },
  {
    name: 'Rynn',
    age: 2,
    gender: 'f',
    co: false
  },
  {
    name: 'Reed',
    age: 1,
    gender: 'm',
    co: false
  }
];

//find females
var females = people.filter(function(person){
  //only return objects that have key gender = f
  // console.log(person.gender === 'f');
  // console.log(person.name.gender === 'f');
  // console.log(females);
});
// console.table(females);


// Define a function named window that takes 3 arguments:
//  - an array
//  - a start index
//  - an end index
//
// Return an array that only contains elements from the given start index to the given end index
//
// Example: window([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 3, 6) would return [ 'd', 'e', 'f' ]

/////does not mutate the original array

// See slice
//array.slice();
//array.slice(begin);
//array.slice(begin, end);
//start = includes this number, end = does not include number

function window (array, start, end){
  console.log('slice ', array.slice(start,end));
  // return array.slice(start , end);
  // console.log(array);
}
window([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 3, 6);

// Define a function named paginate that takes 3 arguments:
//  - an array
//  - a page number
//  - a page size
//
// Return an array that contains only the elements that would fall in the given page / size
// If pageSize is smaller than 1, return the results for page 1

/////can use this function to set number of search results on a page!!!!!!

//
// Example: paginate([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 1, 2) would return [ 'a', 'b' ]
// Example: paginate([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 2, 2) would return [ 'c', 'd' ]
// Example: paginate([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 3, 2) would return [ 'e', 'f' ]
// Example: paginate([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 1, 5) would return [ 'a', 'b', 'c', 'd', 'e' ]

// function paginate(array, pgNumber, pgSize){
  // var numElements = array.length;
  // var resultArray = [];
  //
  // if(array.length){
  //   var elementsToDisplayPerPage = numElements / pgSize;
  // }
  //
  // for(var i = 0; i < elementsToDisplayPerPage; i++){
  //   console.log(resultArray.push(array[i]));
  // }
  // console.log(resultArray);

  // console.log(array.slice(pgNumber, pgSize));
  //
  // var numElements = arr.length;
  // var resultArray = [];
  //
  // if(numElements) {
  //   var start = pageSize * (pgNumber -1);
  //   console.log(start);
  // }

//   if(numElements){
//     var start = pageSize * (pgNumber -1);
//     var end = start + pageSize;
//   }
//   result = arr.slice(start, end);
// }
//
// paginate([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 1, 3)
//
// paginate([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 3, 2)


// Define a function named deleteBetween that takes 3 arguments:
//  - an array
//  - a starting value
//  - an ending value
//
// Remove all elements in the array that are between these two values
//
// Example: deleteBetween([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 'a', 'i') would return [ 'a', 'i' ]
// Example: deleteBetween([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' ], 'd', 'f') would return [ 'a', 'b', 'c', 'd', 'f', 'g', 'h', 'i' ]

////SPLICE
///start => the index to start at, includes number
///end => counts up this number and does not include this number
////// mutates the original array! takes these numbers out
///recursion - could send the modified array to the next function

var arr1 = [0,2,3,4];

// console.log('splice ', arr1.splice(2,2));

////Additional practice

var arr1 = [0,2,3,4];

// console.log(arr1[0]);
// console.log(arr1.unshift()); //returns blank array, no arguments
// console.log(arr1.shift()); //returns value of 1st index

//pass by reference --> two arrays that are the same will NOT equal each other because they are located in different place in memory!!! what ever changes you make, make them here in one location

//with == : array cohericed to a string --> then compared to the string --> this equals true

var arr1 = [1,2,3,4];
var arr2 = "1,2,3,4";

arr1 === arr2; //false
arr1 == arr2; //true


////PUSH
//mutates array!!
// console.log(arr1);
// console.log(arr1.push("hi")); //will return the length of the new array --> 5
// console.log(arr1);
