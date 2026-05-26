function euclidean(m, n) {
    while (true) {
        if (m < n) {
            let t = m;
            m = n;
            n = t;
        }

        r = m % n;
        if (r == 0)
            break;
        else {
            m = n;
            n = r;
        }
    }
    return n;
}

let answer = euclidean(78, 66);
console.log(answer);
// let answer = enclidean(78, 66);