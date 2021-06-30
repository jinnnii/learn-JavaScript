//1. String concatenation
console.log('my'+' cat');
console.log('1'+2);
console.log(`string literals: 1+2 = 

'''
${1+2}`);

console.log('ellie\'s \n\tbook');


//2. Numeric operators
console.log(1+1);//add
console.log(1-1);//sub
console.log(1/1);//div
console.log(1*1);//multi
console.log(5%2);//remainder
console.log(2**3);//exponentiation =2^3

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++ counter; //3
//counter = counter +1 ;
//preIncrement = counter;
const postIncrement = counter++; //2
//postIncrement = counter;
//counter = counter +1;

//4. Assignment operators
let x =3;
let y = 6;
x+=y; 
x-=y;
x*=y;
x/=y;

//5. Comparison operators
console.log('10<6'); //less than
console.log('10<=6'); //less than or equal
console.log('10>6'); //greater than
console.log('10>=6'); //greater than or equal

//6. Logical operators : || (or), &&(and), !(not)
const value1 = false;
const value2 = 4<2; //false

//||(or), finds the first truthy value 
//= 가벼운 value 먼저, 무거운 함수는 뒤에 배치
console.log(`or:${value1 || value2 ||check()}`);

function check(){
    for(let i=0; i<10; i++){
        //wasting time
        //if val1or2 true => forX
        console.log('😱');
    }
    return true;
}

//&& (and). finds the first falsy value
console.log(`and:${value1 && value2 &&check()}`);

//often used to compress long if-statement
//nullableObject && nullableObject.somthing =null 일 경우 false 주는거 많이 이용

//if(nullableObject !=null){
//      nullableObject.something
//}

function check(){
    for(let i=0; i<10; i++){
        //wasting time
        console.log('😱');
    }
    return true;
}

//7. Equality
const stringFive= '5'
const numberFive = 5;

//==loose equality, with type conversion
console.log(stringFive == numberFive); //ture
console.log(stringFive !=numberFive);

//===strict equality, no type conversion
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive);

//object equality by reference = 오브젝트는 각각 다른 레퍼런스(주소)가 메모리에 저장된다. (데이터x)
const ellie1 = {name : 'allie'}
const ellie2 = { name : 'allie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

//equality - puzzler !타입에 신경 쓰는 것이란...
console.log(0==false); //true
console.log(0===false); //false -> boolean이 아니므로
console.log(''==false); //true
console.log(''===false); // false
console.log(null == undefined); //true
console.log(null === undefined); //false

//8. conditional operators : if
// if, else if, else
const name = 'coder';
if(name === 'ellie'){
    console.log('welcome, Ellie!');
}else if (name === 'coder'){
    console.log('You are amazing coder');
}else {
    console.log('unkwnon');
}

//9. Ternary operator : ?
//condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

//10. Switch statement 
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}

//11. Loops
//while loop, while the condition is truthy,
//body code is executed.
let i=3;
while (i>0){
    console.log(`while : ${i}`);
    i--;
}

//do while loop, body code is executed first,
//then check the condition
do{
    console.log(`do while : ${i}`);
    i--;
}while(i>0);

//for loop, for(begen; condition; step)
for(i=3; i>0; i--){
    console.log(`for:${i}`);
}

for(let i =3 ; i>0; i=i-2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for(let i = 0; i<3; i++){
    for(let j=0; j<2; j++){
        console.log(`i:${i}, j:${j}`);
    }
}

//break, continue
//Q1. iterate from 0 to 10 and print only even(짝수) numbers (use continue)
for(let i=0; i<=10; i++){
    if(i%2 === 0) console.log(`continue : ${i}`);
    else continue;
}

//Q2. iterate from 0 to 10 and print number until reaching 8 (use break
for(let i=0; i<=10; i++){
    if(i>8) break;
    console.log(`break : ${i}`);
}
