//Object Literal

var literalObject = {
  name: 'Katie Jenkins',
  age: 32,
  secret: "I'm a SuperHero!",
  laugh: function (){
    console.log('hahaha! ' + this.secret);
  }
}

literalObject.laugh();

console.log(literalObject);

//from scratch

function getObject(){
  return {
    key: 'value'
  };
}

var newObj = getObject();
console.log(newObj);

//to find if one object is the exact same in memory
if(newObj === cloned){
  console.log(true);
} else {
console.log(false);
}

//clone an Object
var cloned = Object.assign({}, literalObject);
console.log('cloned Object ' , cloned);

//clone an Object and add new key/value
var clonedAdd = Object.assign({}, literalObject, newObj);
console.log('cloned & add to Object ' , clonedAdd);
