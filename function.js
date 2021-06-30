//Function
//- fundamental building block in the program ( 프로그램을 구성하는 기본적인 빌딩 블럭 )
//- subprogram can be used multiple times (재사용 가능 )
//- performs a task or calculates a value (한가지이 태스크, 값을 계산 )

//1. Function declaration
//function name(param1, param2) { body ... return;}
//one function === one thing , 하나의 함수는 한가지 일만 하도록
//naming : doSumething, command, verb, 동작하는 커멘트, 동사 형태로
//e.g. createCardAndPoint -> createCard, createPoint, 세분화하도록!
//function is object in JS, 함수===오브젝트로 간주

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello 😝');
log(1234);

//Type Script
// 전달될 파라미터 타입과, 리턴될 데이터 타입을 한눈에 명시 가능
//function log(message: string): number {
//console.log(message);
//return 0;
//}

//2. Parameters
//premitive parameters : passed by value
//object parameters : passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie);

//3. Default parameters (add in ES6)
// 파라미터 값이 없는 경우 한줄로 정의 가능
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4. Rest parameters (added in ES6)
// ... -> 배열 형태로 전달
function printAll(...args){
    for(let i=0; i<args.length;i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding','ellie');

//5. Local scope
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'Hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage); //error
    return undefined; //생략 가능
}
printMessage();

//6.Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);

//7. Early returnm early exit
//bad
// 블럭 안에서 로직을 많이 작성하게 되면 가독성이 떨어짐
function upgradeUser(user){
    if(user.point >10 ){
        //long ugrade logic ... 
    }
}

//good
//조건이 맞지 않는 경우 빨리 리턴
function upgradeUser(user){
    if(user.point <=10 ){
        return;
    }
    //long ugrade logic ... 
}

//First-class function
//function are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other function
//can be returned by another function

//1. Function expression
//a function declaration can be called earlier than it is defined. (hoisted)
//a function expression is created when the excution reaches it.

const print = function(){   //anonymous function
    console.log('print');
}
print();
const printAgain= print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer=='love you'){
        printYes();
    } else{
        printNo();
    }
}
const printYes  = function(){
    console.log('yes!');
};
//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function print(){   //named function
    console.log('no!');
    //print(); //함수 재호출, call stack size exceeded!
};
randomQuiz('wrong',printYes, printNo);
randomQuiz('love you',printYes, printNo);

//Arrow function
//always anonymous

const simplePrint = ()=> console.log('simplePrint!');
const add = (a,b) => a+b;
const simpleMultyply = (a,b)=>{
    //do somthing more
    return a*b;
};

//IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();
//선언과 동시에 호출
