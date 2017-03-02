'use strict';

//filter --> returns TRUE or FALSE
//give it a function, will return true => element will get cut and put into an array. If flase => will not be passed into array


var numArr = [-5,-2,0,1,4];
function onlyPositive (array) {
  //return an array containing only positive nums
  return array.filter(function(number) {
    //this is the test that will push something into the array if it returns true
    //empty strings are falsey
    return number > 0; //this will return true
    //if you wanted negative numbers use <
    //if you want 0 use >=
  });
}
console.log(onlyPositive(numArr));

function onlyEven (array) {
  //return an array containing only even nums
  return array.filter(function(number) {
    return number % 2 === 0;
  });
}
console.log(onlyEven(numArr));

var array = ["Angelica", "Eliza", "and Peggy"];
function onlyOneWord (array) {
  return array.filter(function(string) {
    return !string.includes(" ");
  });
}
console.log(onlyOneWord(array));

var users = [{ character: 'Superman', hero: true },
             { character: 'Sinestro', hero: false },
             { character: 'Wonder Woman', hero: true },
             { character: 'Lex Luthor', hero: false },
             { character: 'Ares', hero: false },
             { character: 'Green Lantern', hero: true }];

function findHeroes(array){
  //return an array with only heroes
  return array.filter(function(user) {
    //access the object properties
    return user.hero;
  });
}
console.log(findHeroes(users));

function findHeroNames(array){
  //return an array with only heroes
  //example of chaining 2 higher order functions
  return array.filter(function(user) {
    return user.hero;
  })
  .map(function(obj) {
    return obj.character;
  });
}
// console.log(findHeroNames(users));

//using reduce (previousValue, currentValue)
//takes 1. function as argument as well as 2. starting point
//previous will be empty array on first iteration, what is my starting point ==> put the empty array at the end of the function
//return previous every time we are looping
//current = this object
function findHeroNames(array){
  return array.reduce(function(previous, current) {
    if (current.hero === true) {
      previous.push(current.character);
      return previous;
    }
    else {
    console.log(previous);
    return previous;
    }
  },

  ["this is starting point!"]); //[] is the 2nd argument to reduce function
}

console.log(findHeroNames(users));
