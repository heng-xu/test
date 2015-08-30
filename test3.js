// var add = function(a, b){
// 	return a + b;
// };

// var myObject = {
// 	value: 0,
// 	increment: function(inc){
// 		this.value += typeof inc === 'number' ? inc : 1;
// 	}
// };

// myObject.increment(2);
// console.log(myObject.value);

// myObject.double = function(){
// 	var that = this;

// 	var helper = function(){
// 		that.value = add(that.value, that.value);
// 	};

// 	helper();
// };

// myObject.double();
// console.log(myObject.value);

// var Quo = function(string){
// 	this.status = string;
// };
// Quo.prototype.get_status = function(){
// 	return this.status;
// };

// var myQuo = new Quo("confused");
// console.log(myQuo.get_status());

// var array = [3, 4];
// var sum = add.apply(null, array);
// console.log(sum);

// var statusObject = {
// 	status: "A-OK"
// };

// var status = Quo.prototype.get_status.apply(statusObject);
// console.log(status);

// var sum = function(){
// 	var i, sum = 0;
// 	for(i=0; i<arguments.length; i++){
// 		sum += arguments[i];
// 	}
// 	return sum;
// };

// console.log(sum(3, 2, 1, 4));

// var add = function(a, b){
// 	if(typeof a !== 'number' || typeof b !== 'number'){
// 		throw {
// 			name: 'TypeError',
// 			message: 'add needs numbers'
// 		};
// 	}
// 	return a + b;
// };


// var try_it = function(){
// 	try{
// 		add("seven");
// 	}catch(e){
// 		console.log(e.name + ": " + e.message);
// 	}
// };

// try_it();

// Function.prototype.method =  function(name, func){
// 	this.prototype[name] = func;
// 	return this;
// };         

// Number.method('integer', function(){
// 	return Math[this < 0 ? 'ceil' : 'floor'](this);
// });

// console.log((-10/3).integer());

// var quo = function(status){
// 	return {
// 		get_status: function(){
// 			return status;
// 		}
// 	};
// };

// var myQuo = quo("amazed");
// console.log(myQuo.get_status());

var Mammal = function(name){
	this.name = name;
};

Mammal.prototype.get_name = function(){
	return this.name;
};

Mammal.prototype.says = function(){
	return this.saying || "";
};

var myMammal = new Mammal("Herb the Mammal");
var name = myMammal.get_name();
console.log(name);

var Cat = function(name){
	this.name = name;
	this.saying = "meow";
};
// Cat.prototype = new Mammal();
// Cat.prototype.purr = function(n){
// 	var i, s = '';
// 	for(i=0; i<n; i++){
// 		if(s){
// 			s += '-';
// 		}
// 		s += 'r';
// 	}
// 	return s;
// };
// Cat.prototype.get_name = function(){
// 	return this.says() + ' ' + this.name + ' ' + this.says();
// };



Function.method('inherits', function(Parent){
	this.prototype = new Parent();
	return this;
});

var Cat = function(name){
	this.name = name;
	this.saying = 'meow';
}
.inherits(Mammal)
.method('purr', function(n){
	var i, s = '';
	for(i=0; i<n; i++){
		if(s){
			s += '-';
		}
		s += 'r';
	}
	return s;
})
.method('get_name', function(){
	return this.says() + ' ' + this.name + ' ' + this.says();
});

var myCat = new Cat("Henrietta");
var says = myCat.says();
var purr = myCat.purr(5);
var name = myCat.get_name();
console.log(name);