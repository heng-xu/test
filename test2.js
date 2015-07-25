// var base = {
// 	name : "base",
// 	getInfo : function(){
// 		return this.id + ":" + this.name;
// 	}
// }

// var ext1 = {
// 	id : 0,
// 	__proto__ : base
// }

// var ext2 = {
// 	id : 9,
// 	__proto__ : base
// }

// console.log(ext1.id);
// console.log(ext1.getInfo());
// console.log(ext2.id);
// console.log(ext2.getInfo());

// function Task(id){
// 	this.id = id;
// }

// Task.prototype.status = "STOPPED";
// Task.prototype.execute = function(args){
// 	return "execute task_"+this.id+"["+this.status+"]"+args;
// }

// var task1 = new Task(1);
// var task2 = new Task(2);

// task1.status = "ACTIVE";
// task2.status = "STARTING";

// console.log(task1.execute("task1"));
// console.log(task2.execute("task2"));

// (function(name){
// 	console.log("hello, "+name);
// })("heng");

// function func(handle, message){
// 	var id = 0;
// 	function doNothing(x){
// 		return x;
// 	}
// 	handle(message);
// }

// func(console.log, "hello");

// var topone = "top-level";

// (function outter(){
// 	var middle = "mid-level";

// 	(function inner(){
// 		var bottom = "bot-level";

// 		console.log(topone+">"+middle+">"+bottom);
// 	})();
// })();

// var attribute = "attribute";

// console.log(attribute);
// console.log(this);

var global = this;
global.name = "heng";
var tom = {
	name : "Tom",
	home : "desine",
	getInfo : function(){
		console.log(this.name + ", from "+this.home);
	}
};

tom.getInfo();

var jerry = {
	name : "Jerry",
	getInfo : tom.getInfo
}

jerry.getInfo();

global.getInfo = tom.getInfo;
global.getInfo();
console.log(global);