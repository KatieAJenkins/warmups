'use strict';

///////////////////////////////
//////////ARRAY LOOPS//////////
///////////////////////////////

//Loop through 2 arrays and count the number of values that these 2 arrays share

var array1 = [1 ,3 ,'cat', 7, 'horse'];
var array2 = ['horse' , 3, 9 , 10, 1];

//initialize counter variable
//1st loop through array1 = i
//on 1st loop through array1, 2nd loop through array2 = j
//compare array1[i] with array2[j]
//count number of values that are the same

function countValues (array1, array2){
  var counter = 0;

  for (var i = 0; i < array1.length; i++){
    console.log('array1[i] ', array1[i]);
    // console.log('array2[i] ', array2[i]);
      for(var j = 0; j < array2.length; j++) {
      // console.log('array1[i] 2nd loop ', array1[i]);
      console.log('array2[j] ', array2[j]);

        if(array1[i] === array2[j]){
          counter++;
          console.log('counter increments', counter);
        }
      }
  }
  console.log('counter total ' , counter);
  return counter;
}

countValues(array1, array2);
