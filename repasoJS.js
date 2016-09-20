var vl = "Hello world";
console.log(vl);
var vl = "Hello wordl 2";
console.log(typeof vl);

var vl = "Hello world";
console.log(typeof vl);
var vl = 12345;
console.log(typeof vl);

var vl;
console.log(typeof vl);
var vl = 12345;
console.log(typeof vl);

var vl;
vl = null;
console.log(typeof vl);
var vl = 12345;
console.log(typeof vl);

'use strict'
var vl = "Hello wordl";
console.log(typeof vl);
var vl = 12345;
console.log(typeof vl);

// Functions

//e1
function printHello() {
  var hello = undefined;
	console.log(hello);
  var hello = "dwec2016";
}

printHello();

//e2
function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Juan");*/

//e3
function totalPrecio(p_unidad, cantidad) {
  return p_unidad * cantidad;
}

function totalPrecio2(p_unidad, cantidad) {
	var total = p_unidad * cantidad;
  return total;
}

console.log(totalPrecio(25,4));
console.log(totalPrecio2(75,3));

//e4
var totalPrecio3 = function (p_unidad, cantidad) {
	return p_unidad * cantidad;
}

console.log(typeof totalPrecio3);
console.log(typeof totalPrecio3(6,-6));

//If
var precio = 69;

if (precio < 100 ){
	console.log("No es menor que 50");
} else if (precio < 50) {
	console.log("Es menor que 50");
} else {
	console.log("Es barato");
}

//Switch
var usertype = 1;
switch (usertype) {
	case 1:
  	console.log("OK");
  	break;
  case 2:
  	console.log("You can acces this area");
  	break;
  case 3:
  	console.log("You don't have acces this area");
  	break;
  default:
   console.log("Invalid type");
}

//While / Do While / For
var value = 1;
while(value <=5) {
	console.log(value++);
}

var value = 1;
while(value <=5) {
	console.log(++value);
}

var value = 1;
do {
	console.log(value++);
} while(value <=5);*/

/*for(var i =1, j=limit; i<=limit && j>0;i++, j++) {
	console.log(i + "-" + j);
}*/

var arr = new Array(4, 33, 69, 12); 
for(var index in arr) {
	console.log(index + " = " + arr[index]);
}

var person = {name:"Juan", age:45, phone: "666666666"};
for(var field in person) {
	console.log(field + " = " + person[field]);
}

//Basic datatype
console.log(typeof 3);
console.log(typeof 3.56);
var numerosExponenciales = 2.2e-3;
console.log(typeof numerosExponenciales);
console.log(numerosExponenciales);
console.log(2.384737373.toFixed(2));
console.log(2.384737373.toExponential());

var a = 3;
var b = "asdf";
var r1 = a * b;
console.log(r1);

var c;
var r3 = a + c;
console.log(r3);

var d= "12";
console.log(a * d);
console.log(a + d);
console.log(a + +d);

// UNDEFINED Y NULL
var value;//Value = undefined;
console.log(value);
value = null;
console.log(typeof value);