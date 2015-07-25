// function Base() {
// 	this.baseFunc = function(){
// 		console.log("base behavior");
// 	}
// }

// function Middle() {
// 	this.middleFunc = function() {
// 		console.log("middle behavior");
// 	}
// }

// Middle.prototype = new Base();

// function Final() {
// 	this.finalFunc = function() {
// 		console.log("final behavior");
// 	}
// }

// Final.prototype = new Middle();

// function test() {
// 	var obj = new Final();
// 	obj.baseFunc();
// 	obj.middleFunc();
// 	obj.finalFunc();
// }

// test();

// var obj = {};
// var ref = obj;

// obj .name = "objectA";
// console.log(ref.name);

// obj = ["one", "two", "three"];
// console.log(ref.name);
// console.log(obj.length);
// console.log(ref.length);

// var obj = {};

// var ref1 = obj;
// var ref2 = obj;

// obj.func = "function";

// console.log(ref1.func);
// console.log(ref2.func);

// function Shape(type){
// 	this.type = type || "rect";
// 	this.calc = function(){
// 		return "calc, "+this.type;
// 	}
// }

// var triangle = new Shape("triangle");
// console.log(triangle.calc());

// var circle = new Shape("circle");
// console.log(circle.calc());

// function Person(name) {
// 	var address = "The Earth";

// 	this.getAddress = function() {
// 		return address;
// 	}

// 	this.name = name;
// }

// Person.prototype.getName = function() {
// 	return this.name;
// }

// Person.prototype.setName = function(name) {
// 	this.name = name;
// }

// var jack = new Person("jack");
// console.log(jack.name);
// console.log(jack.getName());
// console.log(jack.address);
// console.log(jack.getAddress());

// jack.setName("xuheng");
// console.log(jack.name);
// console.log(jack.getName());

// function Person(name){
// 	var address = "The Earth";

// 	this.getAddress = function(){
// 		return address;
// 	}

// 	this.name = name;
// }

// Person.TAG = "javascript-core";
// console.log(Person.TAG);

// var EventListener = Base.extend({
// 	constructor : function(sense){
// 		this.sense = sense;
// 	},
// 	sense : null,
// 	handle : function(){
// 		console.log(this.sense+" occured");
// 	}
// });

// var Task = Base.extend({
// 	constructor : function(name){
// 		this.name = name;
// 	},
// 	name : null,
// 	listener : null,
// 	execute : function(){
// 		console.log(this.name);
// 	setListener : function(listener){
// 		this.listener = listener;
// 	}
// });

// var printing = new Task("printing");
// var printEventListener = new EventListener("printing");
// printing.setListener(printEventListener);
// printing.execute();

// var outter = function(){
// 	var x = 0;
// 	return function(){
// 		return x++;
// 	}
// }

// var a = outter();
// console.log(a());
// console.log(a());
// console.log(a());

// var b = outter();
// console.log(b());
// console.log(b());

// var mapped = [1, 2, 3, 4, 5].map(function(x){
// 	return x*2
// });
// console.log(mapped);

// Array.prototype.map = function(func){
// 	var len = this.length;
// 	console.log("len++++>",len);
// 	if(typeof func != "function"){
// 		throw new Error("argument should be a function");
// 	}

// 	var res = [];
// 	console.log("arg",arguments[1]);
// 	var obj = arguments[1];
// 	console.log("obj====>",obj);
// 	for (var i = 0; i < len; i++){
// 		res[i] = func.call(obj, this[i], i, this);
// 	}

// 	return res;
// }

// function double(x){
// 	return x*2;
// }

// var mapped = [1, 2, 3, 4, 5].map(double);
// console.log(mapped);

// [
// 	{id : "item1"},
// 	{id : "item2"},
// 	{id : "item3"}
// ].map(function(current){
// 	console.log(current.id);
// });

// var adder = function(num){
// 	console.log("num", num);
// 	return function(y){
// 		console.log("y", y);
// 		return num + y;
// 	}
// }

// var inc = adder(1);
// var dec = adder(-1);

// console.log(inc(99));
// console.log(dec(101));

// function factorial(n){
// 	if(n == 1){
// 		return 1;
// 	}
// 	else{
// 		return n * factorial(n-1);
// 	}
// }

// console.log(factorial(10));

function abs(x){ return x>0?x:-x;}
function add(a, b){ return a+b; }
function sub(a, b){ return a-b; }
function mul(a, b){ return a*b; }
function div(a, b){ return a/b; }
function rem(a, b){ return a%b; }
function inc(x){ return x + 1; }
function dec(x){ return x - 1; }
function equal(a, b){ return a==b; }
function great(a, b){ return a>b; }
function less(a, b){ return a<b; }
function negative(x){ return x<0; }
function positive(x){ return x>0; }
function sin(x){ return Math.sin(x); }
function cos(x){ return Math.cos(x); }


// function factorial(n){
// 	if(equal(n, 1)){
// 		return 1;
// 	}
// 	else{
// 		return mul(n, factorial(dec(n)));
// 	}
// }

// function factorial(n){
// 	function fact_iter(product, counter, max){
// 		if(great(counter, max)){
// 			return product;
// 		}else{
// 			fact_iter(mul(counter, product), inc(counter), max);
// 		}
// 	}
// 	return fact_iter(1, 1, n);
// }

// function factorial(n){
// 	return (function factiter(product, counter, max){
// 		if(great(counter, max)){
// 			return product;
// 		}
// 		else{
// 			return factiter(mul(counter, product), inc(counter), max);
// 		}
// 	})(1, 1, n);
// }

console.log(factorial(10));