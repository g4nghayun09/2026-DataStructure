function euclidean(num1, num2) {
    let r = num1 % num2;
    if (r == 0)
        return num2;
    num1 = num2;
    num2 = r;

    return euclidean(num1, num2);
}

// function euclidean(num1, num2) {
//     return (num2 === 0) ? num1 : euclidean(num2, num1 % num2);
// }

console.log(euclidean(78, 66));