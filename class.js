'use strict';
//Object-oriendted programming
//class: template
//object : instance of a class
//JavaScript classes
// - introduce in ES6
// - syntactical sugar over prototype-based inheritance
// 기존에 존재하던 프로토타입을 베이스로 기반해서 문법만 클래스가 추가 된 것

//1. Class declarations
class Person{
    //constructor, 생성자
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name} : hello ~ `);
    }
}

const ellie = new Person('ellie', 25);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }

    set age(value){
        //if(value < 0){
        //    throw Error('age can not be negative!');
        //}
        //this.age = value // error!
        //this._age= value;
        this._age = value<0 ? 0: value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

//3. Fields (public, private)
//Too soon!
//
class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //undefined...

//4. Static properties and methods
//Too soon!
// 오브젝트에 상관없이 클래스가 가지고 있는 고유한 값이나 메소드를 쓰고 싶을 때,
// 오브젝트가 아니라 클래스 자체에 연결되어 짐
// 오브젝트 상관없이 공통적으로 클래스에서 쓸 때 사용, 메모리 절약
class Article{
    static publisher ='Dream Coding';
    constructor(articleNumber){
        this.articleNumber=articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
console.log(article1.publisher); // undefined...
console.log(Article.publisher); //Dream Coding
Article.printPublisher(); //Dream coding

//5. Inheritance
// a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    draw(){
        console.log(`drawing ${this.color} color!`);
    }
    getArea(){
        return width*this.height;
    }
}

class Rectangle extends Shape{} //상속
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('🔺');
    }
    getArea(){ //다양성 ( 재정의, 오버라이딩)
        return (htis.width * this.height)/2;
    }
}
const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
const triangle = new Triangle(20,20,'red');
triangle.draw();

//6. Class checking instanceOf
// 오브젝트가 해당 클래스에서 만들어진 건지 확인하는 용도
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true