/*
let person = {
    name: "여혜",
    age: 28,
    gender: "여자",
    hobby: function() {
        return "read books"
    }
}

console.log(person.name)
console.log(person.age)
console.log(person.gender)
console.log(person.hobby())
*/
/*
console.log(typeof 123 + typeof "123" + "data type");
console.log("Typeof를 boolean이나 null에 사용하면," + typeof null + "boolean 결과를 얻을 수 있습니다.")
*/

let mathScore = prompt("수학점수입력")
let engScore = prompt("영어점수입력")

let sum = mathScore + engScore
console.log(typeof sum)
let avg = (Number(mathScore) + Number(engScore)) / 2
// let avg = (mathScore + engScore) / 2
console.log(avgScore)