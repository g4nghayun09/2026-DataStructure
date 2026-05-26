// for문을 이용해서 팩토리얼 구하기 - 상향식 방법
// function factorial(num) {
//     let sum = 1;
//     for (let i = 1; i <= num; i++) {
//         sum *= i;
//     }
//     return sum;
// }
// console.log(factorial(5));

// 재귀함수를 이용해서 팩토리얼 구하기 - 하향식 방법
function factorial(num) {
    if (num === 1)
        return 1;
    return num * factorial(num - 1);
}
console.log(factorial(5));