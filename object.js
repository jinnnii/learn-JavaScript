//Object
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = {key : value}; 

//1. Literals and properties
/*const name = 'ellie';
const age = 4;
print(name,age);
function print(name,age){
    console.log(name);
    console.log(age);
}*/

const obj1= {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}
const ellie = {name: 'ellie', age:4};
print(ellie);

//with JavaScript magic (dynamically typed language) 동적

//can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

//can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob); //undefined

//2. Computed properties, 계산된
// key should be always string!
// 동적(RunTime)에서 결정될 때, 즉, 
// 정확하게 어떤 key가 필요한지 모를 때
console.log(ellie.name); //dot
console.log(ellie['name']);//array
console.log(ellie[name]); //undefined;

ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj.key); //undefined
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

//3. Property value shorthand
const person1 = {name : 'bob', age : 2};
const person2 = {name : 'steve', age : 3};
const person3 = {name : 'dave', age : 4};

const person4 = makePerson('ellie', 30);
console.log(person4);

function makePerson(name, age){
    return {
        name, age
        //name : name, age : age 축소화
    };
}

//4. Constructor function
const person5 = new Person('ellie', 30);
console.log(person5);
function Person(name, age){
    // this = {};
    this.name= name;
    this.age= age;
    // return this;
}

//5. in operator : property existence check (key in obj)
// 키가 있는지 없는지 확인하는 오퍼레이터
console.log('name' in ellie); //true
console.log('random' in ellie); //false
console.log(ellie.random); //undefined

//6. for..in vs for..of
//for (key in obj)
for(key in ellie){
    console.log(key);
}

//for (value of iterable)
// not Object, Array list 등에서 사용
const array = [1,2,3,4,5];
for(let i =0; i<array.length; i++){
    console.log(array[i]);
}

for(value of array){
    console.log(value);
}

//7. Fun cloning
// Object.assign (dest, [obj1, obj2, obj3 ... ])
const user= {name: 'ellie', age : '20'};
const user2 = user;
user2.name ='coder';
console.log(user); // not clone

//old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user)

const user5 = Object.assign({}, user);
console.log(user5);

//another example
//source 뒤 -> 앞에 덮어 씌우기
const fruit1 = {color: 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue
console.log(mixed.size); // big