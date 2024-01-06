//조건문
/*
switch(x) {    // x === 값1
    case 값1:
        break;
    case 값2:  //x === 값2
        break;
    default: 
        break;
}
break: 조건문, 반복문에서 빠져나갈때 사용하는 키워드
*/
let a = 7 * 1;
switch (a) {
    case 3:
        console.log('현재 값은 3입니다');
    // break;
    case 4:
        console.log('현재 값은 4입니다');
    //  break;
    case 5:
        console.log('현재 값은 5입니다');
    // break;
    default:
        console.log('알 수 없는 값입니다');
        brkea;
}

let grade = 'B';
switch (grade) {
    case 'A':
        console.log('학점 A');
        break;
    case 'B':
        console.log('학점 B');
        break;
    case 'C':
        console.log('학점 C');
        break;
    case 'D':
        console.log('학점 D');
        break;
    case 'F':
        console.log('학점 F');
        break;
    default:
        console.log('오류발생');
}
