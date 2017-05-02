'use strict';
//use < or > when sorting with letters/words
//use - or + when sorting numbers
// Reverse: Write a function using reduce that takes a string as an argument and returns the string in reversed order. Test if the string is the same reversed (Palindrome).
//

var str = "hello";
var str2 = "toot";

function reverse(word){
  return word.split('').reduce(function(prev,curr){
    // console.log(word);
    // console.log('prev ', prev);
    // console.log('curr ', curr);
    prev.unshift(curr);
    return prev;
  },[]).join('');
}

reverse(str);

// console.log(str === reverse(str), str, reverse(str));
// console.log(str2 === reverse(str2), str2, reverse(str2));

// Count It: Use reduce to count the letters in a string.
// Input: A string - like 'Hello World'
// Output: Letters and how often they show up. - d:1 e:1 h:1 l:3 o:2 r:1 w:1

function countIt(str){
  return str.toLowerCase().split('').reduce(function(prev,curr){
    //check of the key exists
    //if it does, then add 1 to the value
    if (prev[curr]) {
      prev[curr]+= 1;
    }else{
      //if it doesn't, then add the key/value pair
      prev[curr] = 1;
    }
    return prev;
  },{});
}

// console.log(countIt("Lala loopsy"));

// console.log(countIt("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."));

// Combine and Sort: Write a non-destructive function that takes two arrays and returns a new array with all items in alphabetical order.
// Input: Two arrays, ['cat', 'dog', 'fish', 'zebra'], ['lion', 'aardvark', 'gorilla']
// Output: A new array with all items in alphabetical order, ['aardvark', 'cat', 'dog', 'fish', 'gorilla', 'lion', 'zebra']

function combineAndSort(arr1,arr2){
  return arr1.concat(arr2).sort(function(x,y){
    return x[0].toLowerCase() > y[0].toLowerCase();
  });
}

// console.log(combineAndSort(['Cat', 'dog', 'fish', 'zebra'], ['lion', 'aardvark', 'gorilla']));

// Using reduce, write a function that takes an array of numbers and returns the largest number.

var numbers = [1,4,5,1,234,67,8];

function findLargest(numbers){
  // var max = numbers[0];
  // for (var i = 0; i < numbers.length; i++) {
  //   if(numbers[i] > max){
  //     max = numbers[i];
  //   }
  // }
  // return max;

  numbers = numbers.sort(function(x,y){
    return y - x;
  });
  return numbers[0];
  // return numbers.reduce(function(prev,curr){
  //   if (curr > prev) {
  //     return curr;
  //   }
  //   return prev;
  // })
}
// console.log(findLargest(numbers));


// Using reduce, write a function that takes an object/hash/dictionary of people (keys) and their subsequent ages as its argument, and then it returns the name of the oldest living person.

var people = [
  {name: "lyric", age: 9},
  {name: "frankie", age: 10},
  {name:"keene", age: 4},
  {name:"nick", age: 16}
]

function findOldest(people){
  // people = people.sort(function(prevPerson,currPerson){
  //   return currPerson.age - prevPerson.age;
  // });
  // return people[0].name;
  // var oldestPerson = people.reduce(function(prevPerson, currPerson){
  //   if (currPerson.age > prevPerson.age) {
  //     return currPerson;
  //   }
  //   return prevPerson;
  // });
  //
  // return oldestPerson.name;
  return people.reduce(function(totalAgeSoFar,currentPerson){
    // console.log("totalAgeSoFar:", totalAgeSoFar);
    totalAgeSoFar += currentPerson.age;
    return totalAgeSoFar;
  },10);
}

// console.log(findOldest(people));

/////3 Ways Find Largest of Numbers///////
var numbers = [1,5,2,334,5,10];

// function findLargest(numbers){
//   var max = numbers[0];
//   for(var i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max){
//       max = numbers[i];
//     }
//   }
//   return max;
// }

// console.log(findLargest(numbers));

// function findLargest(numbers){
//   numbers = numbers.sort(function(x,y) {
//     return y - x ;
//   });
//     return numbers[0];
// }

// function findLargest(numbers){
//   return numbers.reduce(function(previous, current) {
//     if(current > previous) {
//       return current;
//     }
//       return previous;
//   });
// }

// console.log(findLargest(numbers));

//reduce array of object
//take people and age, return name of oldest living person

/////sort
//9 minus 10 --> keeps the larger (current - previous)
//sort is expecting a positive or negative number and will do something based on what this value returns
//higher order function
//sum up things ==> accumulator function
//return --> pass this number back into function


////////Original Practice///////////
let arrayNumbers = [1,2,3,4];

// function sum(array){
//   var numSum = arrayNumbers.reduce(function(startingValue, currentValue){
//     console.log(array);
//     console.log('accumulator', startingValue);
//     console.log('currentValue ', currentValue);
//     console.log(startingValue + currentValue);
//     return startingValue + currentValue;
//   }, 10);
//   console.log('numSum', numSum);
// }
//
// sum(arrayNumbers);

// var numSum = arrayNumbers.reduce(function(startingValue, currentValue){
//   console.log('accumulator', startingValue);
//   console.log('currentValue ', currentValue);
//   console.log(startingValue + currentValue);
//   return startingValue + currentValue;
// }, 0);
//
// console.log('numSum ', numSum);

var numObject = arrayNumbers.reduce(function(newObject, currentValue){
  console.log('accumulator ', newObject);
  console.log('currentValue ', currentValue);
  //to set new key in Object: newObject[key]
  //to set value: newObject[key] = value;
  console.log('key in Object ' , newObject[currentValue]);
  console.log('emptyObject + key', newObject[currentValue] = currentValue + 1);
  return newObject;
}, {});

console.log(numObject);

var users =
  [
    { fullName: 'George Washington', email: 'george@us.gov' },
    { fullName: 'John Adams', email: 'john@us.gov' },
    { fullName: 'Thomas Jefferson', email: 'thomas@us.gov' },
    { fullName: 'James Madison', email: 'james@us.gov' }
  ];

             // { 'George Washington': 'george@us.gov',
             //   'John Adams': 'john@us.gov',
             //   'Thomas Jefferson': 'thomas@us.gov',
             //   'James Madison': 'james@us.gov' }

//get the value of the fullName/email from the 1st object
console.log(users[0].fullName);
console.log(users[0].email);

//get the 1st full object in the array
// console.log(users[0]);
users.reduce(function(usersObject, user){
  // console.log(user.email);
  console.log(usersObject[user.fullName] = user.email);
  return usersObject;
},
{});

//get the value of the object key
// for(var user in users){
//   //full array of objects
//   console.log('users ', users);
//
//   //get the index of the user
//   console.log('user ',user);
//
//   //get the object in index 1
//   console.log('users 1', users[1]);
//
//   //will give you each object --> this is how you look at each one in the array
//   console.log('users + user ', users[user]);
//
//   //get value out of keys ==> get obj[key] and use dot notation to get value
//   console.log(users[user].fullName);
//   console.log(users[user].email);
// }
