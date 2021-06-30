//함수 선언

//1. return null
function doSomething(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result);
}

//2. return something 
function add(a, b) {
    return a + b;
}

//함수 호출
//함수 호출할 때는 ()를 꼭 넣도록!
//()생략 시 함수 자체를 전달하는 것
doSomething(add);
const addFun = add;
addFun(1, 2);