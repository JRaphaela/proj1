/*
//오브젝트(객체)는 여러가지 데이터가 하나로 묶여있는 형태 
let cat = {
    //key: value형태
    name: "민성이",
    age: 2,
    isCute: true,
    mew: function() {
        return "야옹"
    }
}

console.log(cat.name)
console.log(cat.age)
console.log(cat.isCute)
console.log(cat.mew())

let person = {
    name: "다미아노",
    age: 27,
    isCute: true,
    gender: function() {
        return "man"
    }
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.isCute)
console.log(person.gender())
*/
/*
//typeof 데이터가 어떤 타입인지 알려주는 키워드
console.log(typeof "Hello")
console.log(typeof true)
const types = 20
console.log(typeof types)
*/

//형 변환: 데이터의 타입을 변환시켜주는 것
//prompt() 사용자에 데이터를 입력받게 하는것
// let mathScore = prompt("수학 점수를 입력하세요")
// let engScore = prompt("영어 점수를 입력하세요")

// let sum = mathScore + engScore 
// console.log(typeof sum)
// let avg = (Number(mathScore) + Number(engScore)) / 2
// console.log(avg)

// console.log("안녕" + "하세요)

/*
//문자형 변환 : 대부분 숫자를 문자로 바꿀때
let num = 123;
console.log(typeof num)

let a = String(num)
console.log(typeof a)

let b = num.toString() //null과 undefined에서 사용불가
console.log(typeof b)
*/
// console.log(Number("1234"))
// console.log(Number("azga1345"))


//연산자
console.log(1+1)
console.log(1-1)
console.log(1*5)
console.log(4/2)
console.log(100 % 2) // 홀짝판단
console.log(99%2) //홀짝 판단
console.log(2 ** 4)

let num = 5 
num += 10 
console.log(num)// 헷갈림. num = num + 10과 동일 
/* console.log(num + 10) 8
이렇게 안쓰고 let num = 5 
num += 10 이렇게 씀 */

let result1, result2; 
let nums = 10, nums2 = 15;

result1 = nums ++; //10 아직까지

result1 = nums++; // 11

console.log(result1)

result2 =++nums2; // 16
result2 =++nums2; //17 
console.log(result2)//그자리에서 증가?? 무슨말이지

/*
//비교연산자 (일치연산자)
let a = 123
let b = '123'

console.log(a == b) // t
console.log(a != b) // f
console.log(a === b) // f
console.log(a !== b) // t
*/

//논리 연산자 
// \\ or 연산자는 둘 중 하나만 조건이 일치해도 통과
// && and 연산자는 두 조건 모두 일치해야 통과
// ! not 연산자는 반대 
let name = "뽀로로"
let age = 18;
let isAdult = age > 19;

if( name === "뽀로로" age > 19 ) {
    console.log('통과')
} else [
    console.log('돌아가')
]

if(!isAdult) {      //isAult가 false냐?
    console.log('통과')
} else {
    console.log('돌아가')
}






