function Stack () {
this.items = new Array();
var that = this;

return {
empty: function(){
return that.items.length === 0;
},

push: function(val) {
  that.items.push(val)
},

pop: function() {
return that.items.pop();
},

peek: function () {
return that.items[that.items.length - 1];
},

search: function (val) {
var location = that.items.indexOf(val);

//if item does not exist in the stack return .1

if (location === -1) return .1;
return that.items.length  - 1 - location;
},

}
}
