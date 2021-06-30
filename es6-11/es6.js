//Shorthand property names
{
    const ellie1 = {
        name: 'Ellie',
        age: '18',
    };

    const name = 'Ellie';
    const age = '18';

    //Hmm...
    const ellie2 = {
        name: name,
        age: age,
    };

    //Good!
    //key 와 value가 동일할 때는 하나만 쓸 수 있음
    const ellie3 = {
        name,
        age,
    };

}

//Destructuring Assignment
{
    //Object => {}
    const student = {
        name: 'Anna',
        level: 1,
    };

    //Hmm...
    {
        const name = student.name;
        const level = student.level;
        console.log(name, level)
    }

    //Good!
    {
        //오브젝트에 있는 키의 이름을 괄호 안에 정의해주고, Object를 작성하게 되면, value값이 key에 맞게 들어감
        const { name, level } = student;
        console.log(name, level)

        const { name: studentName, level: studentLevel } = student;
        console.log(studentName, studentLevel);
    }

    //array=> []
    const animals = ['🐶', '🐺'];

    //Hmm...
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    //Good!
    {
        const [first, second] = animals;
        console.log(first, second);
    }
}

//Spread Syntax
{
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];

    //array copy
    //... : array에 있는 것들을 각각 낱개로 가져와서 복사해 오는 것
    const arrayCopy = [...array];

    // 기존에 카피한 것에 새로운 array를 추가하고 싶으면?
    const arrayCopy2 = [...array, { key: 'key3' }];

    //하지만 카피한 array 모두 같은 레퍼런스를 가리키므로, 전부다 영향이 간다!
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);

    //object copy
    const obj3 = { ...obj1 };
    console.log(obj3);

    //array concatenation
    const fruit1 = ['🍎', '🍓', '🍑'];
    const fruit2 = ['🍋', '🍍'];
    const fruits = [...fruit1, ...fruit2]; //하나로 병합 가능!
    console.log(fruits);

    //object merge
    {
        const dog1 = { dog1: '🐶' };
        const dog2 = { dog2: '🐕' };
        const dogs = { ...dog1, ...dog2 };
        console.log(dogs);
    }

    //notice!
    {
        //키 이름이 둘다 같으면, 뒤에 오는 것이 앞에 있는 것을 덮어 씌움!
        const dog1 = { dog: '🐶' };
        const dog2 = { dog: '🐕' };
        const dogs = { ...dog1, ...dog2 };
        console.log(dogs); //'🐕' 출력..
    }
}

//Default parameters
{
    //Hmm...
    {
        function printMessage(message) {
            if (message == null) //
                message = 'default message';
            console.log(message);
        }

        printMessage('hello?');
        printMessage(); //undefined
    }

    //Good!
    {
        function printMessage(message = 'default message') {
            console.log(message);
        }
        printMessage('hello?');
        printMessage(); //default message
    }
}

//Ternary Operator
{
    const isCat = true;
    //Hmm..
    {
        let component;
        if (isCat) {
            component = '🐺';
        } else {
            component = '🐶';
        }
        console.log(component);
    }

    //Good!
    {
        const component = isCat ? '🐺' : '🐶';
        console.log(component);
    }
}

//template Literals
{
    const weather = '🌤';
    const temparature = '16';

    //Hmm..
    console.log(
        'Today weather is' + weather + 'and temparature is' + temparature
    );

    //Good!
    console.log(`Today is ${weather} and temparature is ${temparature}`);
}