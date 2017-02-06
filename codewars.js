'use strict';

var friends = ["Ryan", "Kieran", "Jason", "Yous"];
var bestFriends = [];

function myFriends(array) {
  for (var i = 0; i < array.length; i++) {
    if(friends[i].length <= 4) {
      bestFriends.push(friends[i]);
      // console.log(bestFriends);
    }
  }
}

myFriends(friends);
