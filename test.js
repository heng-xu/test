// function Base(name){
// 	this.name = name;
// 	this.getName = function(){
// 		return this.name;
// 	}
// }

// function Child(id){
// 	this.id = id;
// 	this.getId = function(){
// 		return this.id;
// 	}
// }

// Child.prototype = new Base("base");

// var c1 = new Child("child");

// console.log(c1.getId());
// console.log(c1.getName());

// var jack = {
// 	name : "jack",
// 	age : 26
// }

// var abruzzi = {
// 	name : "abruzzi",
// 	age : 26
// }

// function printName(){
// 	return this.name;
// }

// console.log(printName.call(jack));
// console.log(printName.call(abruzzi));

// function Address(street, xno){
// 	this.street = street || 'huang hai lu';
// 	this.xno = xno || 134;
// 	this.toString = function(){
// 		return "street : " + this.street + ", No : " + this.xno;
// 	}
// }

// function Person (name, age, addr){
// 	this.name = name || 'unkonwn';
// 	this.age = age;
// 	this.addr = addr || new Address(null, null);
// 	this.getName = function(){
// 		return this.name;
// 	}
// 	this.getAge = function(){
// 		return this.age;
// 	}
// 	this.getAddr = function(){
// 		return this.addr.toString();
// 	}

// }

// var jack = new Person('jack', 26, new Address('beijing lu', 231));
// var abruzzi = new Person('abruzzi', 24);

// console.log(jack.getName());
// console.log(jack.getAge());
// console.log(jack.getAddr());

// console.log(abruzzi.getName());
// console.log(abruzzi.getAge());
// console.log(abruzzi.getAddr());

// function point(left, top){
// 	this.left = left;
// 	this.top = top;
// 	return {x: this.left, y: this.top};
// }

// var pos = point(3, 4);

// console.log(pos.x);
// console.log(pos.y);

// var add = new Function("x", "y", "return(x+y)");
// console.log(add(4, 6));

// function p(){
// 	console.log("invoke p by ()");
// }

// p.id = "func";
// p.type = "function";
// console.log(p);
// console.log(p.id+":"+p.type);
// console.log(p());

// function adPrint(str, len, option){
// 	var s = str || "default";
// 	var l = len || s.length;
// 	var o = option || "i";

// 	s = s.substring(0, l);
// 	switch(o){
// 		case "u":
// 			s = s.toUpperCase();
// 			break;
// 		case "l":
// 			s = s.toLowerCase();
// 			break;
// 		default:
// 			break;
// 	}

// 	console.log(s);
// }

// adPrint("hello, world");
// adPrint("hello, world", 5);
// adPrint("hello, world", 5, "l");
// adPrint("hello, world", 5, "u");

// function sum(){
// 	var result = 0;
// 	for(var i = 0, len = arguments.length; i < len; i++){
// 		var current = arguments[i];
// 		if(isNaN(current)){
// 			throw new Error("not a number exception");
// 		}
// 		else{
// 			result += current;
// 		}
// 	}

// 	return result;
// }

// console.log(sum(1,2,3));
// console.log(sum("xu"));

// var str = "global";
// function scopeTest(){
// 	console.log(str);
// 	var str = "local";
// 	console.log(str);
// }
// scopeTest();

// var jack = {
// 	name: "jack",
// 	age: 32
// }
// var abruzzi = {
// 	name: "abruzzi",
// 	age: 23
// }

// function printName(){
// 	return this.name;
// }

// console.log(printName.call(jack));
// console.log(printName.apply(jack));

// printName.apply(jack, ["Jack Set."]);
// console.log(printName.apply(jack));

// printName.call(abruzzi, "John abruzzi");
// console.log(printName.call(abruzzi));


// function add(x, y){
// 	return x + y;
// }

// var a = 0;
// a = add;
// var b = a(2, 3);
// console.log(b);

// var obj = {
// 	id: "obj1"
// }

// obj.func = add;
// console.log(obj.func(2, 3));

// function adPrint2(str, handler){
// 	console.log(handler(str));
// }

// function up(str){
// 	return str.toUpperCase();
// }

// function low(str){
// 	return str.toLowerCase();
// }

// adPrint2("Hello, World", up);
// adPrint2("Hello, World", low);

// function currying(){
// 	return function(){
// 		console.log("curring");
// 	}
// }

// console.log(currying()());

// var array = new Array(1, 2, 3, 4, 5);
// console.log(array.length);
// array.length = 3;
// console.log(array.length);
// console.log(array);

// var stack = new Array();

// stack['first'] = 3.14;
// stack['second'] = "okay then";
// stack['third'] = new Date();

// for(var item in stack){
// 	console.log(typeof stack[item]);
// }

// var array = [];

// array.push(1);
// array.push(2);
// array.push(3);

// array.push("four");
// array.push("five");

// array.push(3.14);

// var len = array.length;
// for (var i = 0; i < len; i++){
// 	console.log(array.pop());
// }
// console.log(array.length);

// var array = ["one", "two", "three", "four", "five"];

// var str1 = array.join(",");
// var str2 = array.join("|");

// console.log(str1);
// console.log(str2);

// var array = ["one", "two", "three", "four", "five"];
// var another = ["this", "is", "another", "array"];
// var another2 = ["yet", "another", "array"];

// var bigArray = array.concat(another, another2);
// console.log(bigArray);

// function sorter(a, b){
// 	return a - b;
// }
// var array = [10, 23, 44, 58, 106, 235];
// array.sort(sorter);
// console.log(array);

// var array = ["one", "two", "three", "four"];
// console.log(array.length);
// delete array[2];
// console.log(array);
// console.log(array.length);

// Array.prototype.remove = function(from, to) {
// 	var rest = this.slice((to || from) + 1 || this.length);
// 	this.length = from < 0 ? this.length + from : from;
// 	return this.push.apply(this, rest);
// 	};

// var array = ["one", "two", "three", "four", "five", "six"];
// console.log(array);
// array.remove(0);
// console.log(array);
// array.remove(-1);
// console.log(array);
// array.remove(0, 2);
// console.log(array);

// Array.prototype.useless = function(){}
// var array = [1, 2, 3, 4];
// for(var item in array){
// 	console.log(item);
// 	console.log(array[item]);
// }

// var outter = [];
// function clouseTest () {
// 	var array = ["one", "two", "three", "four"];
// 	for(var i = 0; i < array.length; i++){
// 		var x = {};
// 		x.no = i;
// 		x.text = array[i];
// 		x.invoke = function(no){
// 			return function(){
// 				console.log(no);
// 			}
// 		}(i);

// 		outter.push(x);
// 	}
// }

// clouseTest();
// console.log(outter[0].invoke());
// console.log(outter[1].invoke());
// console.log(outter[2].invoke());
// console.log(outter[3].invoke());
// for(var j=0; j < outter.length; j++){
// 	console.log(outter[j]);
// }

// var person = function(){
// 	var name = "default";

// 	return {
// 		getName : function(){
// 			return name;
// 		},
// 		setName : function(newName){
// 			name = newName;
// 		}
// 	}
// }();

// console.log(person.name);
// console.log(person.getName());
// person.setName("abruzzi");
// console.log(person.getName());

function Person(){
	var name = "default";

	return {
		getName : function(){
			return name;
		},
		setName : function(newName){
			name = newName;
		}
	}
};

var john = Person();
console.log(john.getName());
john.setName("john");
console.log(john.getName());

var jack = Person();
console.log(jack.getName());
jack.setName("jack");
console.log(jack.getName());