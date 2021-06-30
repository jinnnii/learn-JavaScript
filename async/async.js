//async & await
//clear style of using promise :)

//1. async
//...1. sync
function fetchUser() {
    //do network request in 10 sec..
    return 'ellie';
}
const user = fetchUser();
console.log(user); //10초뒤 리턴되어 출력

//...2. promise
function fetchUser2() {
    return new Promise((resolve, reject) => {
        //do network request in 10 sec..
        resolve('ellie');
    });
}
const user = fetchUser2();
user.then(console.log);

//...3. async
async function fetchUser3() {
    //do network request in 10 sec..
    return 'ellie';
}
const user = fetchUser3();
user.then(console.log);

//2. await ✨
//async가 붙은 function 안에서만 사용 가능
//delay가 끝날 때까지 기다려 줌
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    throw 'error';
    return '🍌';
}

//promise Hell
function pickFruits1() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple}+${banana}`)
    });
}
pickFruits1().then(console.log);

async function picFruits2() {
    try {
        const apple = await getApple(); //1초
        const banana = await getBanana(); //+1초 = 2초
        return `${apple}+ ${banana}`;
    } catch (e) {

    }
}
pickFruits2().then(console.log);

async function picFruits3() {
    //promise는 만들자 마자 실행!
    //병렬적으로 기능을 사용할 수 있는 경우 promise사용, 서로 연관없는 코드
    const applePromise = getApple(); //1초
    const bananaPromise = getBanana(); //1초 = (병렬) 1초
    const apple = await applePromise();
    const banana = await bananaPromise();
    return `${apple}+ ${banana}`;
}
pickFruits2().then(console.log);

//3. useful Promise APIs
//promise 배열을 전달하게 되면 모든 promise들이 병렬적으로 실행후 리턴을 다 받을 때까지 모아주는 api, 모아지면 then 으로 배열 전달
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);

// race : 배열에 전달된 promise 중에서 가장 먼저 값을 리턴하는 것만 전달
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana]);
}
pickOnlyOne.then(console.log);