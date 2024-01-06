//함수 
//함수 선언문
// function sayHello() {
//     console.log("지역 Hello"); // 얘는 실행 안됌  그래서 이름 불러줘야하는 과정 세이헬로 괄호  7줄에 있음
// }
// console.log("전역 Hello"); //하나의 지역이라 뜸 
// sayHello();

//sumFunc : 덧셈기능이 있는 함수 선언
const num1 = 10; //전연변수
function sumFunc() {
    const num1 = 11;
    console.log(num1)
}
console.log(num1)
sumFunc();