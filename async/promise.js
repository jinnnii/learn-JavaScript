'use strict';

//Promise is a JavaScript object for asynchronous operation.
//자바스크립트 안에 내장되어진 오브젝트로, 비동기적인 것을 수행할 때 콜백함수 대신에 유용하게 쓸 수 있는 오브젝트
//1. state : 프로세스가 무거운 operation을 수행하고 있는 중인지, 성공/실패 여부를 확인
//2. producer / consumer : 정보를 제공하는 제공자와 소비하는 소비자 

//State : pending -> fulfilled or rejected
//Producer vs Consumer

//1. Producer
//when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        //resolve('ellie');
        reject(new Error('no network...'));
    }, 2000);
});

//2. Consumers : then, catch, finally 를 가지고 값을 가져올 수 있음
promise//
    .then((value) => { //promise가 정상적으로 실행이 되어 최종적으로 resolve라는 콜백함수로 전달한 값이 value 파라미터로 들어온 것
        console.log(value);
    })
    .catch(error => {// Chainning : then을 호출하여 리턴된 promise에 다시 catch 등록 / 에러가 발생되어 최종적으로 reject라는 콜백함수 실행
        console.log(error);
    })
    .finally(() => { //성공/실패 여부와 상관없이 맨 마지막으로 기능을 수행함
        console.log('finally');
    });

//3. Promise chaining
// 여러가지를 동시에 묶어서 다른 비동기적인 것들을 묶어서 처리할 수 있음
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});
fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num)); //총 2초 소요


//4. Error Handling
//promise를 리턴하는 함수(=>1초 있다가 이모지를 리턴)
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() =>
            //resolve(`${hen}=>🥚`), 1000);
            reject(new Error(`${hen}=>🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg}=>🍳`), 1000);
    });

getHen()
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(error => console.log(error));//3초

//콜백함수를 전달할 때, 받아오는 value를 하나로 호출하는 경우 생략 가능, 암묵적으로 전달
getHen()
    .then(getEgg)
    .catch(console.log)
    .then(cook)
    .then(console.log);

//에러가 발생하지 않도록 에러가 나는 부분 대체
getHen()
    .then(getEgg)
    .catch(error => {
        return '🍞';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);
