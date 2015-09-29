(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var sorcery = __webpack_require__(1);

	  var domNode = sorcery.domNode;

	  // is(media, "paused") ?
	  function is(m, action) {
	    return !!prop(domNode(m), action);
	  }

	  // has(media, "currentTime") property?
	  function has(m, property) {
	    return is(m, property);
	  }

	  // prop(media, "ended")
	  // prop(media, "currentTime", 50)
	  function prop(media, property, value) {

	    if(media && !property) return media;

	    if(media)
	      return !!(~~value) ? media[property] = value : media[property];
	  }

	  // perform(media, "play") === media.play();
	  function perform(m, command) {

	    if(has(m, command))
	      domNode(m)[command]();

	  }
	  
	  function pause(m) {
	    perform(m, 'pause');
	  }

	  function play(m) {
	    perform(m, 'play');
	  }

	  function toggle(m) {
	    is(m, 'paused') ? play(m) : pause(m);
	  }


	  module.exports = {
	    perform: perform,
	    toggle: toggle,
	    is: is,
	    has: is,
	    prop: prop,
	    pause: pause,
	    play: play
	  }





/***/ },
/* 1 */
/***/ function(module, exports) {

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








/***/ }
/******/ ])
});
;