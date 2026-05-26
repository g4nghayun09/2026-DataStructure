function strLength(str) {
    if (str.length === 1)
        return 1;
    return 1 + strLength(str.slice(0, -1));
}
let str = "abcdefghi";
console.log(strLength(str));