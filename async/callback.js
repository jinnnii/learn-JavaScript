'use strict';

//JavaScript is synchronous 동기적인 JS
// Excute the code block in order after hoisting 
// hoisting이 된 이후부터 코드가 작성 순서에 맞춰서 하나하나씩 동기적으로 실행된다는 뜻, 
// hoisting이 된 이후부터 코드가 나타나는 순서대로 자동적으로 실행이 된다라는 말
// hoisting : var, function declaration var 변수와 함수 선언들이 제일 위로 올라가는 것

// asynchronnous, 비동기적인 실행 방법
console.log('1');
setTimeout(() => console.log('2'), 1000); //n 초 뒤에 콜백함수 실행하는 API
console.log('3');

//Synchronous callback
function printImmediately(print) { //실행할 때 함수 제일 상단에 호출되어짐
    print();
}
printImmediately(() => console.log('hello'));


//Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

//Callback Hell example 💩
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const pass = prompt('enter your password');
userStorage.loginUser(
    id,
    pass,
    user => {
        userStorage.getRoles(
            user,
            userWithroles => {
                alert(`Hello ${userWithroles.name}, you have a ${userWithroles.role} role`)
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error)
    }
);