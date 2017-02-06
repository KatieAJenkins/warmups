'use strict';

// What does this code do?
// Refactor the code so that it's easier to identify.

// Writing code that other programmers can quickly read and understand is one of the most important skills a programmer can develop. Reading obfustacted code is a good way to develop intuition for what makes code hard to read later.
//
// What makes good variable and function names?

console.log(decodeString('abcdefg'));
console.log(decodeString('iv'));
// console.log(decodeString('LiC'));

function decodeString(input) {

  //change input string to all lowercase
  var lowerCaseInput = input.toLowerCase();
  // console.log(lowerCaseInput);
	var returnValue = 0;

	for(var i = 0; i < lowerCaseInput.length; i++) {
    //loop through input array
		var v1 = decodeChar(lowerCaseInput[i]);
    console.log(v1);
		var v2 = decodeChar(lowerCaseInput[i+1]);

		if(v1 < v2) {
			returnValue -= v1;
		}
		else {
			returnValue += v1;
		}
	}

	return returnValue;

};

// function decodeChar(c) {
// console.log(c);
// 	if(c === 'i') {
// 		return 1;
// 	}
//
// 	if(c === 'v') {
// 		return 5;
// 	}
//
// 	if(c === 'x') {
// 		return 10;
// 	}
//
// 	if(c === 'l') {
// 		return 50;
// 	}
//
// 	if(c === 'c') {
// 		return 100;
// 	}
// };
