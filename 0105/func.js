//함수 
//함수 선언문
// function sayHello() {
//     console.log("지역 Hello"); // 얘는 실행 안됌  그래서 이름 불러줘야하는 과정 세이헬로 괄호  7줄에 있음
// }
// console.log("전역 Hello"); //하나의 지역이라 뜸 
// sayHello();

/*
///////////함수 선언문 멍어렵네 ㅁㅊ//////////
//sumFunc : 덧셈기능이 있는 함수 선언
sumFunc(15, 10); //호이스팅
const num1 = 10; //전연변수
function sumFunc(num2, num3) { //num2,num3는 매개변수. 괄호()안에 변수들을 매개변수라함
    const num1 = 11;
    const sum = num1 + num2 + num3
   // console.log("지역", num1);
    console.log("결과", sum);
    //return은 함수 제일 마지막에 사용. 값을 다시 전달
    return sum;

}
// console.log("전역" , num1)
sumFunc(65, 10); //여기에서 외부수치가 들어왔는데도 11줄에 sumFunc이 비어있으면 안되고 ()num2채워야함 서로 맞춰야함 //여기값은 인자라고 부름 
// 어떤 키워드에 num2 = 50 
// num3 = 10 
let result = sumFunc(30, 20)
// let result = 61
console.log(result)
*/

////////////////////함수표현식///////////////////
// sayHello(); //위에쓰면 에러남 = 호이스팅 불가 function만나지않아서 올라가지않음 
let sayHello = (num) => {
    console.log(num)
    console.log("Hello")
    return num + 10 
}
// sayHello(20);
let result = sayHello(30)
console.log(result)
