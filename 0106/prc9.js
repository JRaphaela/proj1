/* by_myslef
let sum = 0;

for (let n = 0; n < 101; n++) {
    if (n * 6 == 0) {
        sum += n;
    }
}
console.log(sum);

*/

//martin'code
let num = 50;
let sum = 0;
for (let i = 0; i < num; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
        continue;
    }
    sum += i;
}
console.log(sum);
