// 조건문 
// if문
/*
조건은 항상 t or f가 와야함
if (조건) {
    조건이 참일때 실행
} else {
    조건이 거짓일때 실행
}
*/
/*
if(5 > 6) {
    console.log("큽니다")
}   else {
    console.log("작습니다")
}
let isShow = true;
let checked = false;
//else는 선택 
if( isShow ) {
    console.log('show');
}
// if(조건) 일때 조건은 참일때 실행
// 이 조건이 거짓일때 실행하고 싶으면 not 연산자'!'사용
if (!chcked) {
    console.log('checked');
}

// if /else if /else
let name = '홍길동';
if( name === '홍길동') {
    console.log('홍길동입니다')
} else if ( name === '성춘향') {
    console.log('성춘향입니다')
} else if ( name === '이몽룡') {
    console.log('이몽룡입니다')
} else {
    console.log('변사또입니다')
}       //왜 값이 안나올까
*/

// if 중첩문
const myId = 'abc' ;
const myPw = '1234' ;
const inputId = prompt("아이디를 입력하세요");
const inputPw = prompt("비밀번호를 입력하세요");
console.log(inputId, inputPw);
if ( myId === inputId) {
    if( myPw === inputPw) {
        console.log('로그인에 성공했습니다')
    }   else {
        console.log('비밀번호가 틀립니다')
    }
}   else {
        console.log('아이디가 틀립니다')
}



//삼항 연산자 
let myId = 'abc';
let myPw = '1234';
const inputId = prompt("아이디를 입력하세요")
const inputPw = prompt("비번을 입력하세요")


myId === inputId ? 

    // myPw === inputPw ? 
    // console.log('로그인에 성공하였습니다'): console.log('비밀번호가 틀렸습니다')
    :console.log('존재하는 아이디') : console.log('아이디가 틀립니다')