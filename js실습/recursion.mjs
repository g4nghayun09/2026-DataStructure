// 재귀 호출
// function myFunction(number) {
//     console.log(number);
//     myFunction(number + 1);
// }

// myFunction(1);

function myFunction(number) {
    if (number > 3)            // 기저 조건
        return;
    console.log(number);
    myFunction(number + 1);
}

myFunction(1);

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }