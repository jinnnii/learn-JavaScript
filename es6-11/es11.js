//Optional Chaining

{
    const person1 = {
        name: 'Ellie',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob',
            },
        }
    };
    const person2 = {
        name: 'Bob'
    };

    //💩💩
    {
        function printManager(person) {
            console.log(
                person.job.manager.name
                //person.job
                //? person.job.manager
                //? person.job.manager.name
                //: undefined
                //: undefined
            );
        }
        printManager(person1);
        //printManager(person2); //error!
    }

    //💩
    {
        function printManager(person) {
            console.log(person.job && person.job.manager && person.job.manager.name)
        }

        printManager(person1);
        printManager(person2);
    }

    //Good!!!
    {
        function printManager(person) {
            console.log(person.job?.manager?.name);
        }

        printManager(person1);
        printManager(person2);
    }
}
//Nullish Coalescing Operator
{
    //Local OR operator
    //false : false, '', 0, -0, null, undefined
    {
        const name = 'Ellie';
        const userName = name || 'Guest';
        console.log(userName); //Ellie
    }
    {
        const name = null;
        const userName = name || 'Guest';
        console.log(userName); //Guest
    }
    //Hmm..
    {
        // 사용자가 이름을 주고 싶지 않을 때, 0일 때도  guest, undefined 할당
        const name = '';
        const userName = name || 'Guest';
        console.log(userName); //Guest

        const num = 0;
        const message = num || 'undefined';
        console.log(message); // undefined
    }
    //Good!!
    {
        // 앞에 값이 있다면 앞, 값이 없다면 뒤
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName); // (공백)

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message); //0
    }

}