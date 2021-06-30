//number, string, boolean, null, undefined
//primitive 타입
//메모리에 변수를 위한 공간이 생기고, 그 안에 데이터가 들어간다.
let number = 2;
let number2 = number; //number에 들어간 값이 복사되서 들어간다.

console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);

//object
//위를 제외한 모든 것들은 모두 object!
// 메모리에 오브젝트의 위치를 나타내는 레퍼런스가 들어간다.
let obj = {
    name: ellie,
    age: 20,
};
console.log(obj.name);

let obj2 = obj;
obj.name = 'james';
console.log(obj.name);
console.log(obj2.name);

let a = 2;
a = 5;

const num = 2;
//num = 4; 값 변경 불가능🔥

const obj3 = {
    name: 'ellie',
    age: 4
}
/*obj = {
    name : 'james',
    age : 7
}*/ // 이것은 변경 불가능!
//자체 레퍼런스 변경이 안되기 때문, 
//대신에 obj가 가리키고 있는 변수는 변경 가능!
