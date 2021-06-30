"use strict";

console.log("Hello world");

let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

//var (don't ever use this!)
console.log(age);
age = 4;
console.log(age);
var age;

{
  age = 4;
  var age;
}
console.log(age);

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value : ${count}, type: ${typeof count}`);
console.log(`value : ${size}, type: ${typeof count}`);

//number-speicla numeric values: +-infinity, NaN
const infinity = 1 / 0;
const negativaInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativaInfinity);
console.log(nAn);

const bigInt = 123456789123456789123456789123456789n;
console.log(`value : ${bigInt}, type: ${typeof bigInt}`);

//string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value : ${helloBob}, type : ${typeof helloBob}`);

//symbor, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(gsymbol1 === gsymbol2); //true
console.log(`value : ${symbol1.description}, type: ${typeof symbor1}`);

let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = "7" + 5;
console.log(`value : ${text}, type : ${typeof text}`);
text = "8" / "2";
console.log(`value : ${text}, type : ${typeof text}`);
console.log(text.charAt(0)); //error

//object
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;
