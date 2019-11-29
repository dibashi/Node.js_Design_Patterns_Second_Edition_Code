"use strict";

function DelayedGreeter(name) {
  this.name = name;
}

DelayedGreeter.prototype.greet = function() {
  setTimeout( (function cb() {
    console.log('Hello ' + this.name);
  }).bind(this), 500);
};


var a = function(){

};
var b =a
console.log(a === b);
var greeter = new DelayedGreeter('World');
greeter.greet(); // will print “Hello World”
