'use strict';

//create new array with only 4 char strings
var friends = ["Ryan", "Kieran", "Jason", "Yous"];
var bestFriends = [];

function myFriends(array) {
  for (var i = 0; i < array.length; i++) {
    if(array[i].length <= 4) {
      bestFriends.push(array[i]);
      console.log(bestFriends);
    }
  }
}

myFriends(friends);
//
// 'use strict';
//
// var friends = ["Ryan", "Kieran", "Jason", "Yous"];
//
// function filterFriends(value) {
//   return value <= 4;
// }
//
// var filteredFriends = ["Ryan", "Kieran", "Jason", "Yous"].filter(filterFriends);
//
// console.log(filteredFriends);
// //   for (var i = 0; i < array.length; i++) {
// //     if(friends[i].length <= 4) {
// //       bestFriends.push(friends[i]);
// //       // console.log(bestFriends);
// //     }
// //   }
// // }
//
// // myFriends(friends);
