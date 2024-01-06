/*
//실습7
//step1. 0~1000까지 증가
//step2. 13배수이면서
//step3. 홀수인 숫자 출력
for (let i = 0; i < 1001; i++) {
    // console.log(i);
    if (i % 2 == 1) {
        // console.log(i);
    }
    if (i % 13 == 0) {
        console.log(`13의 배수이면서 홀수인 숫자 : ${i}`);
    }
}

const inputNum = Number(prompt('숫자 입력하세요'));
for (let i = 0; i <= inputNum; i++) {
    if (i % 13 == 0 && i % 2 == 1) {
        console.log(i);
    }
}
*/

//이중for문
//for문 안에 또 for문
/**
 * * for ()  { //조건1.
 *         for() {  //조건2.
 *      }
 * }
 */
///실습8
for (let dan = 2; dan <= 9; dan++) {
    console.log(`====${dan}단====`);
    for (let i = 1; i < 10; i++) {
        console.log(`${dan} x ${i}= ${dan * i}`);
    }
}
