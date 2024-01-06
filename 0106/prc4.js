/*
//by_myself
let age = Number(prompt("나이입력"));

if ( age >= 20) {
    console.log('성인')
}   else if ( age >= 17) {
    console.log('고등학생')
}   else if ( age >= 14) {
    console.log('중학생')
}   else if ( age >= 8) {
    console.log('초등학생')
}   else ( age >= 0) {
    console.log(유아)
}
let name = String(prompt("성별입력"))
*/


////////////////실습4,5)////////////////
//by_martin
let age = Number(prompt("나이를 입력하세요"));
let gender = prompt("성별을 입력하세요(남/여)")
//나이를 기준으로
if( age >= 20) {
   console.log('성인')
    if( gender === '남자') {
        console.log('성인 남자')
    } else {
        console.log('성인 여자')
    } 

} else if( age >= 17) {
    console.log('고등학생')
} else if( age >= 14) {
    console.log('중학생')
} else if( age >= 8) {
    console.log('초등학생')
} else  {
    console.log('유아')
}

// 성별을 기준으로 했을때
if ( gender === '남자') {
    ageFunc(age, gender);
}   else if ( gender === '여자') {
    ageFunc(age, gender);
}  else {
    console.log('성별이 틀렸습니다')
}

function ageFunc(age, gender) {
    if( age >= 20) {
        console.log(`성인 ${gender}`);
    }   else if( age >= 17) {
        console.log(`고등학생 ${gender}`);
    } //   마저입력하기 
}

