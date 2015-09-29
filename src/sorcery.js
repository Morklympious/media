// Partial Application Function
function forge(fn) {
	var args = Array.prototype.slice.call(arguments, 1);

	return function() {
		var innerArgs = Array.prototype.slice.call(arguments);
		return fn.apply(null, args.concat(innerArgs));
	}
}

// A Simple Array Maker
function toArray(obj) {
	return Array.prototype.slice.call(obj);
}

function isArray(array) {
	return array.constructor === Array;
}

function isString(string) {
	return string.constructor === String;
}

// A Specific Filter Function
function allExcept(one, collection) {
	return collection.filter(function(item){
		return item !== one;
	});
}

// Finding one thing in a collection
function contains(one, collection) {
	return collection.indexOf(one) > -1;
}

// Splitting a string apart, rejoining the string
function splitJoin(collection, splitter, join) {
	if(collection)
		return joinStrings(splitStrings(collection, splitter), join);
}

// Splitting a string into an array
// Return the toString if it's just an array of one. 
function splitStrings(collection, splitter) {
	if(collection)
	return collection.split(splitter);
	
}

// Joining an Array of Strings
function joinStrings(collection, join) {
	if(collection) 
		return collection.join(join);
}

// A jQuery -> DOM Conversion.
function domNode(n) {
	var jQuery = jQuery || false;

	if(jQuery)
		return n.get(0);
	
	return n;
} 

function extend(iObj) {
  var fObj = iObj || {};

  for(var i = 1, len = arguments.length; i < len; i++) {
    var cObj = arguments[i];

    if (!cObj) continue;

    for (var key in cObj) {

      if(cObj.hasOwnProperty(key)) {

          fObj[key] = (typeof cObj[key] === 'object') 
          ? extend({}, cObj[key]) : cObj[key];
      }
    }
  }
  return fObj;
};


module.exports = {
	forge: forge, 
	toArray: toArray,
	isArray: isArray,
	allExcept: allExcept,
	contains: contains,
	splitJoin: splitJoin,
	joinStrings: joinStrings,
	domNode: domNode,
	extend: extend
}






