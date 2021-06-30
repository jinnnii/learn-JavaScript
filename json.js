//JSON
//JavaScript Objcet Notation

//1. Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color: 'white',
    size : null,
    birthDate : new Date(),
    //symbol : Symbol('id'), // symbol 도 제외, 자바스크립트에서만 존재하는 거는 json에서 인식 안됨
    jump: ()=>{console.log(`${name} can jump!`);} // 함수는 제외
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name"]); // 원하는 property만 json으로 변환
console.log(json);

//세밀하게 통제 가능한 콜백함수 사용하기
//맨처음 key, value 는 오브젝트의 최상위의 것이 출력
json = JSON.stringify(rabbit, (key, value)=>{
    console.log(`key : ${key}, value : ${value}`);
    return key === 'name' ? 'ellie' : value ;
}); 
console.log(json);

//2. JSON to Object
//parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
//obj.jump(); // 함수는 직렬화될 때 포함되지 않았기 때문에 error!

console.log(rabbit.birthDate.getDate()); // 오브젝트
//console.log(obj.birthDate.getDate()); // String으로 받아오기 때문에 error!

const obj2 = JSON.parse(json, (key, value)=> {
    return key==='birthDate'? new Date(value) : value;
});

console.log(obj2.birthDate.getDate());