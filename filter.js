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
 //return an array with phrases containing 1 word
 
}
// console.log(onlyOneWord(array));

var users = [{ character: 'Superman', hero: true },
             { character: 'Sinestro', hero: false },
             { character: 'Wonder Woman', hero: true },
             { character: 'Lex Luthor', hero: false },
             { character: 'Ares', hero: false },
             { character: 'Green Lantern', hero: true }];

function findHeroes(array){
  //return an array with only heroes
}
// console.log(findHeroes(users));

function findHeroNames(array){
  //return an array with only heroes
}
// console.log(findHeroNames(users));
