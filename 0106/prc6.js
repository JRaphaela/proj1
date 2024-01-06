let now = new Date().getHours();
console.log(now); //현재 시간에 대한

now < 12 ? console.log('오전') : console.log('오후'); //기준2
now >= 12 ? console.log('오후') : console.log('오전');
