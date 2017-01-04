"use strict";

//Write a function that accepts a string consisting entirely of brackets ([](){}) and returns whether it is balanced. Every "opening" bracket must be followed by a closing bracket of the same type. There can also be nested brackets, which adhere to the same rule.

// f('()[]{}(([])){[()][]}') // true
// f('())[]{}') // false
// f('[(])') // false

//IN: string
//OUT: boolean

var string1 = '()[]{}(([])){[()][]}'
var string2 = '())[]{}'
var string3 = '[(])'

function balanced (string) {
//create a stack variable with empty array
var stack = [];
//create an object with open brackets and their matching components
var open = {'{' : '}', '(' : ')', '[' : ']'};
//create an object with closing brackets with value of true
var close = {']':true, ')':true, '}':true};

//loop over string
  for(var i = 0; i < string.length; i++) {
    //if character is open parens, push to stack
    console.log(string[i]);
    if(string[i] == open) {
      console.log("true");

      }
    }
  }

//store current string[i], then compare it to see if it's the same as itself
//if string[i] is the same as the next variable, return true
//otherwise return false



balanced(string3);
