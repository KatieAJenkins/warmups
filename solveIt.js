'use strict';
// mentally step through the code (do not execute this in a console, etc.)
// write and show your work (inputs and outputs at each stage)
// rename the function so that its intent is clear
//
// function solveIt(num)
// {
//   if (num < 0) {
//       return -1;
//   }
//   else if (num == 0) {
//       return 1;
//   }
//   else {
//       return (num * solveIt(num - 1));
//   }
// }
// var result = solveIt(-1);
// var result = solveIt(0);
// var result = solveIt(8);

//INPUTS: number
//OUTPUTS: number
//LOGIC: pass a number into function
function checkIfNegative(num) {
  //INPUT: number
  //OUTPUT: boolean
  //LOGIC: compare number to see if it is less than 0, if true return -1
  if (num < 0) {
      return -1;
  }
  //INPUT: number
  //OUTPUT: boolean
  //LOGIC: compare number to see if it is strictly equal to 0, if true return 1
  else if (num == 0) {
      return 1;
  }
  //INPUT: number
  //OUTPUT: number
  //LOGIC: if number does not meet above conditions, take number minus 1, check if that number is greater or equal to 0. if not, subtract 1 from the number. multiply that number by itself and return answer.
  else {
      return (num * checkIfNegative(num - 1));
  }
}

var result = checkIfNegative(-1);
// INPUT: number (-1)
// OUTPUT: number (-1)

var result = checkIfNegative(0);
//INPUT: number (0)
//OUTPUT: number (1)

var result = checkIfNegative(8);
//INPUT: number (8)
//OUTPUT: number (56)
