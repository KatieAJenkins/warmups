'use strict';

/////////////////////////
//////////MAP////////////
/////////////////////////

//map = for loop through arrays

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

let testArr = [['Jennie', 'Zinko'], ['Amy', 'Marzulla'], ['Dakota', 'Jones']];
//[{first: 'Jennie', last: 'Zinko'}, {first: 'Amy', last: 'Marzulla'}, {first: 'Dakota', last: 'Jones'}]

function arrayToObject (array) {
  let personArray = [];
  return array.map(function(name) {
    var personObject = {};
    // console.log(name);
    // console.log(name[0]);
    personObject.first = name[0];
    // console.log(personObject.first);
    personObject.last = name[1];
    // console.log(personObject.last);
    // console.log(personObject);
    personArray.push(personObject)
    // console.log(personArray);
    return personArray;
  });
}

arrayToObject(testArr);

let prop = 'first';

let testArr1 = [
  {first: 'Kilian', middle: 'Lee', last: 'Jornet'},
  {first: 'Anna', last: 'Frost'}
];

let testArr2 = [
  {first: 'Emilie', last: 'Forsberg'},
  {first: 'Rob', last: 'Krar'}
];

// function someObjsContainProp (arr, prop) {
//   return arr.some(function(arrProp){
//     console.log(arrProp);
//     console.log(prop);
//     // console.log(prop === arrProp);
//     if(arrProp.hasOwnProperty(prop)){
//       console.log(true);
//       return true;
//     }
//       console.log(false);
//       return false;
//   });
// }


// function someObjsContainProp (arr, prop){
//   for(var i = 0; i < arr.length; i++){
//     if(arr[i].hasOwnProperty(prop)){
//       console.log(true);
//       return true;
//     }
//   }
//   return false;
// }

// someObjsContainProp(testArr2, prop);
// console.log(someObjsContainProp(testArr1, prop));

////Object has own property  objContainsProp: (arr, prop) => {
// function objContainsProp(arr, prop){
//   for (var i = 0; i < arr.length; i++){
//     if(!arr[i].hasOwnProperty(prop)){
//       return false;
//     }
//   }
//   return true;
// }

// function objContainsProp(arr, prop){
//   return arr.every(function(arrProp) {
//     console.log(arrProp);
//     if(arrProp.hasOwnProperty(prop)){
//       console.log(true);
//       return true;
//     }
//       console.log(false);
//       return false;
//   });
// }
//
// console.log(objContainsProp(testArr2, prop));

var string = 'middle';

/////////find matching strings in array
function stringMatch (arr, str) {
 return testArr2.filter(function(obj) {
   if(obj.hasOwnProperty(str)) {
     console.log(true);
     return true;
   }
   console.log(false);
   return false;
 });
}

console.log(stringMatch(testArr2, string));


////substring --> does not change original word
var myWord = "my word";
  myWord.substring(0,2);
  console.log();//my
