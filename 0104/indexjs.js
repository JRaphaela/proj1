//alert("링크방식")

// var
/*
var name = "홍길동";
var name = "나비";
var age; //값이 할당되지 않을때는 undefined할당
age = 20; //var 할당 가능, 재할당 할때 var 안써도됌 
console.log(age)
age = 10;
console.log(age);
*/


//let
/*
let name = "홍길동"
let name = "나비" //중복 선언 불가 
console.log(name)
name = "성춘향"; //값을 할당가능 
let age; //값이 할당되지 않을 때 undefined할당 데이터를 바꿔주는 건 가능
console.log(age)
*/

/*
//const
const age = 20 //무조건 값 할당해야함 
//const age = // 중복선안 안됌 
// age = 30;  // 문법오류 why? const 한번선언하면 값을 바꾸지 않은 무조건 20

const AGE = 20; //대소문자 구분하기에 소문자와 다른 선언임 

*/



/*
//데이터 타임
let myName = "홍길동";
var email = 'gildong@naver.com';
let city = "서울";
console.log(myName, email, city);
console.log("안녕하세요 " + myName+ "입니다");
console.log(`안녕하세요 ${email}입니다`)

*/
/*
//Number
let number = 123;
console.log(number);
//Boolean
const checked = true;
const isShow = false;
console.log(checked, isShow); 
//undefined : 미할당 데이터
let noData;
console.log(noData);
//Null : 의도적으로 비어있음을 의미 
let empty = null;
console.log(empty);
*/

//array 배열
let colors = ['red','orange','yellow','green'];
console.log(colors[0], colors[1])
console.log(colors.length); //배열의 길이
colors.push('blue'); //배열 추가 (맨뒤)
console.log(colors.length); //추가된 배열의 길이 
colors.unshift("navy") //배열추가 (맨앞)
colors.pop() //배열 제거 (맨뒤)
colors.shift() //배열 제거 (맨앞)
console.log(color.indexOf("orange")) //index 값찾기, 없을땐 -1
console.log(colors.includes("green")) //값존재유무, 존재시 true 없을시 false
console.log(colors.reverse()) //배열값 반전
