// var emailval = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

// console.log(emailval.test("kmustlinux@hotmail.com"));
// console.log(emailval.test("john.abruzzi@pl.kunming.china"));
// console.log(emailval.test("@invalid.com"));

// var variable = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

// console.log(variable.test("hello"));
// console.log(variable.test("world"));
// console.log(variable.test("2ain_"));
// console.log(variable.test("47466"));

// var pid = /^(\d{15}|\d{18})$/;
// var mphone = /\d{11}/;
// var phone = /\d{3,4}-\d{7,8}/;

// console.log(mphone.test("15822450374"));
// console.log(phone.test("010-99392333"));
// console.log(phone.test("0771-3993923"));
// console.log(pid.test("510723199102191594"));

// var pattern = /\w{4}(\d{4})(\w{2})/;
// var result = pattern.exec("yunn0871cg");
// console.log("city code = "+result[1]+", county code = "+result[2]);
// result = pattern.exec("shax0917cc");
// console.log("city code = "+result[1]+", county code = "+result[2]);

// var pattern = /(['"])[^\1]*\1/;

// console.log(pattern.test("'hello, world'"));
// console.log(pattern.test('hello, world'));

// var pattern = /^javascript/;
// console.log(pattern.test("java\njavascript"));
// pattern = /^javascript/m;
// console.log(pattern.test("java\njavascript"));

// var str = "life is very much like a mirror.";
// var result = str.match(/is|a/g);
// console.log(result);

// var str = "<span>Welcome, john</span>";
// var result = str.replace(/span/g, "div");
// result = str.replace(/(\w+),\s(\w+)/g, "$2, $1");
// console.log(str);
// console.log(result);

// var str = "john : tomorrow       :remove   :file";
// var result = str.split(/\s*:\s*/);
// console.log(str);
// console.log(result);

var str = "My life is great, don't you think?";
var index = str.search(/great/);
console.log(index);