// Q1. make a string out of an array : 배열을 문자열로 바꾸자
{
    const fruits = ['apple', 'banana', 'orange'];
    let str = "";
    fruits.forEach(element => {
        str+=element;
    });
    console.log(str);

    const result1 = fruits.join();
    const result2 = fruits.join(' | ');
    console.log(result1);
    console.log(result2);
}

  // Q2. make an array out of a string : 문자열을 배열로 바꾸자
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result1 = fruits.split(',');
    const result2 = fruits.split(',', 2);
    console.log(result1);
    console.log(result2);
}

  // Q3. make this array look like this: [5, 4, 3, 2, 1] : 주어진 배열의 순서를 거꾸로 바꾸자
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
    //배열 자체도 변경, 리턴값도 변경
}
  // Q4. make new array without the first two elements : 주어진 배열에서 첫번째, 두번째 요소를 제외한 새로운 배열을 만들자
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2,5);
    //const result = array.splice(0,2);
    //console.log(result); //[1,2] , 삭제된 인덱스 값 리턴
    //console.log(array); //[3,4,5]
    console.log(result); //[3,4,5]
    console.log(array) //[1,2,3,4,5]
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

  // Q5. find a student with the score 90
{
    // find 함수가 false로 리턴되면 다음 인덱스 넘어가고 true가 나오면 멈춤
    const result = students.find(student=> student.score===90);
    console.log(result);
}

  // Q6. make an array of enrolled students
{
    const result = students.filter(student=> student.enrolled);
    console.log(result);
}

  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student)=> student.score * 2 );
    console.log(result);
}

  // Q8. check if there is a student with the score lower than 50
{
    //or, 하나라도 만족하면 true 리턴
    const result1 = students.some(student=> student.score<50);
    console.log(result1);

    //and, 모두 만족해야 true 리턴
    const result2 = students.every(student=> student.score<50);
    console.log(result2);
}

  // Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score,0);
    console.log(result/students.length);

    const result2 = students.reduce((prev, curr) => {
        console.log('-----');
        console.log(prev);
        console.log(curr);
        return prev + curr.score; 
    },0 );
    console.log(result2);
}

  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
{
    const result = students.map(student=>student.score)
        .filter(score=>score>=50)
        .join();
    console.log(result);
}

  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
{
    const result = students.map(student => student.score)
        .sort((a,b)=> a-b) //넞->높 (b-a)=> 높->낮
        .join();
        console.log(result);
}