'use strict';

// removeBadPeople(people);
// // => [{name:'A', age: 20}, {name:'B', age: 30}];

var people = [{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}];

// function removeBadPeople (groups) {
// 	var result = [];
// 	for (var i = 0; i < people.length; i++){
// 		if(people[i].name){ //if the object has a name key, it will equal true and print answer
// 		result.push(people[i]); //will push whole object into array
// 		}
// 	}
// 	return result;
// }
// console.log(removeBadPeople(people));

// function sumAgesValid (people) {
// 	var result = 0;

// 	var goodPeople = removeBadPeople(people);
// 	for (var i =0; i < goodPeople.length; i++) {
// 	result = result + goodPeople[i].age; //results plus current person's age
// 	}
// 	return result;
// }
//  console.log(sumAgesValid(people));

// sumAgesValid(people);
// // => 50

// sumAgesAll(people);
// => 60

// function sumAgesAll(people) {
// 	var result = 0;
//
// 	for(var i = 0; i < people.length; i++) {
// 		if (!isNaN(people[i].age)) {
// 			result += people[i].age;
// 		}
// 	}
// 	return result;
// }
//
// sumAgesAll(people);

///////write a function that takes an array and returns an object with the keys as the array[i] and the value the number of times array[i] shows in the array

var array1 = ['dog' , 'cat', 'dog', 'horse'];

function countArray(array){
	var obj = {};
	for (var i =0; i < array.length; i++){
		if(array[i] === obj[i]){
			console.log('what');
		}
	}
	console.log(obj);

}


countArray(array1);
