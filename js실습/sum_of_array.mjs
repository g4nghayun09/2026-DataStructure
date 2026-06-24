
// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(sumArray(arr));

function sumarray(arr) {
    if (arr.length === 1)
        return arr[0];          // 기저조건

    return arr[arr.length - 1] + sumarray(arr[arr.slice(0, -1)]);
}
let arr = [1, 2, 3, 4, 5];
console.log(sumarray(arr));

